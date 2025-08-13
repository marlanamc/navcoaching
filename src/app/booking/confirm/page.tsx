'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { getStripe } from '@/lib/stripe'

type BookingType = 'first-session' | 'drop-in-session' | '4-session-pack' | '8-session-pack'

const BOOKING_DETAILS = {
  'first-session': {
    title: 'First Session',
    price: '$25',
    productType: 'first-session',
    description: 'Your introductory coaching session is confirmed!'
  },
  'drop-in-session': {
    title: 'Drop-In Session',
    price: '$60',
    productType: 'drop-in',
    description: 'Your drop-in coaching session is confirmed!'
  },
  '4-session-pack': {
    title: '4-Session Pack',
    price: '$180',
    productType: '4-session',
    description: 'Your first session of the 4-pack is confirmed!'
  },
  '8-session-pack': {
    title: '8-Session Bundle',
    price: '$320',
    productType: '8-session',
    description: 'Your first session of the 8-pack is confirmed!'
  }
}

export default function BookingConfirm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const supabase = createClientComponentClient()

  // Get booking details from URL params (passed from Cal.com)
  const bookingType = searchParams.get('type') as BookingType
  const calBookingId = searchParams.get('bookingId')
  const date = searchParams.get('date')
  const time = searchParams.get('time')

  const booking = BOOKING_DETAILS[bookingType] || BOOKING_DETAILS['first-session']

  useEffect(() => {
    // Auto-redirect to payment after 3 seconds
    const timer = setTimeout(() => {
      handlePayment()
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handlePayment = async () => {
    setLoading(true)
    setError('')

    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        // Store booking info and redirect to login
        sessionStorage.setItem('pendingBooking', JSON.stringify({
          bookingType,
          calBookingId,
          date,
          time
        }))
        router.push('/login?redirect=/booking/confirm')
        return
      }

      // Create Stripe checkout session
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productType: booking.productType,
          userId: user.id,
          userEmail: user.email,
          calBookingId: calBookingId || '',
        }),
      })

      const { url, error: checkoutError } = await response.json()

      if (checkoutError) {
        setError(checkoutError)
        return
      }

      // Redirect to Stripe Checkout
      if (url) {
        window.location.href = url
      }
    } catch (err) {
      console.error('Payment error:', err)
      setError('Failed to process payment. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Booking Confirmation */}
          <h1 className="text-2xl font-bold text-navy mb-2 font-playfair">
            Booking Confirmed!
          </h1>
          <p className="text-gray-600 mb-6">
            {booking.description}
          </p>

          {/* Booking Details */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Session Type:</span>
                <span className="font-semibold text-navy">{booking.title}</span>
              </div>
              {date && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold text-navy">{date}</span>
                </div>
              )}
              {time && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-semibold text-navy">{time}</span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-gray-200 mt-2">
                <span className="text-gray-600">Amount:</span>
                <span className="font-bold text-lg text-teal-600">{booking.price}</span>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="space-y-4">
            {loading ? (
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-600 mb-4"></div>
                <p className="text-gray-600">Redirecting to secure payment...</p>
              </div>
            ) : (
              <>
                <button
                  onClick={handlePayment}
                  className="w-full py-3 px-6 bg-teal-600 text-white font-bold rounded-lg shadow-md hover:bg-teal-700 transition"
                >
                  Proceed to Payment
                </button>
                <p className="text-xs text-gray-500">
                  You'll be redirected to Stripe for secure payment processing
                </p>
              </>
            )}

            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}