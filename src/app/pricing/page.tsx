'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import LegalDisclaimer from '@/components/common/LegalDisclaimer';
import { CheckIcon } from '@heroicons/react/24/solid';

const Check = () => (
  <CheckIcon className="h-5 w-5 text-coral" aria-hidden="true" />
);

const X = () => (
  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-playfair text-center">
        Coaching <span className="text-coral">Packages</span>
      </h1>
      
      <p className="text-xl mb-8 max-w-3xl mx-auto text-center">
        Choose the coaching package that best fits your needs. All packages include personalized 
        accountability coaching designed specifically for ADHD brains.
      </p>
      
      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-white bg-opacity-90 rounded-full p-1 inline-flex">
          <button
            className={`px-6 py-2 rounded-full text-sm font-bold ${
              billingPeriod === 'monthly' ? 'bg-freshaqua text-navy' : 'text-navy'
            }`}
            onClick={() => setBillingPeriod('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-bold ${
              billingPeriod === 'package' ? 'bg-freshaqua text-navy' : 'text-navy'
            }`}
            onClick={() => setBillingPeriod('package')}
          >
            6-Session Package
          </button>
        </div>
      </div>
      
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* First Voyage - Basic Plan */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-soft overflow-hidden content-card">
          <div className="bg-softblue p-6">
            <h3 className="text-2xl font-bold text-navy mb-2 font-playfair">First Voyage</h3>
            <p className="text-navy">Perfect for getting started</p>
            <div className="mt-4">
              <span className="text-3xl font-bold text-navy">
                {billingPeriod === 'monthly' ? '$299' : '$1,599'}
              </span>
              <span className="text-navy ml-2">
                {billingPeriod === 'monthly' ? '/month' : ' for 6 sessions'}
              </span>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-navy">2 coaching sessions per month</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-navy">Weekly text check-ins</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-navy">Personal Notion dashboard</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-navy">Access to member resources</p>
              </li>
            </ul>
            <Link 
              href="/contact" 
              className="block w-full py-3 px-4 bg-ocean text-white text-center font-bold rounded-lg shadow hover:bg-opacity-90 transition hover-lift"
            >
              Get Started
            </Link>
          </div>
        </div>
        
        {/* Steady Course - Popular Plan */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-soft overflow-hidden content-card transform md:scale-105 relative">
          <div className="absolute top-0 right-0 bg-coral text-white px-4 py-1 rounded-bl-lg font-bold text-sm">
            MOST POPULAR
          </div>
          <div className="bg-ocean p-6">
            <h3 className="text-2xl font-bold text-white mb-2 font-playfair">Steady Course</h3>
            <p className="text-white">Comprehensive support</p>
            <div className="mt-4">
              <span className="text-3xl font-bold text-white">
                {billingPeriod === 'monthly' ? '$399' : '$2,149'}
              </span>
              <span className="text-white ml-2">
                {billingPeriod === 'monthly' ? '/month' : ' for 6 sessions'}
              </span>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-navy">4 coaching sessions per month</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-navy">Unlimited text check-ins</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-navy">Personal Notion dashboard</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-navy">Weekly body doubling sessions</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-navy">AI tools setup assistance</p>
              </li>
            </ul>
            <Link 
              href="/contact" 
              className="block w-full py-3 px-4 bg-coral text-white text-center font-bold rounded-lg shadow hover:bg-opacity-90 transition hover-lift"
            >
              Get Started
            </Link>
          </div>
        </div>
        
        {/* Full Journey - Premium Plan */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-soft overflow-hidden content-card">
          <div className="bg-tealblue p-6">
            <h3 className="text-2xl font-bold text-white mb-2 font-playfair">Full Journey</h3>
            <p className="text-white">Maximum accountability</p>
            <div className="mt-4">
              <span className="text-3xl font-bold text-white">
                {billingPeriod === 'monthly' ? '$599' : '$3,199'}
              </span>
              <span className="text-white ml-2">
                {billingPeriod === 'monthly' ? '/month' : ' for 6 sessions'}
              </span>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-navy">6 coaching sessions per month</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-navy">Daily text check-ins</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-navy">Enhanced Notion dashboard</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-navy">Unlimited body doubling sessions</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-navy">Priority scheduling</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-navy">Custom productivity systems</p>
              </li>
            </ul>
            <Link 
              href="/contact" 
              className="block w-full py-3 px-4 bg-tealblue text-white text-center font-bold rounded-lg shadow hover:bg-opacity-90 transition hover-lift"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      
      {/* Package Comparison Toggle */}
      <div className="text-center mb-8">
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="inline-flex items-center text-ocean hover:text-coral transition"
        >
          <span>{showComparison ? 'Hide detailed comparison' : 'Show detailed comparison'}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 ml-1 transform transition-transform ${showComparison ? 'rotate-180' : ''}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      
      {/* Detailed Comparison Table */}
      {showComparison && (
        <div className="bg-white bg-opacity-90 rounded-lg shadow-soft overflow-hidden mb-12 content-card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">First Voyage</th>
                  <th className="py-4 px-6 text-center">Steady Course</th>
                  <th className="py-4 px-6 text-center">Full Journey</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Monthly coaching sessions</td>
                  <td className="py-4 px-6 text-center">2</td>
                  <td className="py-4 px-6 text-center">4</td>
                  <td className="py-4 px-6 text-center">6</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-medium">Text check-ins</td>
                  <td className="py-4 px-6 text-center">Weekly</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                  <td className="py-4 px-6 text-center">Daily</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Notion dashboard</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center">Standard</td>
                  <td className="py-4 px-6 text-center">Enhanced</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-medium">Body doubling sessions</td>
                  <td className="py-4 px-6 text-center">—</td>
                  <td className="py-4 px-6 text-center">Weekly</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">AI tools assistance</td>
                  <td className="py-4 px-6 text-center">—</td>
                  <td className="py-4 px-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral mx-auto" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral mx-auto" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-medium">Priority scheduling</td>
                  <td className="py-4 px-6 text-center">—</td>
                  <td className="py-4 px-6 text-center">—</td>
                  <td className="py-4 px-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral mx-auto" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Custom productivity systems</td>
                  <td className="py-4 px-6 text-center">—</td>
                  <td className="py-4 px-6 text-center">—</td>
                  <td className="py-4 px-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral mx-auto" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6 font-medium">Member resources access</td>
                  <td className="py-4 px-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral mx-auto" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral mx-auto" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral mx-auto" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy mb-6 font-playfair text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6 content-card">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">Can I change my package later?</h3>
              <p>Yes! You can upgrade or downgrade your package at any time. Changes will take effect at the start of your next billing cycle.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">What if I need to cancel a session?</h3>
              <p>Sessions can be rescheduled with at least 24 hours notice. Last-minute cancellations may count as a used session, but I understand that life happens—especially with ADHD—and will work with you on a case-by-case basis.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">Is there a minimum commitment period?</h3>
              <p>No long-term contracts required! You can subscribe month-to-month or choose a 6-session package for savings.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">Do you offer refunds?</h3>
              <p>If you're not satisfied after your first session, I offer a 100% money-back guarantee. After that, refunds are prorated based on unused sessions.</p>
            </div>
          </div>
        </div>
      </section>
      
            {/* Consultation CTA */}
      <div className="max-w-xl mx-auto bg-white bg-opacity-10 rounded-lg shadow-soft p-6 mb-12 text-center content-card">
        <h2 className="text-xl font-bold text-navy mb-3 font-playfair">Not Convinced Yet?</h2>
        <p className="text-navy mb-4">
          Let's chat! Schedule a free 15-minute consultation to discuss your needs. 
          No pressure, no commitment—just a friendly conversation about what's possible for you.
        </p>
        <Link 
          href="https://calendly.com/marlie-navcoaching/initial" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn cta inline-block px-6 py-2 bg-freshaqua text-navy font-bold rounded-lg shadow-soft hover:bg-tealblue hover:text-white transition hover-lift"
        >
          Schedule Free Consultation
        </Link>
      </div>
      
      {/* Legal Disclaimer */}
      <div className="mt-16">
        <LegalDisclaimer />
      </div>
    </div>
  );
}
