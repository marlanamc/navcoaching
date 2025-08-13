import React from 'react'
import Link from 'next/link'

export default function Services() {
  return (
    <main className="min-h-screen py-12 px-8 lg:px-12">
      <div className="w-full">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-playfair">
            Weekly Accountability Sessions with Marlie
          </h1>
          <p className="text-xl text-deepteal max-w-2xl mx-auto">
            30-minute weekly sessions — the perfect amount of time for real progress without overwhelm.
          </p>
        </div>

        {/* Single Pricing Plan */}
        <section id="pricing" className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border-2 border-tealblue/30">
              {/* Header */}
              <div className="bg-gradient-to-r from-freshaqua to-tealblue p-8 text-center text-white">
                <h2 className="text-3xl font-bold mb-2 font-playfair">30-Minute Weekly Check-Ins</h2>
                <p className="text-white/90 mb-4">Focused support that fits your life and attention span</p>
                <div className="text-5xl font-bold mb-2">$50<span className="text-xl font-normal">/week</span></div>
                <div className="text-lg text-white/90">Billed $200 every 4 weeks</div>
                <div className="mt-2 text-sm text-yellow-200 bg-yellow-600/20 rounded px-2 py-1 inline-block">
                  💰 Most accountability coaches charge $300+ for less
                </div>
                <div className="mt-3 text-white/90">
                  First session: <span className="line-through">$50</span> <span className="text-2xl font-bold text-yellow-300">$25</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-tealblue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-navy">30</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">30-Minute Weekly Sessions</h3>
                  <p className="text-gray-600">Quick, focused check-ins that keep you moving without the overwhelm</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Core Coaching */}
                  <div className="bg-freshaqua/10 p-4 rounded-lg">
                    <h4 className="font-bold text-navy mb-3 flex items-center">
                      <span className="w-6 h-6 bg-freshaqua rounded-full flex items-center justify-center mr-2 text-white text-sm">✓</span>
                      Core Coaching
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Weekly 30-minute video sessions</li>
                      <li>• Goal setting & progress tracking</li>
                      <li>• Weekly action experiments</li>
                      <li>• Flexible scheduling around your energy</li>
                    </ul>
                  </div>

                  {/* Tools & Support */}
                  <div className="bg-tealblue/10 p-4 rounded-lg">
                    <h4 className="font-bold text-navy mb-3 flex items-center">
                      <span className="w-6 h-6 bg-tealblue rounded-full flex items-center justify-center mr-2 text-white text-sm">✓</span>
                      Tools & Support
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Personal Notion dashboard setup</li>
                      <li>• Mid-week check-in messages</li>
                      <li>• Private Discord community access</li>
                      <li>• Weekly body doubling sessions</li>
                      <li>• ADHD strategy resource library</li>
                    </ul>
                  </div>
                </div>

                {/* Member Rate */}
                <div className="p-3 bg-green-50 rounded-lg border border-green-200 mb-6">
                  <div className="text-sm font-semibold text-green-700">💰 Member Rate Available: $45/week</div>
                  <div className="text-xs text-green-600">$180 every 4 weeks • Save $60 over 12 weeks</div>
                </div>

                {/* Guarantees */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <span className="flex items-center text-green-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      2-Week Trial Period
                    </span>
                    <span className="flex items-center text-green-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Cancel anytime
                    </span>
                    <span className="flex items-center text-green-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      No Long-term Contracts
                    </span>
                  </div>
                </div>
                
                <a 
                  href="https://calendly.com/marlie-navcoaching/initial" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-6 bg-gradient-to-r from-freshaqua to-tealblue text-white text-center font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-lg"
                >
                  🚀 Book Your First Session - Only $25
                </a>
                
                <p className="text-center text-sm text-gray-600 mt-4">
                  Limited time offer • Risk-free trial • No pressure, just support that actually works
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center font-playfair">
              Every Plan Includes
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/95 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy">Private Discord Community</h3>
                </div>
                <p className="text-gray-600">24/7 support chat and body doubling with other ADHD professionals.</p>
              </div>
              
              <div className="bg-white/95 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy">Personal Notion Dashboard</h3>
                </div>
                <p className="text-gray-600">Your personal hub for goals, notes, and tracking progress.</p>
              </div>
              
              <div className="bg-white/95 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy">Weekly Action Experiments</h3>
                </div>
                <p className="text-gray-600">Tiny challenges to build momentum and find what works.</p>
              </div>
              
              <div className="bg-white/95 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy">Judgment-Free Support</h3>
                </div>
                <p className="text-gray-600">No shame, no "try harder" advice. Just strategies that actually work.</p>
              </div>
              
              <div className="bg-white/95 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy">Flexible Scheduling</h3>
                </div>
                <p className="text-gray-600">Life happens. We'll find times that work with your energy.</p>
              </div>
              
              <div className="bg-white/95 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy">Personalized Text Reminders</h3>
                </div>
                <p className="text-gray-600">Gentle check-ins and encouragement between sessions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Showcase */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4 font-playfair">
                Your Personal Dashboard
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Access your personalized command center anytime — designed for ADHD brains
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Dashboard Image */}
              <div className="">
                <div className="bg-white rounded-2xl shadow-2xl p-4">
                  <img
                    src="/sample_dash.png"
                    alt="Example client dashboard showing North Star goals, weekly priorities, and progress tracking"
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-sm text-gray-500 text-center mt-2 italic">
                    Example client dashboard. Demo data.
                  </p>
                </div>
              </div>
              
              {/* What You Get */}
              <div className="">
                <div className="bg-white/90 rounded-2xl p-8 shadow-lg border border-tealblue/20">
                  <h3 className="text-2xl font-bold text-navy mb-6">What You Get:</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-navy">North Star and Destination</p>
                        <p className="text-gray-600 text-sm">Your why and big goal, always visible</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-4 h-4 bg-teal-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-navy">Anchor</p>
                        <p className="text-gray-600 text-sm">A weekly grounding question to keep you centered</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-4 h-4 bg-cyan-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-navy">Compass</p>
                        <p className="text-gray-600 text-sm">1–3 priorities with checkboxes (no overwhelming lists!)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-4 h-4 bg-indigo-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-navy">Next Check‑In</p>
                        <p className="text-gray-600 text-sm">Date and focus, always visible so you know what's coming</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-4 h-4 bg-pink-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-navy">Starlight</p>
                        <p className="text-gray-600 text-sm">Quick wins and gratitude to build momentum</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gradient-to-r from-freshaqua/10 to-tealblue/10 rounded-lg">
                    <p className="text-sm text-navy font-medium">
                      ✨ Research‑backed methods for ADHD, executive function, and habits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center font-playfair">
              Common Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white/90 p-6 rounded-xl">
                <h3 className="font-bold text-navy mb-2">What if I need to cancel or reschedule?</h3>
                <p className="text-gray-600">Life with ADHD is unpredictable. I get it. We'll work together to reschedule sessions when needed, and you can pause or cancel anytime.</p>
              </div>
              
              <div className="bg-white/90 p-6 rounded-xl">
                <h3 className="font-bold text-navy mb-2">How is this different from therapy?</h3>
                <p className="text-gray-600">I'm not a therapist or certified ADHD coach—I'm your accountability partner who understands ADHD. We focus on practical strategies and consistent support, not clinical treatment.</p>
              </div>
              
              <div className="bg-white/90 p-6 rounded-xl">
                <h3 className="font-bold text-navy mb-2">How does this compare value-wise?</h3>
                <p className="text-gray-600">Most accountability coaches charge $300+ monthly for basic weekly calls. Group programs cost $200-400+ with zero personalization. You're getting 1-on-1 sessions, a proprietary framework, personal dashboard, community access, body doubling, and specialized ADHD support—all for significantly less than competitors offer.</p>
              </div>
              
              <div className="bg-white/90 p-6 rounded-xl">
                <h3 className="font-bold text-navy mb-2">What happens in our first session?</h3>
                <p className="text-gray-600">We'll talk about your goals, current challenges, and what you've tried before. Then we'll set up your Notion dashboard and plan your first experiment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Policies & Guarantees */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center font-playfair">
              Our Commitment to You
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/90 p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">✓</span>
                  2-Week Trial Period
                </h3>
                <p className="text-gray-700 mb-4">
                  Not sure if coaching is right for you? Every new client gets a full 2-week trial period. If you're not completely satisfied, we'll refund 100% of your payment.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Trial begins with your first paid session</li>
                  <li>• Full refund if not satisfied</li>
                  <li>• No questions asked</li>
                </ul>
              </div>

              <div className="bg-white/90 p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">📅</span>
                  Flexible Cancellation
                </h3>
                <p className="text-gray-700 mb-4">
                  Life with ADHD is unpredictable. Our cancellation policy is designed with that in mind.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24+ hours notice: Free rescheduling</li>
                  <li>• Emergency situations: We're flexible</li>
                  <li>• Cancel service anytime with 1 week notice</li>
                  <li>• Unused sessions refunded pro-rata</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-freshaqua/10 rounded-xl p-6 text-center border border-freshaqua/30">
              <p className="text-navy font-semibold">
                💡 Questions about our policies? <Link href="/terms" className="text-tealblue underline hover:text-navy">Read our full terms</Link> or <Link href="/contact" className="text-tealblue underline hover:text-navy">ask us directly</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-4 font-playfair">
              Ready to Finally Follow Through?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Your first session includes goal-setting and dashboard setup. Let's get started!
            </p>
            <br />
            <a 
              href="https://calendly.com/marlie-navcoaching/initial" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn cta px-10 py-4 bg-freshaqua text-navy font-bold rounded-lg shadow-lg hover:bg-tealblue hover:text-white transition hover-lift text-lg"
            >
              Claim Your $25 First Session
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Risk-free 2-week trial • Flexible cancellation • No long-term contracts
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}