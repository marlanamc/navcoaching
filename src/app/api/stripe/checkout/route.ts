import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { PRODUCTS, ProductType } from '@/lib/products';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const { productType, userId, userEmail: requestUserEmail, calBookingId } = await request.json();

    // Validate product type
    if (!PRODUCTS[productType as ProductType]) {
      return NextResponse.json({ error: 'Invalid product type' }, { status: 400 });
    }

    let userEmail = requestUserEmail;

    // For booking payments, we don't require authentication but do validate the booking exists
    if (calBookingId) {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );

      const { data: booking, error } = await supabase
        .from('pending_bookings')
        .select('*')
        .eq('cal_booking_id', calBookingId)
        .eq('status', 'awaiting_payment')
        .single();

      if (error || !booking) {
        return NextResponse.json({ error: 'Booking not found or already paid' }, { status: 404 });
      }

      // Use booking details for checkout
      userEmail = booking.user_email;
    }

    const product = PRODUCTS[productType as ProductType];

    // Create Stripe checkout session
    const sessionConfig: any = {
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
              description: product.description,
              metadata: {
                features: product.features.join(', ')
              }
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/booking/pay?id=${calBookingId}`,
      customer_email: userEmail,
      metadata: {
        userId: userId || '',
        productType: productType,
        sessions: product.sessions.toString(),
        expiresInWeeks: 'expiresInWeeks' in product ? product.expiresInWeeks.toString() : '0',
        calBookingId: calBookingId || ''
      },
    };

    const checkoutSession = await stripe.checkout.sessions.create(sessionConfig);

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}