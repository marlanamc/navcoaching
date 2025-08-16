'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { MessageSquare, MessageCircle, Calendar, Phone, ExternalLink, Clock, Star } from 'lucide-react';

export default function FirstMateSuccess() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const validateAccess = () => {
      const sessionId = searchParams.get('session_id');
      const paymentIntent = searchParams.get('payment_intent');
      
      if (sessionId || paymentIntent) {
        const timestamp = Date.now();
        const token = btoa(`first-mate_${timestamp}`);
        sessionStorage.setItem('first-mate_access_token', token);
        sessionStorage.setItem('first-mate_access_time', timestamp.toString());
        return true;
      }

      const token = sessionStorage.getItem('first-mate_access_token');
      const accessTime = sessionStorage.getItem('first-mate_access_time');
      
      if (token && accessTime) {
        const timeElapsed = Date.now() - parseInt(accessTime);
        const oneHour = 60 * 60 * 1000;
        
        if (timeElapsed < oneHour) {
          return true;
        } else {
          sessionStorage.removeItem('first-mate_access_token');
          sessionStorage.removeItem('first-mate_access_time');
        }
      }

      return false;
    };

    if (validateAccess()) {
      setIsAuthorized(true);
    } else {
      window.location.href = '/membership';
    }
    
    setIsLoading(false);
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying payment...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <h1 className="text-2xl font-bold text-navy mb-4">Access Restricted</h1>
          <p className="text-gray-600 mb-4">
            This page is only accessible after completing payment.
          </p>
          <Link 
            href="/membership"
            className="inline-block bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition"
          >
            Return to Membership
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-100 via-cyan-200 to-blue-300">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-xl mb-6">
              <MessageSquare className="w-10 h-10 text-teal-600" />
            </div>
            <h1 className="text-4xl font-bold text-navy mb-4">
              Welcome, First Mate! ⭐
            </h1>
            <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-teal-600" />
              <span className="text-teal-800 font-semibold text-sm">MOST POPULAR CHOICE</span>
            </div>
            <p className="text-xl text-gray-700">
              You've got enhanced support with priority access. Let's get you sailing!
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy mb-6">Let's Get You Started!</h2>
            
            <div className="space-y-6">
              {/* Step 1: Complete Payment */}
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-2 border-green-200">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    💳 Complete Your First Mate Payment
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Secure your First Mate membership with founding member pricing ($105 first month, then $125/month).
                  </p>
                  <a 
                    href="https://buy.stripe.com/first-mate-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Complete Payment ($105)
                  </a>
                </div>
              </div>

              {/* Step 2: Discord */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    Join Our Discord Community
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Connect with your crew and get access to your priority support. Discord invite sent after payment.
                  </p>
                  <div className="bg-blue-100 rounded-lg p-3">
                    <p className="text-blue-800 text-sm font-medium">Discord invite sent after payment confirmation</p>
                  </div>
                </div>
              </div>

              {/* Step 3: Schedule Coaching */}
              <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-xl">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-teal-600" />
                    Schedule Your 2 Monthly Calls
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Book your two monthly 1-on-1 coaching sessions. Cal.com link will be sent to your email after payment.
                  </p>
                  <div className="bg-teal-100 rounded-lg p-3">
                    <p className="text-teal-800 text-sm font-medium">Cal.com booking link sent after payment confirmation</p>
                  </div>
                </div>
              </div>
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Join Discord Now
                  </a>
                </div>
              </div>

              {/* Step 2: Schedule Coaching */}
              <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-xl border-2 border-teal-200">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-teal-600" />
                    Schedule Your Monthly Strategy Session
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Book your 30-minute monthly session when you're ready. Perfect for deeper dives 
                    and strategic planning.
                  </p>
                  <a 
                    href="https://cal.com/navcoaching/first-mate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition"
                  >
                    <Clock className="w-4 h-4" />
                    Schedule Session
                  </a>
                </div>
              </div>

              {/* Step 3: Calendar */}
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
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
            <h3 className="font-bold text-navy mb-3">What's Included in First Mate</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>• Everything in Crew Essentials</div>
              <div>• One 30-min private call per month</div>
              <div>• 3×/week text nudges</div>
              <div>• Priority Q&A thread in Discord</div>
            </div>
          </div>

          {/* Upgrade Option */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Need multiple sessions per month or unlimited text support?
            </p>
            <Link
              href="/membership"
              className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition"
            >
              Explore Navigator & Concierge Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}