import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const bookingId = params.id;

    if (!bookingId) {
      return NextResponse.json({ error: 'Booking ID required' }, { status: 400 });
    }

    // Use service role to bypass RLS
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data: booking, error } = await supabase
      .from('pending_bookings')
      .select('*')
      .eq('cal_booking_id', bookingId)
      .eq('status', 'awaiting_payment')
      .single();

    if (error) {
      console.error('Error fetching booking:', error);
      
      // If booking not found, try to create it from Cal.com data in the request
      // This is a fallback for when webhooks don't work
      console.log('Booking not found, this would be handled by webhook in production');
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json(booking);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}