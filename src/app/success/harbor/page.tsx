'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Users, MessageCircle, Calendar, Anchor, ExternalLink } from 'lucide-react';

export default function HarborSuccess() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Generate access token when coming from membership page
    const generateAccessToken = () => {
      const timestamp = Date.now();
      const token = btoa(`harbor_${timestamp}`);
      sessionStorage.setItem('harbor_access_token', token);
      sessionStorage.setItem('harbor_access_time', timestamp.toString());
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
      const token = sessionStorage.getItem('harbor_access_token');
      const accessTime = sessionStorage.getItem('harbor_access_time');
      
      if (token && accessTime) {
        const timeElapsed = Date.now() - parseInt(accessTime);
        const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
        
        // Token valid for 1 hour
        if (timeElapsed < oneHour) {
          return true;
        } else {
          // Token expired - clear it
          sessionStorage.removeItem('harbor_access_token');
          sessionStorage.removeItem('harbor_access_time');
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
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
            className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Return to Membership
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-sky-200 to-indigo-300">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-xl mb-6">
              <Anchor className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-navy mb-4">
              Welcome to Harbor Access! ⚓
            </h1>
            <p className="text-xl text-gray-700">
              You're now part of the crew. Let's get you connected!
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy mb-6">Your Next Steps</h2>
            
            <div className="space-y-6">
              {/* Step 1: Discord */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    Join Our Discord Community
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Connect with your crew, access body doubling sessions, and join the conversation.
                  </p>
                  <a 
                    href="https://discord.gg/KkTrfWSS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Join Discord Now
                  </a>
                </div>
              </div>

              {/* Step 2: Calendar */}
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    Mark Your Calendar
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Sunday 7:00 PM ET</strong> - Weekly Compass Call</p>
                    <p><strong>Monday-Friday 10 AM-12 PM ET</strong> - Body Doubling Sessions</p>
                    <p><strong>Monday-Friday 1-3 PM ET</strong> - Body Doubling Sessions</p>
                    <p><strong>Last Friday 7 PM ET</strong> - Monthly Workshop</p>
                  </div>
                  <div className="mt-3 text-xs text-purple-600 bg-purple-100 rounded-lg p-2">
                    💡 All sessions are optional! Plus member-led sessions available anytime.
                  </div>
                </div>
              </div>

              {/* Step 3: Explore */}
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    Explore & Connect
                  </h3>
                  <p className="text-gray-700">
                    Take your time getting comfortable. Introduce yourself when you're ready, 
                    and don't hesitate to ask questions!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included Reminder */}
          <div className="bg-navy/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-navy mb-3">What's Included in Harbor Access</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>• Discord community access</div>
              <div>• All body doubling sessions</div>
              <div>• Weekly Sunday Compass Call</div>
              <div>• Shared resources & templates</div>
            </div>
          </div>

          {/* Upgrade Option */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Want to add private coaching sessions or text accountability?
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