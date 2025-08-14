'use client';

import React from 'react';
import Link from 'next/link';
import { Anchor, Users, MessageSquare, Navigation, Crown, Check, Calendar, Video, FileText, Zap, Star } from 'lucide-react';

export default function Membership() {

  const tiers = [
    {
      name: 'Harbor Access',
      price: 20,
      firstMonth: 10,
      icon: Anchor,
      color: 'bg-blue-500',
      description: 'Join the community and start building momentum',
      features: [
        'Access to Discord community',
        'All body doubling sessions',
        'Weekly Sunday Compass Call',
        'Shared resources & templates',
        'Monthly resource roundup'
      ],
      notIncluded: [
        'Private calls',
        'Text nudges',
        'Personal dashboard'
      ],
      cta: 'Join Harbor Access',
      highlighted: false
    },
    {
      name: 'Crew Essentials',
      price: 35,
      firstMonth: 20,
      icon: Users,
      color: 'bg-purple-500',
      description: 'Get personal support with community backing',
      features: [
        'Everything in Harbor Access',
        'One 20-min private call per month',
        '2x/week text nudges (batched)',
        'Reply windows for accountability',
        'Founding member pricing available'
      ],
      notIncluded: [
        'Priority support',
        'Personal dashboard'
      ],
      cta: 'Join Crew Essentials',
      highlighted: false
    },
    {
      name: 'First Mate',
      price: 75,
      firstMonth: 50,
      icon: MessageSquare,
      color: 'bg-teal-500',
      description: 'Enhanced support with priority access',
      features: [
        'Everything in Crew Essentials',
        'One 30-min private call per month',
        '3x/week text nudges',
        'Priority Q&A thread in Discord',
        'Founding member pricing available'
      ],
      notIncluded: [
        'Personal dashboard',
        'Multiple monthly calls'
      ],
      cta: 'Join First Mate',
      highlighted: true,
      badge: 'MOST POPULAR'
    },
    {
      name: 'Navigator',
      price: 150,
      icon: Navigation,
      color: 'bg-indigo-500',
      description: 'Comprehensive support with personalized tools',
      features: [
        'Everything in First Mate',
        'Three 30-min private calls per month',
        'Unlimited text nudges (reply windows)',
        'Personalized Notion dashboard',
        'Custom accountability plan'
      ],
      notIncluded: [
        'Same-day responses',
        'Quarterly planning'
      ],
      cta: 'Join Navigator',
      highlighted: false
    },
    {
      name: "Captain's Concierge",
      price: 350,
      icon: Crown,
      color: 'bg-gold-500',
      description: 'Premium white-glove accountability service',
      features: [
        'Everything in Navigator',
        'Four 30-min private calls per month',
        'Same-day text responses (business hours)',
        'Fully custom dashboard',
        'Quarterly planning sessions',
        'Priority access to new features'
      ],
      notIncluded: [],
      cta: 'Join Concierge',
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-200 to-indigo-300">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Join the Crew
          </h1>
          <p className="text-xl text-navy/80 max-w-3xl mx-auto mb-8">
            Choose your level of support. All tiers include access to our vibrant community, 
            body doubling sessions, and weekly Compass Calls.
          </p>
          
          {/* Founding Member Banner */}
          <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-600" />
              <span className="font-bold text-yellow-900">Founding Member Special</span>
              <Star className="w-5 h-5 text-yellow-600" />
            </div>
            <p className="text-yellow-900">
              First month discounts: Harbor $10, Crew $20, First Mate $50
            </p>
            <p className="text-sm text-yellow-700 mt-1">
              Offer ends Sunday, August 31 - lock in your spot now
            </p>
          </div>

        </div>

        {/* Main Pricing Tiers */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-12">
          {tiers.slice(0, 3).map((tier) => {
            const Icon = tier.icon;
            const currentPrice = tier.price;
            
            return (
              <div
                key={tier.name}
                className={`relative bg-white rounded-2xl shadow-xl p-6 ${
                  tier.highlighted ? 'ring-4 ring-teal-400 scale-105' : ''
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      {tier.badge}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className={`inline-flex p-3 rounded-full ${tier.color} bg-opacity-20 mb-3`}>
                    <Icon className={`w-6 h-6 ${tier.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{tier.name}</h3>
                  
                  <div className="mb-3">
                    {tier.firstMonth && (
                      <p className="text-sm text-green-600 font-medium mb-1">
                        First month: ${tier.firstMonth}
                      </p>
                    )}
                    <p className="text-2xl font-bold text-navy">
                      ${currentPrice}
                      <span className="text-base font-normal text-gray-600">/mo</span>
                    </p>
                  </div>
                </div>

                {/* Condensed Features */}
                <div className="space-y-2 mb-6">
                  {tier.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                  tier.highlighted 
                    ? 'bg-teal-500 text-white hover:bg-teal-600' 
                    : 'bg-gray-100 text-navy hover:bg-gray-200'
                }`}>
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Premium Tiers */}
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mb-12">
          {tiers.slice(3).map((tier) => {
            const Icon = tier.icon;
            const currentPrice = tier.price;
            
            return (
              <div
                key={tier.name}
                className="relative bg-white rounded-2xl shadow-xl p-6 border-2 border-indigo-200"
              >
                <div className="text-center mb-4">
                  <div className={`inline-flex p-3 rounded-full ${tier.color} bg-opacity-20 mb-3`}>
                    <Icon className={`w-6 h-6 ${tier.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{tier.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{tier.description}</p>
                  
                  <p className="text-2xl font-bold text-navy">
                    ${currentPrice}
                    <span className="text-base font-normal text-gray-600">/mo</span>
                  </p>
                </div>

                {/* Condensed Features */}
                <div className="space-y-2 mb-6">
                  {tier.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 rounded-lg font-bold transition-all bg-indigo-500 text-white hover:bg-indigo-600">
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* What's Included Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">
            What Every Member Gets
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-navy mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-teal-500" />
                Weekly Events
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Sunday 7pm ET - Compass Call</li>
                <li>• Monday 9am ET - Body Doubling</li>
                <li>• Wednesday 9am ET - Body Doubling</li>
                <li>• Friday 9am ET - Body Doubling</li>
                <li>• Monthly themed workshops</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-navy mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-500" />
                Discord Community
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• #daily-anchor-and-compass</li>
                <li>• #resources-and-discussion</li>
                <li>• #weekly-wins-starlight</li>
                <li>• #body-doubling-links</li>
                <li>• #general-chat</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              Text Accountability Windows
            </h3>
            <p className="text-sm text-gray-700">
              Structured support with healthy boundaries:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• Nudges sent Sunday & Midweek</li>
              <li>• Reply windows: Mon-Fri 11:00-11:30am & 3:00-3:30pm ET</li>
              <li>• Premium structured support, not unlimited texting</li>
            </ul>
          </div>
        </div>

        {/* Calendar of Events */}
        <div className="mt-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">
            Weekly Community Calendar
          </h2>
          
          <div className="bg-white rounded-xl p-6 mb-6">
            <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-500" />
              Regular Events (All Times ET)
            </h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4">
                <p className="font-semibold text-navy">Sunday 7:00 PM - Compass Call</p>
                <p className="text-sm text-gray-600">Weekly check-in: Anchor, Compass, Storms, Drift, Starlight</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-navy">Monday 9:00 AM - Body Doubling</p>
                <p className="text-sm text-gray-600">Camera optional, get stuff done together</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-navy">Wednesday 9:00 AM - Body Doubling</p>
                <p className="text-sm text-gray-600">Midweek momentum boost</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-navy">Friday 9:00 AM - Body Doubling</p>
                <p className="text-sm text-gray-600">End the week strong</p>
              </div>
              
              <div className="border-l-4 border-pink-500 pl-4">
                <p className="font-semibold text-navy">Monthly Workshop</p>
                <p className="text-sm text-gray-600">Rotating themes: planning, ADHD tools, crisis protocols</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Plus:</span> Member-led sessions can be scheduled in #body-doubling-links. 
              Host your own or join others when you need extra support!
            </p>
          </div>
        </div>

        {/* Price Comparison Table */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto">
          <div className="bg-white text-navy p-6 text-center border-b border-gray-200">
            <h2 className="text-2xl font-bold">Compare All Plans</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-6 text-left text-base font-bold text-navy">Features</th>
                  <th className="px-4 py-6 text-center text-navy">
                    <div className="font-bold text-base">Harbor Access</div>
                    <div className="text-lg font-extrabold text-blue-600">$20/mo</div>
                  </th>
                  <th className="px-4 py-6 text-center text-navy">
                    <div className="font-bold text-base">Crew Essentials</div>
                    <div className="text-lg font-extrabold text-purple-600">$35/mo</div>
                  </th>
                  <th className="px-4 py-6 text-center text-navy bg-teal-50">
                    <div className="font-bold text-base">First Mate</div>
                    <div className="text-lg font-extrabold text-teal-600">$75/mo</div>
                    <div className="text-xs text-teal-600 font-semibold mt-1">MOST POPULAR</div>
                  </th>
                  <th className="px-4 py-6 text-center text-navy">
                    <div className="font-bold text-base">Navigator</div>
                    <div className="text-lg font-extrabold text-indigo-600">$150/mo</div>
                  </th>
                  <th className="px-4 py-6 text-center text-navy">
                    <div className="font-bold text-base">Captain's Concierge</div>
                    <div className="text-lg font-extrabold text-amber-600">$350/mo</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Discord Community</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-teal-50"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">Body Doubling Sessions</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-teal-50"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Weekly Sunday Compass Call</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-teal-50"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">Private Calls per Month</td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                  <td className="px-6 py-4 text-center text-sm">1 × 20min</td>
                  <td className="px-6 py-4 text-center bg-teal-50 text-sm">1 × 30min</td>
                  <td className="px-6 py-4 text-center text-sm">3 × 30min</td>
                  <td className="px-6 py-4 text-center text-sm">4 × 30min</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Text Nudges per Week</td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                  <td className="px-6 py-4 text-center text-sm">2×</td>
                  <td className="px-6 py-4 text-center bg-teal-50 text-sm">3×</td>
                  <td className="px-6 py-4 text-center text-sm">Unlimited</td>
                  <td className="px-6 py-4 text-center text-sm">Same-day</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">Personal Dashboard</td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                  <td className="px-6 py-4 text-center bg-teal-50 text-gray-400">—</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Priority Support</td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                  <td className="px-6 py-4 text-center bg-teal-50"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">Quarterly Planning</td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                  <td className="px-6 py-4 text-center bg-teal-50 text-gray-400">—</td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-navy mb-4">
            Not sure which tier is right for you?
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-purple-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-600 transition-colors"
          >
            Take the Quiz →
          </Link>
        </div>
      </div>
    </div>
  );
}