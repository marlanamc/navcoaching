import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

// Use service role key for webhook (has full access)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      
      case 'payment_intent.succeeded':
        console.log('Payment succeeded:', event.data.object.id);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const { metadata, customer_email } = session;
  
  if (!metadata?.productType || !metadata?.sessions) {
    console.error('Missing metadata in checkout session:', metadata);
    return;
  }

  if (!customer_email) {
    console.error('No customer email in checkout session');
    return;
  }

  try {
    // 1. First, create or get the Supabase Auth user
    let userId = metadata.userId;
    
    if (!userId) {
      // Create a new Supabase Auth user automatically
      console.log('Creating new user for email:', customer_email);
      
      const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
        email: customer_email,
        email_confirm: true, // Auto-confirm email
        user_metadata: {
          created_via: 'stripe_payment',
          first_payment_date: new Date().toISOString(),
          product_type: metadata.productType
        }
      });

      if (authError) {
        console.error('Failed to create auth user:', authError);
        return;
      }

      userId = authUser.user.id;
      
      // Send password setup email
      const { error: resetError } = await supabase.auth.admin.generateLink({
        type: 'recovery',
        email: customer_email,
      });

      if (resetError) {
        console.log('Could not send password setup email:', resetError);
        // Don't fail the whole process for this
      }
    }
    // Calculate expiration date if applicable
    let expiresAt = null;
    if (metadata.expiresInWeeks && parseInt(metadata.expiresInWeeks) > 0) {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + (parseInt(metadata.expiresInWeeks) * 7));
      expiresAt = expirationDate.toISOString();
    }

    // 2. Create session pack record
    const { data: sessionPack, error: packError } = await supabase
      .from('session_packs')
      .insert([{
        user_id: userId,
        pack_type: metadata.productType,
        total_sessions: parseInt(metadata.sessions),
        sessions_remaining: parseInt(metadata.sessions),
        sessions_used: 0,
        status: 'active',
        expires_at: expiresAt,
        stripe_payment_id: session.payment_intent as string,
        amount_paid: session.amount_total ? session.amount_total / 100 : 0
      }])
      .select()
      .single();

    if (packError) {
      console.error('Error creating session pack:', packError);
      return;
    }

    // 3. Update any pending bookings to link to this user
    if (metadata.calBookingId) {
      const { error: bookingError } = await supabase
        .from('pending_bookings')
        .update({ 
          status: 'paid',
          user_id: userId,
          stripe_session_id: session.id
        })
        .eq('cal_booking_id', metadata.calBookingId);

      if (bookingError) {
        console.log('Could not update pending booking:', bookingError);
      }
    }

    // 4. Update user to member status  
    const { error: profileError } = await supabase
      .from('profiles')
      .update({ is_member: true })
      .eq('id', userId);

    if (profileError) {
      console.error('Error updating member status:', profileError);
    }

    console.log('Successfully created session pack:', sessionPack);

    // TODO: Send confirmation email here
    // TODO: Create Notion dashboard if needed
    
  } catch (error) {
    console.error('Error in handleCheckoutCompleted:', error);
  }
}