'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Users, MessageCircle, Calendar, Phone, ExternalLink, Clock } from 'lucide-react';

export default function CrewSuccess() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Generate access token when coming from membership page
    const generateAccessToken = () => {
      const timestamp = Date.now();
      const token = btoa(`crew-essentials_${timestamp}`);
      sessionStorage.setItem('crew-essentials_access_token', token);
      sessionStorage.setItem('crew-essentials_access_time', timestamp.toString());
      return token;
    };

    // Validate access token
    const validateAccess = () => {
      // Check for Stripe parameters (most reliable)
      const sessionId = searchParams.get('session_id');
      const paymentIntent = searchParams.get('payment_intent');
      
      if (sessionId || paymentIntent) {
        // Valid Stripe parameters - generate new token for future visits
        generateAccessToken();
        return true;
      }

      // Check for valid access token (for direct URL access)
      const token = sessionStorage.getItem('crew-essentials_access_token');
      const accessTime = sessionStorage.getItem('crew-essentials_access_time');
      
      if (token && accessTime) {
        const timeElapsed = Date.now() - parseInt(accessTime);
        const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
        
        // Token valid for 1 hour
        if (timeElapsed < oneHour) {
          return true;
        } else {
          // Token expired - clear it
          sessionStorage.removeItem('crew-essentials_access_token');
          sessionStorage.removeItem('crew-essentials_access_time');
        }
      }

      return false;
    };

    if (validateAccess()) {
      setIsAuthorized(true);
    } else {
      // Redirect immediately
      window.location.href = '/membership';
    }
    
    setIsLoading(false);
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
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
            This page is only accessible after completing payment. You'll be redirected to the membership page.
          </p>
          <Link 
            href="/membership"
            className="inline-block bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition"
          >
            Return to Membership
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-200 to-indigo-300">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-xl mb-6">
              <Users className="w-10 h-10 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-navy mb-4">
              Welcome to Crew Essentials! 🎉
            </h1>
            <p className="text-xl text-gray-700">
              You've got community support + personal coaching. Let's get you set up!
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
                    💳 Complete Your Membership Payment
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Secure your Crew Essentials membership with our founding member pricing ($65 first month, then $85/month).
                  </p>
                  <a 
                    href="https://buy.stripe.com/crew-essentials-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Complete Payment ($65)
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
                    Connect with your crew and access all community features. Discord invite will be sent to your email after payment.
                  </p>
                  <div className="bg-blue-100 rounded-lg p-3">
                    <p className="text-blue-800 text-sm font-medium">Discord invite sent after payment confirmation</p>
                  </div>
                </div>
              </div>

              {/* Step 3: Schedule Coaching */}
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-purple-600" />
                    Schedule Your First 1-on-1 Call
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Book your monthly 1-on-1 coaching call. Cal.com link will be sent to your email after payment. No rush - get comfortable in the community first!
                  </p>
                  <div className="bg-purple-100 rounded-lg p-3">
                    <p className="text-purple-800 text-sm font-medium">Cal.com booking link sent after payment confirmation</p>
                  </div>
                </div>
              </div>

              {/* Step 4: Calendar */}
              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    Mark Your Calendar
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Sunday 7:00 PM ET</strong> - Weekly Compass Call
                  </p>
                  <p className="text-gray-700">
                    <strong>Mon-Fri 10 AM-12 PM & 1-3 PM ET</strong> - Body Doubling Sessions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-navy/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-navy mb-3">What's Included in Crew Essentials</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>• Everything in Harbor Access</div>
              <div>• One 20-min private call per month</div>
              <div>• 2×/week text nudges (batched)</div>
              <div>• Reply windows for accountability</div>
            </div>
          </div>

          {/* Upgrade Option */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Need more support? You can always upgrade to longer sessions or more frequent calls.
            </p>
            <Link
              href="/membership"
              className="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition"
            >
              Explore Upgrade Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}