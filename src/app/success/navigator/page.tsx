'use client';

import React from 'react';
import Link from 'next/link';
import { Navigation, MessageCircle, Calendar, Phone, ExternalLink, Clock, Database, Target } from 'lucide-react';

export default function NavigatorSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-purple-200 to-pink-300">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-xl mb-6">
              <Navigation className="w-10 h-10 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-navy mb-4">
              Welcome, Navigator! 🧭
            </h1>
            <p className="text-xl text-gray-700">
              You've got comprehensive support with personalized tools. Let's chart your course!
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy mb-6">Your Next Steps</h2>
            
            <div className="space-y-6">
              {/* Step 1: Discord */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    Join Our Discord Community
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Connect with your crew and access all premium features.
                  </p>
                  <a 
                    href="https://discord.gg/KkTrfWSS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Join Discord Now
                  </a>
                </div>
              </div>

              {/* Step 2: Schedule Coaching */}
              <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-xl border-2 border-indigo-200">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-indigo-600" />
                    Schedule Your Monthly Sessions
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Book your three 30-minute sessions when you're ready. Spread them out 
                    or batch them - whatever works for your goals.
                  </p>
                  <a 
                    href="https://cal.com/navcoaching/navigator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
                  >
                    <Clock className="w-4 h-4" />
                    Schedule Sessions
                  </a>
                </div>
              </div>

              {/* Step 3: Dashboard Setup */}
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <Database className="w-5 h-5 text-purple-600" />
                    Personal Dashboard Setup
                  </h3>
                  <p className="text-gray-700">
                    I'll create your personalized Notion dashboard during our first session. 
                    Come prepared to discuss your goals and preferred systems!
                  </p>
                </div>
              </div>

              {/* Step 4: Calendar */}
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-600" />
                    Mark Your Calendar
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Sunday 7:00 PM ET</strong> - Weekly Compass Call
                  </p>
                  <p className="text-gray-700">
                    <strong>Mon/Wed/Fri 9:00 AM ET</strong> - Body Doubling Sessions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-navy/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-navy mb-3">What's Included in Navigator</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>• Everything in First Mate</div>
              <div>• Three 30-min private calls per month</div>
              <div>• Unlimited text nudges (reply windows)</div>
              <div>• Personalized Notion dashboard</div>
              <div>• Custom accountability plan</div>
              <div>• Priority support access</div>
            </div>
          </div>

          {/* Upgrade Option */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Want same-day text responses and quarterly planning?
            </p>
            <Link
              href="/membership"
              className="inline-block bg-amber-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-700 transition"
            >
              Upgrade to Captain's Concierge
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}