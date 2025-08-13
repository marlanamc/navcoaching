import React from 'react'
import Link from 'next/link'
import { Clock, Monitor, MessageCircle, Users, MessageSquare, Star, Calendar, CheckIcon, MinusIcon } from 'lucide-react'

export default function Services() {
  // Get the base URL for redirects (use environment variable in production)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'
  
  const getCalBookingUrl = (eventType: string, bookingType: string) => {
    const successUrl = `${baseUrl}/booking/confirm?type=${bookingType}`
    return `https://cal.com/navcoaching/${eventType}?successUrl=${encodeURIComponent(successUrl)}`
  }
  return (
    <main className="min-h-screen py-12 px-8 lg:px-12">
      <div className="w-full">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-playfair">
            Weekly Accountability Sessions with Marlie
          </h1>
          <p className="text-xl text-deepteal max-w-2xl mx-auto">
            30-minute weekly sessions.<br />
            The perfect amount of time for real progress without overwhelm.
          </p>
        </div>

        {/* First Session - Start Here */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-4 font-playfair">Start Here</h2>
            <p className="text-xl text-gray-600 mb-8">Get started with your discounted introductory session</p>
            
            <div className="bg-white p-6 rounded-xl border-2 border-teal-200 shadow-lg max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-navy mb-3 font-playfair">First Session</h3>
              <div className="text-3xl font-bold text-teal-700 mb-2">$25</div>
              <div className="text-sm text-teal-600 font-semibold mb-4">New clients only</div>
              
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-700">
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>30-minute coaching session</span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Personal Notion dashboard setup</span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Goal assessment & planning</span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Discord community access (1 month)</span>
                </div>
              </div>
              
              <a 
                href={getCalBookingUrl('first-session', 'first-session')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-3 px-6 bg-teal-600 text-white text-center font-bold rounded-lg shadow-md hover:bg-teal-700 transition mb-3"
              >
                Book Your First Session
              </a>
              
              <p className="text-xs text-gray-600 italic">
                After your first session, choose a pack below to keep going with ongoing support
              </p>
            </div>
          </div>
        </section>

        {/* Ongoing Support Options */}
        <section id="pricing" className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy mb-4 font-playfair">Ongoing Support Options</h2>
              <p className="text-gray-600">Choose the right level of support for your journey</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Drop-In Session */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-xl font-bold text-navy mb-2 font-playfair">Drop-In Session</h3>
                <div className="text-3xl font-bold text-pink-700 mb-2">$60</div>
                <div className="text-sm text-pink-600 font-semibold mb-4">Existing clients</div>
                
                <div className="space-y-3 text-gray-700 text-sm mb-6 flex-grow">
                  <div className="flex items-start">
                    <span className="text-pink-600 mr-2">✓</span>
                    <span>30-minute coaching session</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-pink-600 mr-2">✓</span>
                    <span>Focused problem-solving</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-pink-600 mr-2">✓</span>
                    <span>Dashboard optimization</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-pink-600 mr-2">✓</span>
                    <span>Discord community access (1 month)</span>
                  </div>
                </div>
                <a 
                  href={getCalBookingUrl('drop-in-session', 'drop-in-session')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 bg-pink-600 text-white text-center font-bold rounded-lg shadow-md hover:bg-pink-700 transition text-sm mt-auto"
                >
                  Book Drop-In
                </a>
              </div>

              {/* 4-Session Pack - MOST POPULAR */}
              <div className="bg-white p-8 rounded-xl border-2 border-tealblue relative shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-tealblue to-ocean text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-md">
                  ⭐ MOST POPULAR
                </div>
                <h3 className="text-xl font-bold text-navy mb-2 mt-2 font-playfair">4-Session Pack</h3>
                <div className="text-3xl font-bold text-tealblue mb-1">$180 <span className="text-lg">(Save $60)</span></div>
                <div className="text-sm text-tealblue font-semibold mb-4">$45 per session</div>
                
                <div className="space-y-3 text-gray-700 text-sm mb-6 flex-grow">
                  <div className="flex items-start">
                    <span className="text-tealblue mr-2">✓</span>
                    <span>4 × 30-minute coaching sessions</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-tealblue mr-2">✓</span>
                    <span>Personal Notion dashboard</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-tealblue mr-2">✓</span>
                    <span>Text check-ins between sessions</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-tealblue mr-2">✓</span>
                    <span>Discord community access (3 months)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-tealblue mr-2">✓</span>
                    <span>Priority scheduling</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-tealblue mr-2">✓</span>
                    <span>Use within 8 weeks</span>
                  </div>
                </div>
                <a 
                  href={getCalBookingUrl('4-session-pack', '4-session-pack')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 bg-tealblue text-white text-center font-bold rounded-lg shadow-md hover:bg-deepteal transition text-sm mt-auto"
                >
                  Book First Session of 4
                </a>
              </div>

              {/* 8-Session Bundle */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-xl font-bold text-navy mb-2 font-playfair">8-Session Bundle</h3>
                <div className="text-3xl font-bold text-purple-700 mb-1">$320 <span className="text-lg">(Save $160)</span></div>
                <div className="text-sm text-purple-600 font-semibold mb-4">$40 per session</div>
                
                <div className="space-y-3 text-gray-700 text-sm mb-6 flex-grow">
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>8 × 30-minute coaching sessions</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Personal Notion dashboard</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Text check-ins between sessions</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Discord community access (5 months)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Priority scheduling</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Use within 16 weeks</span>
                  </div>
                </div>
                <a 
                  href={getCalBookingUrl('8-session-pack', '8-session-pack')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 bg-purple-600 text-white text-center font-bold rounded-lg shadow-md hover:bg-purple-700 transition text-sm mt-auto"
                >
                  Book First Session of 8
                </a>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-8">
              <div className="bg-white p-5 rounded-xl border-2 border-green-500 shadow-sm">
                <p className="text-gray-900 text-base font-medium text-center">
                  💡 <strong className="text-lg text-gray-900">Why no subscriptions?</strong><br />
                  <span className="text-gray-800">Because ADHD brains forget to cancel, and then feel guilty. Buy a pack when you're ready, use it at your pace, and never worry about surprise charges. Freedom, flexibility, no guilt.</span>
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-xl border-2 border-tealblue/30 shadow-sm">
                <p className="text-gray-900 text-base font-medium text-center">
                  🧭 <strong className="text-lg text-tealblue">About the Framework</strong><br />
                  <span className="text-gray-800">The Navigating the Storm framework is designed to build progressively over multiple weeks. While drop-in sessions are perfect for immediate support, session packs help you work through the complete system for lasting change and accountability habits that stick.</span>
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm">
                New clients start at $25 • 2-week trial period • Flexible scheduling
              </p>
            </div>
          </div>
        </section>

        {/* Plan Comparison */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-8 text-center font-playfair">
              Plan Comparison
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-300">
              <div className="overflow-x-auto">
                <table className="w-full table-fixed">
                  <thead className="bg-slate-800">
                    <tr>
                      <th className="text-left p-6 font-bold text-white text-lg w-1/3 pt-10">Features</th>
                      <th className="text-center p-6 font-bold text-white text-lg w-1/4 pt-10">
                        <div>Drop-In</div>
                        <div className="text-xs font-normal text-slate-300 mt-1">One-off sessions</div>
                      </th>
                      <th className="text-center p-6 font-bold text-white text-lg w-1/4 relative pt-10">
                        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs px-3 py-1 rounded-full font-bold whitespace-nowrap shadow-md sm:block hidden">⭐ Most Popular</div>
                        <div>4-Session Pack</div>
                        <div className="text-xs font-normal text-slate-300 mt-1">Stay consistent</div>
                      </th>
                      <th className="text-center p-6 font-bold text-white text-lg w-1/4 pt-10">
                        <div>8-Session Bundle</div>
                        <div className="text-xs font-normal text-slate-300 mt-1">Maximum savings</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t-2 border-gray-300 bg-white">
                      <td className="p-6 font-medium text-gray-900 flex items-center">
                        <Clock className="w-5 h-5 text-gray-600 mr-3" />
                        30-minute coaching sessions
                      </td>
                      <td className="text-center p-6"><CheckIcon className="w-5 h-5 text-pink-600 mx-auto" aria-label="Included" /></td>
                      <td className="text-center p-6"><CheckIcon className="w-5 h-5 text-teal-600 mx-auto" aria-label="Included" /></td>
                      <td className="text-center p-6"><CheckIcon className="w-5 h-5 text-purple-600 mx-auto" aria-label="Included" /></td>
                    </tr>
                    <tr className="border-t-2 border-gray-300 bg-gray-50">
                      <td className="p-6 font-medium text-gray-900 flex items-center bg-gray-50">
                        <Monitor className="w-5 h-5 text-gray-600 mr-3" />
                        Personal Notion dashboard
                      </td>
                      <td className="text-center p-6 bg-gray-50"><CheckIcon className="w-5 h-5 text-pink-600 mx-auto" aria-label="Included" /></td>
                      <td className="text-center p-6 bg-gray-50"><CheckIcon className="w-5 h-5 text-teal-600 mx-auto" aria-label="Included" /></td>
                      <td className="text-center p-6 bg-gray-50"><CheckIcon className="w-5 h-5 text-purple-600 mx-auto" aria-label="Included" /></td>
                    </tr>
                    <tr className="border-t-2 border-gray-300 bg-white">
                      <td className="p-6 font-medium text-gray-900 flex items-center bg-white">
                        <MessageCircle className="w-5 h-5 text-gray-600 mr-3" />
                        Discord community access
                      </td>
                      <td className="text-center p-6 text-gray-800 font-medium bg-white">1 month</td>
                      <td className="text-center p-6 text-gray-800 font-medium">3 months</td>
                      <td className="text-center p-6 text-gray-800 font-medium bg-white">5 months</td>
                    </tr>
                    <tr className="border-t-2 border-gray-300 bg-gray-50">
                      <td className="p-6 font-medium text-gray-900 flex items-center bg-gray-50">
                        <Users className="w-5 h-5 text-gray-600 mr-3" />
                        Body doubling sessions
                      </td>
                      <td className="text-center p-6 bg-gray-50"><CheckIcon className="w-5 h-5 text-pink-600 mx-auto" aria-label="Included" /></td>
                      <td className="text-center p-6 bg-gray-50"><CheckIcon className="w-5 h-5 text-teal-600 mx-auto" aria-label="Included" /></td>
                      <td className="text-center p-6 bg-gray-50"><CheckIcon className="w-5 h-5 text-purple-600 mx-auto" aria-label="Included" /></td>
                    </tr>
                    <tr className="border-t-2 border-gray-300 bg-white">
                      <td className="p-6 font-medium text-gray-900 flex items-center bg-white">
                        <MessageSquare className="w-5 h-5 text-gray-600 mr-3" />
                        <span className="font-bold text-gray-900">Text check-ins between sessions</span>
                      </td>
                      <td className="text-center p-6 bg-white"><MinusIcon className="w-5 h-5 text-gray-400 mx-auto" aria-label="Not included" /></td>
                      <td className="text-center p-6"><CheckIcon className="w-5 h-5 text-teal-600 mx-auto" aria-label="Included" /></td>
                      <td className="text-center p-6 bg-white"><CheckIcon className="w-5 h-5 text-purple-600 mx-auto" aria-label="Included" /></td>
                    </tr>
                    <tr className="border-t-2 border-gray-300 bg-gray-50">
                      <td className="p-6 font-medium text-gray-900 flex items-center bg-gray-50">
                        <Star className="w-5 h-5 text-gray-600 mr-3" />
                        <span className="font-bold text-gray-900">Priority scheduling</span>
                      </td>
                      <td className="text-center p-6 bg-gray-50"><MinusIcon className="w-5 h-5 text-gray-400 mx-auto" aria-label="Not included" /></td>
                      <td className="text-center p-6 bg-gray-50"><CheckIcon className="w-5 h-5 text-teal-600 mx-auto" aria-label="Included" /></td>
                      <td className="text-center p-6 bg-gray-50"><CheckIcon className="w-5 h-5 text-purple-600 mx-auto" aria-label="Included" /></td>
                    </tr>
                    <tr className="border-t-2 border-gray-300 bg-white">
                      <td className="p-6 font-medium text-gray-900 flex items-center bg-white">
                        <Calendar className="w-5 h-5 text-gray-600 mr-3" />
                        Time to use sessions
                      </td>
                      <td className="text-center p-6 text-gray-800 font-medium bg-white">—</td>
                      <td className="text-center p-6 text-gray-800 font-medium">8 weeks</td>
                      <td className="text-center p-6 text-gray-800 font-medium bg-white">16 weeks</td>
                    </tr>
                    <tr className="border-t-4 border-gray-600 bg-blue-50">
                      <td className="p-8 font-bold text-gray-900 text-xl bg-blue-50">Price per session</td>
                      <td className="text-center p-8 font-bold text-pink-700 text-2xl bg-blue-50">$60</td>
                      <td className="text-center p-8 font-bold text-teal-700 text-2xl bg-blue-50">$45</td>
                      <td className="text-center p-8 font-bold text-purple-700 text-2xl bg-blue-50">$40</td>
                    </tr>
                  </tbody>
                </table>
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
                  2-Session Trial
                </h3>
                <p className="text-gray-700 mb-4 text-base">
                  Not sure if coaching is right for you? Try it risk-free with our 2-session trial. If you're not completely satisfied after your second session, we'll refund 100% of your payment.
                </p>
                <ul className="text-base text-gray-600 space-y-2">
                  <li>• Trial includes your first two sessions</li>
                  <li>• Full refund if not satisfied</li>
                  <li>• No questions asked</li>
                </ul>
              </div>

              <div className="bg-white/90 p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">📅</span>
                  Flexible Scheduling
                </h3>
                <p className="text-gray-700 mb-4 text-base">
                  Life with ADHD is unpredictable — I get it. Here's how we keep it stress-free:
                </p>
                <ul className="text-base text-gray-600 space-y-2">
                  <li>• <span className="font-bold">24+ hours' notice</span>: Free reschedule, no penalty</li>
                  <li>• <span className="font-bold">Same-day changes</span>: Quick message — we'll work it out</li>
                  <li>• <span className="font-bold">Session packs</span>: Use within 8-16 weeks, extensions available</li>
                  <li>• <span className="font-bold">No auto-renewals</span>: Buy when you need it, use at your pace</li>
                </ul>
                <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-emerald-800 font-semibold text-xs text-center">
                    💚 Buy sessions when you need them. Use them at your pace. No subscription guilt.
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
              href="https://cal.com/navcoaching/first-session" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn cta px-10 py-4 bg-freshaqua text-navy font-bold rounded-lg shadow-lg hover:bg-tealblue hover:text-white transition hover-lift text-lg"
            >
              Book Your $25 First Session
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Risk-free 2-week trial • No subscriptions • Choose your own pace
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}