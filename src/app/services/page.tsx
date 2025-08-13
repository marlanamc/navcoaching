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

        {/* Pricing Options */}
        <section id="pricing" className="mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy mb-4 font-playfair">Choose Your Payment Option</h2>
              <p className="text-gray-600">Same great support, flexible payment to fit your needs</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pay by the Week */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border-2 border-pink-200">
                <div className="bg-gradient-to-r from-pink-300 to-purple-300 p-6 text-center text-white">
                  <h3 className="text-2xl font-bold mb-2 font-playfair">Pay by the Week</h3>
                  <div className="text-4xl font-bold mb-2">$50<span className="text-lg font-normal">/week</span></div>
                  <p className="text-white/90">Maximum flexibility</p>
                </div>
                
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-pink-200/50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-navy">💳</span>
                    </div>
                    <h4 className="text-lg font-bold text-navy mb-2">Weekly Billing</h4>
                    <p className="text-gray-600 text-sm">Pay as you go, cancel anytime</p>
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li>✓ Weekly 30-minute sessions</li>
                    <li>✓ Personal Notion dashboard</li>
                    <li>✓ Mid-week check-ins</li>
                    <li>✓ Discord community access</li>
                    <li>✓ Cancel anytime</li>
                  </ul>
                  
                  <a 
                    href="https://calendly.com/marlie-navcoaching/initial" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-6 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-center font-bold rounded-lg shadow-lg hover:from-pink-500 hover:to-purple-500 transition text-sm"
                  >
                    Start for $25
                  </a>
                </div>
              </div>

              {/* 4-Week Plan */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border-2 border-tealblue/30 relative">
                <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-bl-lg text-xs font-bold">
                  MOST POPULAR
                </div>
                <div className="bg-gradient-to-r from-freshaqua to-tealblue p-6 text-center text-white">
                  <h3 className="text-2xl font-bold mb-2 font-playfair">4-Week Plan</h3>
                  <div className="text-4xl font-bold mb-2">$45<span className="text-lg font-normal">/week</span></div>
                  <div className="text-lg text-white/90">$180 every 4 weeks</div>
                  <p className="text-white/90 text-sm mt-2">Save $20 per month</p>
                </div>
                
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-tealblue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-navy">🔒</span>
                    </div>
                    <h4 className="text-lg font-bold text-navy mb-2">Lock in Your Time Slot</h4>
                    <p className="text-gray-600 text-sm">Same weekly time, better consistency</p>
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li>✓ Everything in weekly plan</li>
                    <li>✓ <strong>Locked weekly time slot</strong></li>
                    <li>✓ <strong>Save $60 over 12 weeks</strong></li>
                    <li>✓ Better consistency & routine</li>
                    <li>✓ Cancel anytime with notice</li>
                  </ul>
                  
                  <a 
                    href="https://calendly.com/marlie-navcoaching/initial" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-6 bg-gradient-to-r from-freshaqua to-tealblue text-white text-center font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-sm"
                  >
                    Start for $25
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm">
                First session: <span className="line-through">$50</span> <span className="text-lg font-bold text-green-600">$25</span> • 2-week trial period • No long-term contracts
              </p>
            </div>
          </div>
        </section>

        {/* What's Included - Shared Features */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-6 text-center font-playfair">
              What's Included in Both Plans
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Core Coaching */}
              <div className="bg-white/90 p-6 rounded-lg shadow-lg border border-freshaqua/30">
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
              <div className="bg-white/90 p-6 rounded-lg shadow-lg border border-tealblue/30">
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
                    <p className="text-sm text-navy font-medium mb-2">
                      ✨ Research‑backed methods for ADHD, executive function, and habits
                    </p>
                    <p className="text-sm text-navy font-medium">
                      🗂️ Your dashboard is yours to keep forever — even if you cancel, you retain full access
                    </p>
                  </div>
                </div>
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
                  Life with ADHD is unpredictable — I get it. Here's how we keep it stress-free:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24+ hours' notice: Free reschedule, no penalty</li>
                  <li>• Same-day cancellations: Quick message — we'll try to find a new time that week</li>
                  <li>• Emergencies: Let me know, and we'll work it out</li>
                  <li>• Cancel anytime: One week's notice before your next billing cycle</li>
                </ul>
                <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-emerald-800 font-semibold text-xs text-center">
                    💚 No stress, no penalties — because I know how ADHD life works.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-freshaqua/10 rounded-xl p-6 text-center border border-freshaqua/30">
              <p className="text-navy font-semibold">
                💡 Questions about our policies? <Link href="/terms" className="text-tealblue underline hover:text-navy">Read our full terms</Link>, <Link href="/privacy" className="text-tealblue underline hover:text-navy">privacy policy</Link>, or <Link href="/contact" className="text-tealblue underline hover:text-navy">ask us directly</Link>.
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