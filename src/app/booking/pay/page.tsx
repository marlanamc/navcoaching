'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { PRODUCTS, ProductType } from '@/lib/products'
import { Calendar, Clock, User, Mail } from 'lucide-react'

interface PendingBooking {
  id: string
  cal_booking_id: string
  event_type: string
  product_type: ProductType
  user_email: string
  user_name: string
  start_time: string
  end_time: string
  meeting_url: string
  status: string
}

export default function BookingPay() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [paying, setPaying] = useState(false)
  const [error, setError] = useState('')
  const [booking, setBooking] = useState<PendingBooking | null>(null)

  // Get booking ID from URL - handle Cal.com format
  let bookingId = searchParams.get('id') // Cal.com booking ID
  
  // If no id parameter, use the uid parameter (Cal.com redirect format)
  if (!bookingId || bookingId === '{booking.uid}' || bookingId?.includes('%7B')) {
    bookingId = searchParams.get('uid')
  }
  
  const rescheduleUid = searchParams.get('rescheduleUid')
  const rescheduledBy = searchParams.get('rescheduledBy')
  const isReschedule = !!rescheduleUid

  useEffect(() => {
    if (isReschedule) {
      // This is a rescheduled booking - show confirmation message
      setError('reschedule_confirmed')
      setLoading(false)
    } else if (bookingId) {
      fetchBooking(bookingId)
    } else {
      setError('Invalid booking link')
      setLoading(false)
    }
  }, [bookingId, isReschedule])

  const fetchBooking = async (calBookingId: string) => {
    try {
      const response = await fetch(`/api/booking/${calBookingId}`)
      
      if (!response.ok) {
        if (response.status === 404) {
          setError('Booking not found or already paid')
        } else {
          setError('Failed to load booking details')
        }
        return
      }

      const data = await response.json()
      setBooking(data)
    } catch (err) {
      console.error('Error:', err)
      setError('Failed to load booking details')
    } finally {
      setLoading(false)
    }
  }

  const handlePayment = async () => {
    if (!booking) return

    setPaying(true)
    setError('')

    try {
      // Create Stripe checkout session (no authentication required for booking payments)
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productType: booking.product_type,
          userEmail: booking.user_email,
          calBookingId: booking.cal_booking_id,
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
      setPaying(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
      </main>
    )
  }

  if (error || !booking) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-navy mb-2">
              {error === 'reschedule_confirmed' ? 'Session Rescheduled Successfully!' : 'Session Already Confirmed'}
            </h1>
            <p className="text-gray-600 mb-6">
              {error === 'reschedule_confirmed' 
                ? "Your session has been rescheduled successfully! Since you've already paid, no additional payment is required. You'll receive a new confirmation email from Cal.com (hello@cal.com) with your updated session time. Please check your spam folder if you don't see it within a few minutes."
                : error === 'Booking not found or already paid' 
                ? "This session has already been paid for. You should receive a confirmation email with your updated session details."
                : error
              }
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => router.push('/services')}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
              >
                View All Services
              </button>
              <button
                onClick={() => router.push('/signin')}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
              >
                Sign In to Your Account
              </button>
              <p className="text-sm text-gray-500 text-center">
                Need help? Contact us if you don't receive your confirmation email from hello@cal.com
              </p>
            </div>
          </div>
        </div>
      </main>
    )
  }

  const product = PRODUCTS[booking.product_type]
  const bookingDate = new Date(booking.start_time)
  const bookingEndTime = new Date(booking.end_time)

  return (
    <main className="min-h-screen bg-gradient-to-br from-lavender via-skyblue to-freshaqua py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6 text-white">
            <h1 className="text-2xl font-bold font-playfair">Complete Your Booking</h1>
            <p className="text-teal-100 mt-1">Your session is reserved - payment required to confirm</p>
          </div>

          {/* Booking Details */}
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-navy mb-4 font-playfair">{product.name}</h2>
              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Booking Info Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Date & Time</p>
                    <p className="text-gray-600">
                      {bookingDate.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    <p className="text-gray-600">
                      {bookingDate.toLocaleTimeString('en-US', { 
                        hour: 'numeric', 
                        minute: '2-digit',
                        hour12: true 
                      })} - {bookingEndTime.toLocaleTimeString('en-US', { 
                        hour: 'numeric', 
                        minute: '2-digit',
                        hour12: true 
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <User className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Client</p>
                    <p className="text-gray-600">{booking.user_name}</p>
                    <p className="text-gray-600 text-sm">{booking.user_email}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">What's Included:</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Payment Section */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold text-gray-900">Total Amount:</span>
                <span className="text-3xl font-bold text-teal-600">${product.price / 100}</span>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <button
                onClick={handlePayment}
                disabled={paying}
                className="w-full py-4 px-6 bg-teal-600 text-white font-bold rounded-lg shadow-md hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {paying ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  'Pay Now with Stripe'
                )}
              </button>

              <p className="text-xs text-center text-gray-500 mt-3">
                Secure payment processing by Stripe. Your booking will be confirmed immediately after payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}