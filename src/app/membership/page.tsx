'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Anchor, Users, MessageSquare, Navigation, Crown, Check, Calendar, Video, FileText, Zap, Star } from 'lucide-react';

export default function Membership() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const tiers = [
    {
      name: 'Harbor Access',
      price: 20,
      annualPrice: 200,
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
      annualPrice: 350,
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
      annualPrice: 750,
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
      annualPrice: 1500,
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
      annualPrice: 3500,
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
              First month discount on Crew Essentials & First Mate
            </p>
            <p className="text-sm text-yellow-700 mt-1">
              Offer ends Sunday, August 31 - lock in your spot now
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`font-medium ${billingCycle === 'monthly' ? 'text-navy' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${billingCycle === 'annual' ? 'text-navy' : 'text-gray-500'}`}>
              Annual <span className="text-green-600 text-sm">(Save 2 months)</span>
            </span>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid gap-6 lg:grid-cols-5 max-w-7xl mx-auto">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            const currentPrice = billingCycle === 'monthly' ? tier.price : tier.annualPrice;
            
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
                
                <div className="text-center mb-6">
                  <div className={`inline-flex p-3 rounded-full ${tier.color} bg-opacity-20 mb-4`}>
                    <Icon className={`w-8 h-8 ${tier.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{tier.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{tier.description}</p>
                  
                  <div className="mb-4">
                    {tier.firstMonth && billingCycle === 'monthly' && (
                      <p className="text-sm text-green-600 font-medium mb-1">
                        First month: ${tier.firstMonth}
                      </p>
                    )}
                    <p className="text-3xl font-bold text-navy">
                      ${currentPrice}
                      <span className="text-base font-normal text-gray-600">
                        /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {tier.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 opacity-50">
                      <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400 text-center">✕</span>
                      <span className="text-sm text-gray-500 line-through">{feature}</span>
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