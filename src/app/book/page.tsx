import React from 'react'
import { Clock, Monitor, MessageCircle, Star, Calendar } from 'lucide-react'

export default function BookSession() {
  // Get the base URL for redirects (use environment variable in production)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3002'
  
  const getCalBookingUrl = (eventType: string, bookingType: string) => {
    const successUrl = `${baseUrl}/booking/pay?type=${bookingType}`
    return `https://cal.com/navcoaching/${eventType}?successUrl=${encodeURIComponent(successUrl)}`
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-lavender via-skyblue to-freshaqua py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-playfair">
            Schedule Your Next Session
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Choose the right level of support for your journey
          </p>
        </div>

        {/* Booking Options */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Drop-In Session */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <h3 className="text-2xl font-bold text-navy mb-4 font-playfair">Drop-In Session</h3>
            <div className="text-4xl font-bold text-pink-600 mb-2">$60</div>
            <div className="text-sm text-pink-600 font-semibold mb-6">Existing clients</div>
            
            <div className="space-y-3 text-gray-700 mb-8 flex-grow">
              <div className="flex items-start">
                <span className="text-pink-600 mr-3 text-lg">✓</span>
                <span>30-minute coaching session</span>
              </div>
              <div className="flex items-start">
                <span className="text-pink-600 mr-3 text-lg">✓</span>
                <span>Focused problem-solving</span>
              </div>
              <div className="flex items-start">
                <span className="text-pink-600 mr-3 text-lg">✓</span>
                <span>Dashboard optimization</span>
              </div>
              <div className="flex items-start">
                <span className="text-pink-600 mr-3 text-lg">✓</span>
                <span>Discord community access (1 month)</span>
              </div>
            </div>
            
            <a 
              href={getCalBookingUrl('drop-in-session', 'drop-in-session')}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 bg-pink-600 text-white text-center font-bold rounded-lg shadow-md hover:bg-pink-700 transition text-lg mt-auto"
            >
              Book Drop-In
            </a>
          </div>

          {/* 4-Session Pack - MOST POPULAR */}
          <div className="bg-white p-8 rounded-xl border-2 border-teal-500 relative shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm px-4 py-2 rounded-full font-bold shadow-md">
              ⭐ MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4 mt-2 font-playfair">4-Session Pack</h3>
            <div className="text-4xl font-bold text-teal-600 mb-1">$180 <span className="text-lg text-gray-600">(Save $60)</span></div>
            <div className="text-sm text-teal-600 font-semibold mb-6">$45 per session</div>
            
            <div className="space-y-3 text-gray-700 mb-8 flex-grow">
              <div className="flex items-start">
                <span className="text-teal-600 mr-3 text-lg">✓</span>
                <span>4 × 30-minute coaching sessions</span>
              </div>
              <div className="flex items-start">
                <span className="text-teal-600 mr-3 text-lg">✓</span>
                <span>Personal Notion dashboard</span>
              </div>
              <div className="flex items-start">
                <span className="text-teal-600 mr-3 text-lg">✓</span>
                <span>Text check-ins between sessions</span>
              </div>
              <div className="flex items-start">
                <span className="text-teal-600 mr-3 text-lg">✓</span>
                <span>Discord community access (3 months)</span>
              </div>
              <div className="flex items-start">
                <span className="text-teal-600 mr-3 text-lg">✓</span>
                <span>Priority scheduling</span>
              </div>
              <div className="flex items-start">
                <span className="text-teal-600 mr-3 text-lg">✓</span>
                <span>Use within 8 weeks</span>
              </div>
            </div>
            
            <a 
              href={getCalBookingUrl('4-session-pack', '4-session-pack')}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 bg-teal-600 text-white text-center font-bold rounded-lg shadow-md hover:bg-teal-700 transition text-lg mt-auto"
            >
              Book First Session of 4
            </a>
          </div>

          {/* 8-Session Bundle */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <h3 className="text-2xl font-bold text-navy mb-4 font-playfair">8-Session Bundle</h3>
            <div className="text-4xl font-bold text-purple-600 mb-1">$320 <span className="text-lg text-gray-600">(Save $160)</span></div>
            <div className="text-sm text-purple-600 font-semibold mb-6">$40 per session</div>
            
            <div className="space-y-3 text-gray-700 mb-8 flex-grow">
              <div className="flex items-start">
                <span className="text-purple-600 mr-3 text-lg">✓</span>
                <span>8 × 30-minute coaching sessions</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-3 text-lg">✓</span>
                <span>Personal Notion dashboard</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-3 text-lg">✓</span>
                <span>Text check-ins between sessions</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-3 text-lg">✓</span>
                <span>Discord community access (5 months)</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-3 text-lg">✓</span>
                <span>Priority scheduling</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-3 text-lg">✓</span>
                <span>Use within 16 weeks</span>
              </div>
            </div>
            
            <a 
              href={getCalBookingUrl('8-session-pack', '8-session-pack')}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 bg-purple-600 text-white text-center font-bold rounded-lg shadow-md hover:bg-purple-700 transition text-lg mt-auto"
            >
              Book First Session of 8
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white/90 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-navy mb-4 text-center">Scheduling Notes</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Flexible Rescheduling</p>
                  <p>24+ hours notice for free reschedules. Same-day changes? Just message me!</p>
                </div>
              </div>
              <div className="flex items-start">
                <Star className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Session Pack Benefits</p>
                  <p>Priority scheduling and text check-ins between sessions for ongoing support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}