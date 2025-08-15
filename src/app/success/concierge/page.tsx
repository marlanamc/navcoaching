'use client';

import React from 'react';
import Link from 'next/link';
import { Crown, MessageCircle, Calendar, Phone, ExternalLink, Clock, Database, Target, Zap, Award } from 'lucide-react';

export default function ConciergeSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-yellow-200 to-orange-300">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-xl mb-6">
              <Crown className="w-10 h-10 text-amber-600" />
            </div>
            <h1 className="text-4xl font-bold text-navy mb-4">
              Welcome, Captain! 👑
            </h1>
            <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="text-amber-800 font-semibold text-sm">PREMIUM WHITE-GLOVE SERVICE</span>
            </div>
            <p className="text-xl text-gray-700">
              You've got the highest level of personalized support. Let's make magic happen!
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy mb-6">Your VIP Onboarding</h2>
            
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
                    Connect with your crew and get VIP access to all premium features.
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
              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl border-2 border-amber-300">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-amber-600" />
                    Schedule Your Concierge Sessions
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Book your four 30-minute monthly sessions. We'll start with goal architecture 
                    and quarterly planning in your first session.
                  </p>
                  <a 
                    href="https://cal.com/navcoaching/concierge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-amber-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-700 transition"
                  >
                    <Clock className="w-4 h-4" />
                    Schedule Sessions
                  </a>
                </div>
              </div>

              {/* Step 3: Same-Day Support */}
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-2 border-green-300">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-600" />
                    Same-Day Text Support Active
                  </h3>
                  <p className="text-gray-700">
                    Your same-day text responses are now active during business hours (Mon-Fri). 
                    I'll send you the best number to reach me on during our first session.
                  </p>
                </div>
              </div>

              {/* Step 4: Dashboard Setup */}
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <Database className="w-5 h-5 text-purple-600" />
                    Custom Dashboard & Quarterly Planning
                  </h3>
                  <p className="text-gray-700">
                    I'll create your fully custom dashboard and we'll do comprehensive quarterly 
                    planning in your first session. Come ready to dream big!
                  </p>
                </div>
              </div>

              {/* Step 5: Calendar */}
              <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-xl">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-indigo-600" />
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
            <h3 className="font-bold text-navy mb-3">What's Included in Captain's Concierge</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>• Everything in Navigator</div>
              <div>• Four 30-min private calls per month</div>
              <div>• Same-day text responses (business hours)</div>
              <div>• Fully custom dashboard</div>
              <div>• Quarterly planning sessions</div>
              <div>• Priority access to new features</div>
            </div>
          </div>

          {/* Exclusive Benefits */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              🌟 You also get early access to all new tools, templates, and resources as they launch!
            </p>
            <Link
              href="/membership"
              className="inline-block bg-navy text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition"
            >
              View All Membership Benefits
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}