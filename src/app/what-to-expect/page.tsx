import React from 'react';
import Link from 'next/link';

export default function WhatToExpect() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-playfair">
            What to Expect
          </h1>
          <p className="text-xl text-deepteal max-w-2xl mx-auto">
            Your journey from first session to thriving with ADHD accountability support
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 mb-16">
          {/* Before Your First Session */}
          <div className="bg-white/90 rounded-2xl shadow-lg p-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-freshaqua rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Before Your First Session</h2>
                <div className="space-y-4">
                  <div className="bg-freshaqua/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-navy mb-2">📅 Booking Confirmation</h3>
                    <p className="text-gray-700">You'll receive a calendar invite with Zoom link and a brief intake form to help me understand your goals and challenges.</p>
                  </div>
                  <div className="bg-freshaqua/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-navy mb-2">📧 Welcome Email</h3>
                    <p className="text-gray-700">I'll send you a welcome message with what to expect and any prep materials. No homework – just show up as you are!</p>
                  </div>
                  <div className="bg-freshaqua/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-navy mb-2">🤔 What to Bring</h3>
                    <p className="text-gray-700">Just yourself and any specific goals or challenges you'd like to discuss. We'll start wherever you are right now.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Your First Session */}
          <div className="bg-gradient-to-br from-tealblue/10 to-freshaqua/10 rounded-2xl shadow-lg p-8 border border-tealblue/20">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-tealblue rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Your First Session (30 minutes)</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-navy mb-2">🎯 Quick Connect (5 min)</h3>
                    <p className="text-gray-700 text-sm">We'll chat briefly about what brought you here and what you're hoping to accomplish.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-navy mb-2">🛠️ Dashboard Setup (15 min)</h3>
                    <p className="text-gray-700 text-sm">We'll set up your personal Notion dashboard together – your new command center for staying organized.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-navy mb-2">🎯 First Small Step (10 min)</h3>
                    <p className="text-gray-700 text-sm">We'll identify one tiny, doable action for the week ahead – something that feels manageable and energizing.</p>
                  </div>
                </div>
                <div className="bg-tealblue/20 p-4 rounded-lg">
                  <p className="text-navy font-semibold">✨ You'll leave with: A clear next step, your dashboard set up, and a sense of possibility about what's ahead.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Weeks 2-4: Building Momentum */}
          <div className="bg-white/90 rounded-2xl shadow-lg p-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-ocean rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Weeks 2-4: Building Momentum</h2>
                <div className="space-y-4">
                  <div className="bg-ocean/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-navy mb-2">🔄 Weekly Sessions</h3>
                    <p className="text-gray-700">We'll meet consistently to review your wins, troubleshoot challenges, and adjust your approach. Expect lots of celebration for small victories!</p>
                  </div>
                  <div className="bg-ocean/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-navy mb-2">🧪 Weekly Experiments</h3>
                    <p className="text-gray-700">Each week we'll try something new – a different way to organize, a new routine, or a fresh approach to a stuck project. No failures, only data!</p>
                  </div>
                  <div className="bg-ocean/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-navy mb-2">📊 Dashboard Evolution</h3>
                    <p className="text-gray-700">Your Notion workspace will grow and adapt as we learn what works for your brain. It becomes truly yours during this phase.</p>
                  </div>
                  <div className="bg-ocean/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-navy mb-2">🎓 ADHD Education</h3>
                    <p className="text-gray-700">I'll share strategies and insights about ADHD that help you understand your brain better and work with it, not against it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Month 2+: Sustainable Systems */}
          <div className="bg-gradient-to-br from-navy/10 to-deepteal/10 rounded-2xl shadow-lg p-8 border border-navy/20">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Month 2+: Sustainable Systems</h2>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-navy mb-2">🏗️ System Refinement</h3>
                    <p className="text-gray-700">We'll fine-tune what's working and ditch what isn't. Your systems become more personalized and automatic.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-navy mb-2">🎯 Bigger Goals</h3>
                    <p className="text-gray-700">With solid foundations in place, we can tackle larger projects and longer-term goals with confidence.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-navy mb-2">🔄 Life Adaptation</h3>
                    <p className="text-gray-700">We'll work on making your systems flexible enough to handle life changes, busy periods, and inevitable setbacks.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-navy mb-2">🎉 Celebrating Growth</h3>
                    <p className="text-gray-700">You'll start recognizing your own patterns, catching yourself before old habits take over, and feeling genuinely proud of your progress.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes This Different */}
        <div className="bg-gradient-to-br from-freshaqua/20 to-tealblue/20 rounded-2xl shadow-lg p-8 border border-tealblue/30 mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center font-playfair">What Makes This Different</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-freshaqua rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">No Shame or Judgment</h3>
                  <p className="text-gray-700 text-sm">Your brain works differently, and that's not a problem to fix. We work with your ADHD, not against it.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-freshaqua rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Flexible & Adaptive</h3>
                  <p className="text-gray-700 text-sm">Life happens. We'll adjust our approach when you're overwhelmed, hyperfocused, or going through changes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-freshaqua rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Small Steps, Big Wins</h3>
                  <p className="text-gray-700 text-sm">We focus on tiny, manageable changes that build momentum rather than overwhelming overhauls.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-tealblue rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Human Connection</h3>
                  <p className="text-gray-700 text-sm">You're not alone in this. You have a real person who believes in you and shows up consistently.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-tealblue rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Practical Tools</h3>
                  <p className="text-gray-700 text-sm">Your Notion dashboard becomes your external brain – a place to capture ideas, track progress, and stay organized.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-tealblue rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Trial Period</h3>
                  <p className="text-gray-700 text-sm">2-week trial period means you can try coaching risk-free and see if we're a good fit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Start? */}
        <div className="text-center bg-white/90 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-navy mb-4 font-playfair">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Your first session is just a click away. No long intake forms, no complicated onboarding – just show up and we'll figure it out together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a 
              href="https://cal.com/navcoaching/first-session" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gradient-to-r from-freshaqua to-tealblue text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-lg"
            >
              📅 Book Your First Session
            </a>
            <Link 
              href="/contact"
              className="inline-block px-10 py-4 bg-white border-2 border-tealblue text-tealblue font-bold rounded-lg shadow hover:shadow-lg transition text-lg"
            >
              💬 Ask a Question First
            </Link>
          </div>
          
          <p className="text-sm text-gray-600">
            Questions? <Link href="/faq" className="text-tealblue underline hover:text-navy">Check out our FAQ</Link> or <Link href="/contact" className="text-tealblue underline hover:text-navy">send me a message</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}