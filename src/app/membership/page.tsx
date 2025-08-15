'use client';

import React from 'react';
import { Anchor, Users, MessageSquare, Navigation, Crown, Check, Calendar, Video, FileText, Zap } from 'lucide-react';

export default function Membership() {

  const tiers = [
    {
      name: 'Harbor Access',
      price: 20,
      firstMonth: '10',
      icon: Anchor,
      color: 'bg-blue-500',
      description: 'Join the community and start building momentum',
      features: [
        'Discord community access',
        'Unlimited body doubling',
        '2X/week text nudges (batched)',
        'Shared resources/tempontability'
      ],
      notIncluded: [
        'Private calls',
        'Text nudges',
        'Personal dashboard'
      ],
      badge: 'FOUNDING SPECIAL',
      cta: 'Join Harbor Access',
      highlighted: false
    },
    {
      name: 'Crew Essentials',
      price: 35,
      firstMonth: '20',
      icon: Users,
      color: 'bg-purple-500',
      description: 'Get personal support with community backing',
      features: [
        'Everything in Harbor Access',
        'One 20-min private call/mo',
        '2X/week text nudges (batched)',
        'Reply windows for accountability'
      ],
      notIncluded: [
        'Priority support',
        'Personal dashboard'
      ],
      badge: 'FOUNDING SPECIAL',
      cta: 'Join Crew Essentials',
      highlighted: false
    },
    {
      name: 'First Mate',
      price: 75,
      firstMonth: '50',
      icon: MessageSquare,
      color: 'bg-teal-500',
      description: 'Enhanced support with priority access',
      features: [
        'Everything in Crew Essential',
        'Two 20-min private calls/mo',
        '5X/week text nudges',
        'Priority Q&A thread in Discord'
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
        'Three 20-min private calls per month',
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
        'Four 20-min private calls per month',
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
          <div className="bg-navy text-white rounded-2xl p-4 inline-flex items-center gap-3 mb-8 shadow-xl relative overflow-hidden">
            <Anchor className="w-10 h-10 text-teal-400 flex-shrink-0" />
            <div className="text-left">
              <h2 className="text-xl font-bold mb-1 text-white">
                Founding Member Special
              </h2>
              <p className="text-white/90 text-sm">
                Offer ends Aug 31 - lock in your rate now
              </p>
            </div>
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
                  tier.highlighted ? 'ring-4 ring-teal-400' : ''
                }`}
              >
                {tier.badge && tier.badge === 'MOST POPULAR' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {tier.badge}
                    </span>
                  </div>
                )}
                {tier.badge && tier.badge !== 'MOST POPULAR' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {tier.badge}
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className={`inline-flex p-3 rounded-full ${tier.color} bg-opacity-20 mb-3`}>
                    <Icon className={`w-6 h-6 ${tier.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{tier.name}</h3>
                  
                  <div className="mb-3">
                    {tier.firstMonth && (
                      <div className="bg-pink-200 border border-navy-300 rounded-lg px-3 py-2 mb-3">
                        <p className="text-sm text-gray-800 font-medium">
                          First month just <span className="font-bold">${tier.firstMonth}</span>
                        </p>
                      </div>
                    )}
                    <p className="text-3xl font-bold text-navy">
                      ${currentPrice}<span className="text-lg font-normal text-gray-600">/mo</span>
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6 text-left">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                  tier.name === 'Harbor Access' ? 'bg-blue-500 text-white hover:bg-blue-600' :
                  tier.name === 'Crew Essentials' ? 'bg-purple-500 text-white hover:bg-purple-600' :
                  tier.name === 'First Mate' ? 'bg-teal-500 text-white hover:bg-teal-600' :
                  'bg-gray-100 text-navy hover:bg-gray-200'
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
                {tier.firstMonth && (
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    FOUNDING SPECIAL
                  </div>
                )}
                <div className="text-center mb-4">
                  <div className={`inline-flex p-3 rounded-full ${tier.color} bg-opacity-20 mb-3`}>
                    <Icon className={`w-6 h-6 ${tier.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{tier.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{tier.description}</p>
                  
                  <div className="mb-3">
                    {tier.firstMonth && (
                      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-lg p-2 mb-2">
                        <p className="text-sm text-orange-800 font-bold">
                          First month: ${tier.firstMonth}
                        </p>
                      </div>
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
                  tier.name === 'Navigator' ? 'bg-indigo-500 text-white hover:bg-indigo-600' :
                  tier.name === "Captain's Concierge" ? 'bg-amber-500 text-white hover:bg-amber-600' :
                  'bg-indigo-500 text-white hover:bg-indigo-600'
                }`}>
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

        {/* Header Section */}
        <div className="text-center mb-12 mt-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Select the perfect plan for your journey. Limited-time pricing available with premium features included.</p>
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12">
              <h2 className="text-3xl font-bold text-center text-white">Complete Feature Comparison</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-6 font-semibold text-gray-900 text-base w-80">Features</th>
                    <th className="px-6 py-6 text-center min-w-[140px]">
                      <div className="flex flex-col items-center">
                        <Anchor className="w-6 h-6 text-blue-600 mb-2" />
                        <div className="font-semibold text-blue-600 text-base">Harbor Access</div>
                      </div>
                    </th>
                    <th className="px-6 py-6 text-center min-w-[140px]">
                      <div className="flex flex-col items-center">
                        <Users className="w-6 h-6 text-purple-600 mb-2" />
                        <div className="font-semibold text-purple-600 text-base">Crew Essentials</div>
                      </div>
                    </th>
                    <th className="px-6 py-6 text-center bg-emerald-50 min-w-[140px]">
                      <div className="flex flex-col items-center">
                        <MessageSquare className="w-6 h-6 text-emerald-600 mb-2" />
                        <div className="font-semibold text-emerald-600 text-base">First Mate</div>
                        <div className="text-xs font-medium text-emerald-600 mt-1">Most Popular</div>
                      </div>
                    </th>
                    <th className="px-6 py-6 text-center min-w-[140px]">
                      <div className="flex flex-col items-center">
                        <Navigation className="w-6 h-6 text-indigo-600 mb-2" />
                        <div className="font-semibold text-indigo-600 text-base">Navigator</div>
                      </div>
                    </th>
                    <th className="px-6 py-6 text-center min-w-[140px]">
                      <div className="flex flex-col items-center">
                        <Crown className="w-6 h-6 text-amber-600 mb-2" />
                        <div className="font-semibold text-amber-600 text-base">Captain's Concierge</div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Discord Community */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 text-sm">Discord Community Access</td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center bg-emerald-50">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                  </tr>

                  {/* Body Doubling Sessions */}
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 text-sm">Body Doubling Sessions</td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center bg-emerald-50">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                  </tr>

                  {/* Weekly Sunday Compass Call */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 text-sm">Weekly Sunday Compass Call</td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center bg-emerald-50">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                  </tr>

                  {/* Private Calls per Month */}
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 text-sm">Private Calls per Month</td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-gray-400 text-lg">—</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="font-semibold text-gray-800">1 × 20min</span>
                    </td>
                    <td className="px-4 py-4 text-center bg-emerald-50">
                      <span className="font-semibold text-gray-800">2 × 20min</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="font-semibold text-gray-800">3 × 20min</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="font-semibold text-gray-800">4 × 20min</span>
                    </td>
                  </tr>

                  {/* Text Nudges per Week */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 text-sm">Text Nudges per Week</td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-gray-400 text-lg">—</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="font-semibold text-gray-800">2×</span>
                    </td>
                    <td className="px-4 py-4 text-center bg-emerald-50">
                      <span className="font-semibold text-gray-800">3×</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="font-semibold text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Unlimited</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="font-semibold text-amber-600">Same-day</span>
                    </td>
                  </tr>

                  {/* Personal Dashboard */}
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 text-sm">Personal Dashboard</td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-gray-400 text-lg">—</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center bg-emerald-50">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                  </tr>

                  {/* Priority Support */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 text-sm">Priority Support</td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-gray-400 text-lg">—</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-gray-400 text-lg">—</span>
                    </td>
                    <td className="px-4 py-4 text-center bg-emerald-50">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                  </tr>

                  {/* Quarterly Planning */}
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 text-sm">Quarterly Planning Sessions</td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-gray-400 text-lg">—</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-gray-400 text-lg">—</span>
                    </td>
                    <td className="px-4 py-4 text-center bg-emerald-50">
                      <span className="text-gray-400 text-lg">—</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-gray-400 text-lg">—</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-6 h-6 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                  </tr>

                  {/* Pricing Row */}
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-t-2 border-gray-300">
                    <td className="px-6 py-6 font-bold text-gray-900 text-base">Monthly Pricing</td>
                    <td className="px-4 py-6 text-center">
                      <div className="flex flex-col justify-end h-full">
                        <div className="text-sm text-gray-400 line-through mb-1">$20/mo</div>
                        <div className="text-2xl font-bold text-blue-600 mb-1">$10/mo</div>
                        <div className="text-xs font-medium text-blue-600">Limited Time</div>
                      </div>
                    </td>
                    <td className="px-4 py-6 text-center">
                      <div className="flex flex-col justify-end h-full">
                        <div className="text-sm text-gray-400 line-through mb-1">$35/mo</div>
                        <div className="text-2xl font-bold text-purple-600 mb-1">$25/mo</div>
                        <div className="text-xs font-medium text-purple-600">Limited Time</div>
                      </div>
                    </td>
                    <td className="px-4 py-6 text-center bg-emerald-50">
                      <div className="flex flex-col justify-end h-full">
                        <div className="text-sm text-gray-400 line-through mb-1">$75/mo</div>
                        <div className="text-2xl font-bold text-emerald-600 mb-1">$50/mo</div>
                        <div className="text-xs font-medium text-emerald-600">Best Value</div>
                      </div>
                    </td>
                    <td className="px-4 py-6 text-center">
                      <div className="flex flex-col justify-end h-full">
                        <div className="text-sm text-transparent mb-1">placeholder</div>
                        <div className="text-2xl font-bold text-indigo-600 mb-1">$150/mo</div>
                        <div className="text-xs font-medium text-indigo-600">Professional</div>
                      </div>
                    </td>
                    <td className="px-4 py-6 text-center">
                      <div className="flex flex-col justify-end h-full">
                        <div className="text-sm text-transparent mb-1">placeholder</div>
                        <div className="text-2xl font-bold text-amber-600 mb-1">$350/mo</div>
                        <div className="text-xs font-medium text-amber-600">Premium</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-6 text-emerald-50">Join thousands of others on their journey to success. Limited-time pricing ends soon!</p>
              <button className="bg-white text-emerald-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                Choose Your Plan
              </button>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}