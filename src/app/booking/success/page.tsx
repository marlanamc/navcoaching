'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { CheckCircle, Calendar, Clock, Mail, ArrowRight } from 'lucide-react'

export default function BookingSuccess() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [sessionData, setSessionData] = useState<any>(null)

  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    if (sessionId) {
      fetchSessionData(sessionId)
    } else {
      setError('No session ID found')
      setLoading(false)
    }
  }, [sessionId])

  const fetchSessionData = async (sessionId: string) => {
    try {
      // In a real app, you'd fetch session details from Stripe via your API
      // For now, we'll show a generic success message
      setLoading(false)
    } catch (err) {
      console.error('Error:', err)
      setError('Failed to load session details')
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-navy mb-2">Error</h1>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={() => router.push('/services')}
              className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
            >
              Back to Services
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-lavender via-skyblue to-freshaqua py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-8 text-white text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-3xl font-bold font-playfair mb-2">Payment Successful!</h1>
            <p className="text-green-100">Your session has been booked and confirmed</p>
          </div>

          {/* Success Details */}
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">What's Next?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Check Your Email</h3>
                    <p className="text-gray-600 text-sm">
                      You'll receive a confirmation email with your session details and calendar invite within the next few minutes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-teal-50 rounded-lg">
                  <Calendar className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Session Preparation</h3>
                    <p className="text-gray-600 text-sm">
                      Come prepared with any specific challenges or goals you'd like to discuss. We'll set up your personalized Notion dashboard during the session.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy mb-1">Join the Community</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      You now have access to our Discord community where you can connect with other clients and get ongoing support.
                    </p>
                    <a 
                      href={process.env.NEXT_PUBLIC_DISCORD_INVITE || 'https://discord.gg/your-invite-code'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition"
                    >
                      Join Discord Community
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-navy mb-4">Session Details</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">First Session</span>
                  <span className="text-lg font-bold text-teal-600">$25.00</span>
                </div>
                <p className="text-sm text-gray-600">30-minute coaching session with personalized Notion dashboard setup</p>
                
                {sessionId && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      Payment ID: {sessionId.substring(0, 20)}...
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push('/services')}
                  className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition"
                >
                  View All Services
                </button>
                <button
                  onClick={() => router.push('/')}
                  className="flex-1 py-3 px-6 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition flex items-center justify-center"
                >
                  Back to Home
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Need to reschedule?</strong> No problem! You can reschedule up to 24 hours before your session with no penalty. Just reply to your confirmation email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}