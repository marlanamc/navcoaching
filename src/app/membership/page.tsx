'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { 
  Anchor, Users, MessageSquare, Crown, Check, Calendar, 
  Clock, Award
} from 'lucide-react';

// Countdown Timer Component - Client-side only
const CountdownTimerComponent = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-08-31T23:59:59').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-4 text-center">
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 text-white" />
        <span className="text-sm font-medium text-white">Offer ends in:</span>
      </div>
      <div className="flex gap-2">
        {[
          { label: 'd', value: timeLeft.days },
          { label: 'h', value: timeLeft.hours },
          { label: 'm', value: timeLeft.minutes },
          { label: 's', value: timeLeft.seconds }
        ].map((unit, idx) => (
          <div key={idx} className="bg-white rounded-lg px-3 py-2 min-w-[3rem] shadow-lg">
            <div className="text-lg font-bold text-navy">{unit.value.toString().padStart(2, '0')}</div>
            <div className="text-xs text-gray-600 font-medium">{unit.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Dynamic import to prevent SSR
const CountdownTimer = dynamic(() => Promise.resolve(CountdownTimerComponent), {
  ssr: false,
  loading: () => (
    <div className="flex items-center gap-4 text-center">
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 text-white" />
        <span className="text-sm font-medium text-white">Offer ends in:</span>
      </div>
      <div className="flex gap-2">
        {[0, 0, 0, 0].map((_, idx) => (
          <div key={idx} className="bg-white rounded-lg px-3 py-2 min-w-[3rem] shadow-lg">
            <div className="text-lg font-bold text-navy">--</div>
            <div className="text-xs text-gray-600 font-medium">{['d', 'h', 'm', 's'][idx]}</div>
          </div>
        ))}
      </div>
    </div>
  )
});



// Sticky CTA Component - Client-side only
const StickyCTAComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight * 1.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-teal-500 shadow-2xl z-50 p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div>
          <h3 className="font-bold text-navy">Ready to Join the Crew?</h3>
          <p className="text-sm text-gray-600">Founding member pricing available</p>
        </div>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-teal-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-600 transition-colors"
        >
          Start My Journey
        </button>
      </div>
    </div>
  );
};

// Dynamic import to prevent SSR
const StickyCTA = dynamic(() => Promise.resolve(StickyCTAComponent), {
  ssr: false
});

export default function Membership() {
  const mainTiers = [
    {
      name: 'Harbor Access',
      price: 35,
      salePrice: 15,
      icon: Anchor,
      color: 'bg-blue-500',
      description: 'Perfect for getting started with community support',
      features: [
        'Discord community',
        'Body doubling sessions',
        'Weekly Compass Calls',
        'Shared resources'
      ],
      cta: 'Start My Harbor Journey',
      stripeUrl: 'https://buy.stripe.com/test_00waEW1T7cPj2Jkcap1ck00',
      highlighted: false,
      recommended: false
    },
    {
      name: 'Crew Essentials',
      price: 85,
      salePrice: 65,
      icon: Users,
      color: 'bg-purple-500',
      description: 'For those ready to add personal accountability',
      features: [
        'Everything in Harbor Access',
        '1 × 1:1 Accountability Coaching Call/month',
        '1×/week text nudges',
        'Personal dashboard'
      ],
      cta: 'Join Crew Essentials',
      stripeUrl: 'https://buy.stripe.com/crew-essentials-link', // Replace with actual Stripe link
      needsOnboarding: true,
      highlighted: false,
      recommended: false
    },
    {
      name: 'First Mate',
      price: 125,
      salePrice: 105,
      icon: MessageSquare,
      color: 'bg-teal-500',
      description: 'Comprehensive support for consistent progress',
      features: [
        'Everything in Crew Essentials',
        '2 × 1:1 Accountability Coaching Calls/month',
        '2×/week text nudges',
        'Priority support'
      ],
      cta: 'Become First Mate',
      stripeUrl: 'https://buy.stripe.com/first-mate-link', // Replace with actual Stripe link
      needsOnboarding: true,
      highlighted: true,
      recommended: true
    },
    {
      name: "Captain's Concierge",
      price: 185,
      salePrice: 165,
      icon: Crown,
      color: 'bg-amber-500',
      description: 'Maximum support for serious growth and transformation',
      features: [
        'Everything in First Mate',
        '4 × 1:1 Accountability Coaching Calls/month',
        '3×/week text nudges + unlimited',
        'Custom dashboard',
        'Early access to new features'
      ],
      cta: 'Join Concierge',
      stripeUrl: 'https://buy.stripe.com/captains-concierge-link', // Replace with actual Stripe link
      needsOnboarding: true,
      highlighted: false,
      recommended: false
    }
  ];



  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-200 to-indigo-300">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Users className="w-4 h-4" />
                Join Our Community
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-navy mb-6">
              Join the Crew
            </h1>
            <p className="text-xl text-navy/80 max-w-3xl mx-auto mb-8">
              Choose your level of support. All tiers include access to our vibrant community, 
              body doubling sessions, and weekly Compass Calls.
            </p>
            
            {/* Founding Member Banner with Countdown */}
            <div className="bg-navy text-white rounded-2xl p-6 inline-flex flex-col sm:flex-row items-center gap-4 mb-8 shadow-xl relative overflow-hidden max-w-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-indigo-900/90"></div>
              <div className="relative flex items-center gap-3">
                <Anchor className="w-10 h-10 text-teal-400 flex-shrink-0" />
                <div className="text-left">
                  <h2 className="text-xl font-bold mb-1 text-white">
                    Founding Member Special
                  </h2>
                  <p className="text-white/90 text-sm">
                    50% off your first month
                  </p>
                </div>
              </div>
              <div className="relative z-10">
                <CountdownTimer />
              </div>
            </div>

          </div>

          {/* Main Pricing Cards */}
          <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 max-w-7xl mx-auto mb-16">
            {mainTiers.map((tier) => {
              const Icon = tier.icon;
              
              return (
                <div
                  key={tier.name}
                  className={`relative bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl flex flex-col ${
                    tier.highlighted ? 'ring-4 ring-teal-400 scale-105' : ''
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-center">
                      <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg inline-flex items-center justify-center gap-2">
                        <Award className="w-4 h-4" />
                        MOST RECOMMENDED
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-4 rounded-full ${tier.color} bg-opacity-20 mb-4`}>
                      <Icon className={`w-8 h-8 ${tier.color.replace('bg-', 'text-')}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">${tier.price}</span>
                        <span className="text-lg text-gray-600">/mo</span>
                      </div>
                      <div className="bg-gradient-to-r from-pink-100 to-orange-100 border border-pink-300 rounded-lg p-3 mb-4">
                        <p className="text-sm font-bold text-orange-800">
                          First month only ${tier.salePrice}
                        </p>
                      </div>
                      
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6 flex-grow">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={tier.name === 'Harbor Access' ? tier.stripeUrl : `/success/${tier.name.toLowerCase().replace(/\s+/g, '-').replace("'", "")}`}
                    target={tier.name === 'Harbor Access' ? '_blank' : '_self'}
                    rel={tier.name === 'Harbor Access' ? 'noopener noreferrer' : undefined}
                    onClick={() => {
                      // Generate access token for this tier
                      const timestamp = Date.now();
                      const tierSlug = tier.name.toLowerCase().replace(/\s+/g, '-').replace("'", "");
                      const token = btoa(`${tierSlug}_${timestamp}`);
                      sessionStorage.setItem(`${tierSlug}_access_token`, token);
                      sessionStorage.setItem(`${tierSlug}_access_time`, timestamp.toString());
                    }}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 inline-block text-center mt-auto ${
                    tier.name === 'Harbor Access' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25' 
                      : tier.name === 'Crew Essentials' 
                        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 shadow-lg shadow-purple-500/25'
                        : tier.name === 'First Mate'
                          ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 shadow-lg shadow-teal-500/25'
                          : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/25'
                  }`}>
                    {tier.cta}
                  </a>
                </div>
              );
            })}
          </div>


          {/* Feature Comparison Table */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy mb-2">Compare All Features</h2>
              <p className="text-gray-600">See exactly what's included in each tier</p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8">
                  <h2 className="text-2xl font-bold text-center text-white">Complete Feature Comparison</h2>
                </div>
                
                {/* Mobile-friendly table */}
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left px-4 py-4 font-semibold text-gray-900 text-sm w-64">Features</th>
                        <th className="px-3 py-4 text-center min-w-[110px]">
                          <div className="flex flex-col items-center">
                            <Anchor className="w-5 h-5 text-blue-600 mb-1" />
                            <div className="font-semibold text-blue-600 text-sm">Harbor</div>
                          </div>
                        </th>
                        <th className="px-3 py-4 text-center min-w-[110px]">
                          <div className="flex flex-col items-center">
                            <Users className="w-5 h-5 text-purple-600 mb-1" />
                            <div className="font-semibold text-purple-600 text-sm">Crew</div>
                          </div>
                        </th>
                        <th className="px-3 py-4 text-center bg-emerald-50 min-w-[110px]">
                          <div className="flex flex-col items-center">
                            <MessageSquare className="w-5 h-5 text-emerald-600 mb-1" />
                            <div className="font-semibold text-emerald-600 text-sm">First Mate</div>
                            <div className="text-xs font-medium text-emerald-600 mt-1">Recommended</div>
                          </div>
                        </th>
                        <th className="px-3 py-4 text-center min-w-[120px]">
                          <div className="flex flex-col items-center">
                            <Crown className="w-5 h-5 text-amber-600 mb-1" />
                            <div className="font-semibold text-amber-600 text-sm">Concierge</div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Discord Community Access', true, true, true, true],
                        ['Body Doubling Sessions', true, true, true, true],
                        ['Weekly Compass Calls', true, true, true, true],
                        ['1:1 Accountability Coaching Calls', '—', '1 × 20min/mo', '2 × 20min/mo', '4 × 20min/mo'],
                        ['Text Nudges/Week', '—', '1×', '2×', '3× + unlimited'],
                        ['Personal Dashboard', false, true, true, true],
                        ['Priority Support', false, false, true, true],
                        ['Monthly Price', '$35 (1st: $15)', '$85 (1st: $65)', '$125 (1st: $105)', '$185 (1st: $165)']
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-3 font-medium text-gray-900 text-sm">{row[0]}</td>
                          {row.slice(1).map((cell, cellIdx) => (
                            <td key={cellIdx} className={`px-3 py-3 text-center text-sm ${cellIdx === 2 ? 'bg-emerald-50' : ''}`}>
                              {typeof cell === 'boolean' ? (
                                cell ? (
                                  <div className="w-5 h-5 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" />
                                  </div>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )
                              ) : (
                                <span className="font-semibold text-gray-800">{cell}</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Community Calendar */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-navy mb-6 text-center">
                Weekly Community Calendar
              </h2>
              <p className="text-center text-gray-600 mb-8">
                All members get access to these events, plus Discord community and text accountability windows.
              </p>
              
              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="font-bold text-navy mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-indigo-500" />
                  Weekly Schedule (All Times ET)
                </h3>
                
                {/* Mobile-friendly Schedule */}
                <div className="md:hidden space-y-4">
                  {/* Mobile Body Doubling */}
                  <div className="bg-purple-100 border border-purple-300 rounded-lg p-4">
                    <h4 className="font-bold text-purple-800 mb-2">Body Doubling Sessions</h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <div><strong>Mon-Fri:</strong> 10 AM - 12 PM</div>
                      <div><strong>Mon-Fri:</strong> 1 PM - 3 PM</div>
                      <div className="text-xs text-purple-600 mt-2">Camera optional, get stuff done together</div>
                    </div>
                  </div>
                  
                  {/* Mobile Compass Call */}
                  <div className="bg-indigo-100 border border-indigo-300 rounded-lg p-4">
                    <h4 className="font-bold text-indigo-800 mb-2">Compass Call</h4>
                    <div className="text-sm text-gray-700">
                      <div><strong>Sunday:</strong> 7 PM - 9 PM</div>
                      <div className="text-xs text-indigo-600 mt-2">Plan the week ahead together</div>
                    </div>
                  </div>
                  
                  {/* Mobile Monthly Workshop */}
                  <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2">Monthly Workshop</h4>
                    <div className="text-sm text-gray-700">
                      <div><strong>Last Friday:</strong> 7 PM each month</div>
                      <div className="text-xs text-green-600 mt-2">Skills training & ADHD tools</div>
                    </div>
                  </div>
                </div>

                {/* Desktop Calendar Grid */}
                <div className="hidden md:block">
                  <div className="grid grid-cols-8 gap-1 text-xs">
                    {/* Header Row */}
                    <div className="font-bold text-center py-2"></div>
                    <div className="font-bold text-center py-2 text-gray-700">Sun</div>
                    <div className="font-bold text-center py-2 text-gray-700">Mon</div>
                    <div className="font-bold text-center py-2 text-gray-700">Tue</div>
                    <div className="font-bold text-center py-2 text-gray-700">Wed</div>
                    <div className="font-bold text-center py-2 text-gray-700">Thu</div>
                    <div className="font-bold text-center py-2 text-gray-700">Fri</div>
                    <div className="font-bold text-center py-2 text-gray-700">Sat</div>
                    
                    {/* 10 AM - 12 PM Row */}
                    <div className="font-semibold text-right py-3 pr-2 text-gray-600">10 AM - 12 PM</div>
                    <div className=""></div>
                    <div className="bg-purple-100 border border-purple-300 rounded p-2 text-center">
                      <div className="font-semibold text-purple-800">Body Doubling</div>
                    </div>
                    <div className="bg-purple-100 border border-purple-300 rounded p-2 text-center">
                      <div className="font-semibold text-purple-800">Body Doubling</div>
                    </div>
                    <div className="bg-purple-100 border border-purple-300 rounded p-2 text-center">
                      <div className="font-semibold text-purple-800">Body Doubling</div>
                    </div>
                    <div className="bg-purple-100 border border-purple-300 rounded p-2 text-center">
                      <div className="font-semibold text-purple-800">Body Doubling</div>
                    </div>
                    <div className="bg-purple-100 border border-purple-300 rounded p-2 text-center">
                      <div className="font-semibold text-purple-800">Body Doubling</div>
                    </div>
                    <div className=""></div>
                    
                    {/* 1 PM - 3 PM Row */}
                    <div className="font-semibold text-right py-3 pr-2 text-gray-600">1 PM - 3 PM</div>
                    <div className=""></div>
                    <div className="bg-purple-100 border border-purple-300 rounded p-2 text-center">
                      <div className="font-semibold text-purple-800">Body Doubling</div>
                    </div>
                    <div className="bg-purple-100 border border-purple-300 rounded p-2 text-center">
                      <div className="font-semibold text-purple-800">Body Doubling</div>
                    </div>
                    <div className="bg-purple-100 border border-purple-300 rounded p-2 text-center">
                      <div className="font-semibold text-purple-800">Body Doubling</div>
                    </div>
                    <div className="bg-purple-100 border border-purple-300 rounded p-2 text-center">
                      <div className="font-semibold text-purple-800">Body Doubling</div>
                    </div>
                    <div className="bg-purple-100 border border-purple-300 rounded p-2 text-center">
                      <div className="font-semibold text-purple-800">Body Doubling</div>
                    </div>
                    <div className=""></div>
                    
                    {/* 7 PM Row */}
                    <div className="font-semibold text-right py-3 pr-2 text-gray-600">7 PM</div>
                    <div className="bg-indigo-100 border border-indigo-300 rounded p-2 text-center">
                      <div className="font-semibold text-indigo-800">Compass Call</div>
                    </div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className="bg-green-100 border border-green-300 rounded p-2 text-center">
                      <div className="font-semibold text-green-800 text-xs">Monthly Workshop</div>
                    </div>
                    <div className=""></div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <div className="bg-purple-100 border border-purple-300 rounded-lg p-3">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="inline-block w-3 h-3 bg-purple-200 border border-purple-400 rounded mt-1"></span>
                      <span className="font-bold text-sm text-gray-800">Body Doubling</span>
                    </div>
                    <ul className="text-xs text-gray-700 space-y-1 ml-5">
                      <li>• <span className="font-semibold">When:</span> 10 AM - 12 PM & 1 PM - 3 PM, Monday - Friday</li>
                      <li>• <span className="font-semibold">Where:</span> Discord video channels</li>
                      <li>• <span className="font-semibold">What:</span> Camera optional, get stuff done together</li>
                      <li>• <span className="font-semibold">Plus:</span> Member-led sessions available anytime</li>
                    </ul>
                  </div>
                  <div className="bg-indigo-100 border border-indigo-300 rounded-lg p-3">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="inline-block w-3 h-3 bg-indigo-200 border border-indigo-400 rounded mt-1"></span>
                      <span className="font-bold text-sm text-gray-800">Compass Call</span>
                    </div>
                    <ul className="text-xs text-gray-700 space-y-1 ml-5">
                      <li>• <span className="font-semibold">When:</span> Sunday 7 PM - 9 PM ET</li>
                      <li>• <span className="font-semibold">Where:</span> Discord group call</li>
                      <li>• <span className="font-semibold">What:</span> Plan the week ahead (Anchor, Compass, Storms, Drift, Starlight)</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 border border-green-300 rounded-lg p-3">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="inline-block w-3 h-3 bg-green-200 border border-green-400 rounded mt-1"></span>
                      <span className="font-bold text-sm text-gray-800">Monthly Workshop</span>
                    </div>
                    <ul className="text-xs text-gray-700 space-y-1 ml-5">
                      <li>• <span className="font-semibold">When:</span> Last Friday night of each month</li>
                      <li>• <span className="font-semibold">Where:</span> Discord group call</li>
                      <li>• <span className="font-semibold">What:</span> Planning strategies, ADHD tools, crisis protocols, seasonal themes</li>
                      <li>• <span className="font-semibold">Plus:</span> Always recorded for those who miss it</li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>



        </div>
      </div>
      
      <StickyCTA />
    </>
  );
}