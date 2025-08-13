import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

// Initialize Supabase with service role
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Verify Cal.com webhook signature
function verifyCalSignature(payload: string, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload);
  const expectedSignature = hmac.digest('hex');
  return expectedSignature === signature;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('cal-signature');
    
    // Log for debugging
    console.log('Webhook received, signature present:', !!signature);
    
    // Verify webhook signature if secret is provided (skip in development)
    if (process.env.NODE_ENV === 'production' && process.env.CAL_WEBHOOK_SECRET && signature) {
      const isValid = verifyCalSignature(body, signature, process.env.CAL_WEBHOOK_SECRET);
      if (!isValid) {
        console.error('Invalid webhook signature');
        return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
      }
    }

    const event = JSON.parse(body);
    console.log('Cal.com webhook received:', event.triggerEvent);

    // Handle different event types
    switch (event.triggerEvent) {
      case 'BOOKING_CREATED':
        await handleBookingCreated(event);
        break;
      
      case 'BOOKING_CANCELLED':
        await handleBookingCancelled(event);
        break;
      
      case 'BOOKING_RESCHEDULED':
        await handleBookingRescheduled(event);
        break;
      
      default:
        console.log('Unhandled event type:', event.triggerEvent);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Cal.com webhook error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}

async function handleBookingCreated(event: any) {
  const { payload } = event;
  
  // Extract booking details
  const bookingDetails = {
    calBookingId: payload.uid,
    eventType: payload.eventType?.slug,
    userName: payload.attendees?.[0]?.name,
    userEmail: payload.attendees?.[0]?.email,
    startTime: payload.startTime,
    endTime: payload.endTime,
    meetingUrl: payload.meetingUrl,
    additionalNotes: payload.additionalNotes,
  };

  console.log('Booking created:', bookingDetails);

  // Determine the product type from event slug
  const productTypeMap: Record<string, string> = {
    'first-session': 'first-session',
    'drop-in-session': 'drop-in',
    '4-session-pack': '4-session',
    '8-session-pack': '8-session',
  };

  const productType = productTypeMap[bookingDetails.eventType || ''];
  
  if (!productType) {
    console.error('Unknown event type:', bookingDetails.eventType);
    return;
  }

  // Check if user exists in our system
  let userId = null;
  const { data: profiles } = await supabase
    .from('profiles')
    .select('id')
    .eq('email', bookingDetails.userEmail)
    .single();

  if (profiles) {
    userId = profiles.id;
  } else {
    // Create a pending booking record for new users
    const { data: pendingBooking } = await supabase
      .from('pending_bookings')
      .insert([{
        cal_booking_id: bookingDetails.calBookingId,
        event_type: bookingDetails.eventType,
        product_type: productType,
        user_email: bookingDetails.userEmail,
        user_name: bookingDetails.userName,
        start_time: bookingDetails.startTime,
        end_time: bookingDetails.endTime,
        meeting_url: bookingDetails.meetingUrl,
        status: 'awaiting_payment'
      }])
      .select()
      .single();

    console.log('Created pending booking:', pendingBooking);
  }

  // Instead of sending email, log the payment link for now
  console.log('Payment link created:', `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/booking/pay?id=${bookingDetails.calBookingId}`);
}

async function handleBookingCancelled(event: any) {
  const { payload } = event;
  
  // Update pending booking status
  await supabase
    .from('pending_bookings')
    .update({ status: 'cancelled' })
    .eq('cal_booking_id', payload.uid);

  console.log('Booking cancelled:', payload.uid);
}

async function handleBookingRescheduled(event: any) {
  const { payload } = event;
  
  // Update pending booking with new times
  await supabase
    .from('pending_bookings')
    .update({
      start_time: payload.startTime,
      end_time: payload.endTime,
    })
    .eq('cal_booking_id', payload.uid);

  console.log('Booking rescheduled:', payload.uid);
}

async function sendPaymentEmail(details: any) {
  // Placeholder for email sending logic
  console.log('Would send payment email to:', details.to);
  console.log('Payment link:', details.paymentLink);
  
  // In production, you'd use an email service like:
  // - SendGrid
  // - Resend
  // - AWS SES
  // - Postmark
}