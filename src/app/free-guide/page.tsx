'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function FreeGuide() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-freshaqua/20 to-tealblue/20 rounded-2xl shadow-lg p-8 border border-tealblue/30">
            <div className="w-20 h-20 bg-freshaqua rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-navy mb-4 font-playfair">Guide Sent! 📧</h1>
            <p className="text-lg text-gray-700 mb-6">
              Check your inbox for "5 ADHD-Friendly Productivity Hacks That Actually Work" – it should arrive within the next few minutes.
            </p>
            <p className="text-gray-600 mb-8">
              <strong>Don't see it?</strong> Check your spam folder and add marlie@navcoaching.org to your contacts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/marlie-navcoaching/initial" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-freshaqua to-tealblue text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                Ready for Personal Coaching?
              </a>
              <Link 
                href="/"
                className="inline-block px-8 py-3 bg-white border-2 border-tealblue text-tealblue font-bold rounded-lg shadow hover:shadow-lg transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-freshaqua/20 px-4 py-2 rounded-full text-freshaqua font-semibold mb-4">
            FREE RESOURCE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-playfair">
            5 ADHD-Friendly Productivity Hacks That Actually Work
          </h1>
          <p className="text-xl text-deepteal max-w-2xl mx-auto">
            Forget generic productivity advice. Get strategies designed specifically for how ADHD brains work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Preview Content */}
          <div className="space-y-6">
            <div className="bg-white/90 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-navy mb-6 font-playfair">What You'll Get:</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-freshaqua rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">The "2-Minute Rule" (ADHD Edition)</h3>
                    <p className="text-gray-600 text-sm">Why the traditional version fails ADHDers and how to modify it for your brain.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-tealblue rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">The "Dopamine Sandwich" Method</h3>
                    <p className="text-gray-600 text-sm">Surround boring tasks with things you love to create natural motivation.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-ocean rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">The "External Brain" Setup</h3>
                    <p className="text-gray-600 text-sm">Create a simple system to capture every thought without losing your focus.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">The "Energy-Based" Schedule</h3>
                    <p className="text-gray-600 text-sm">Stop fighting your natural rhythms and start working with them.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deepteal rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">The "Good Enough" Philosophy</h3>
                    <p className="text-gray-600 text-sm">How perfectionism kills productivity and what to do instead.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-freshaqua/10 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>💡 Bonus:</strong> Each hack includes a "Why This Works for ADHD" explanation and practical implementation tips you can use today.
                </p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-freshaqua/10 to-tealblue/10 rounded-xl p-6 border border-tealblue/20">
              <div className="flex items-start">
                <div className="text-3xl text-tealblue mr-4">"</div>
                <div>
                  <p className="text-gray-700 italic mb-3">
                    "These aren't just generic productivity tips - they actually make sense for how my brain works. The dopamine sandwich method alone has helped me tackle so many tasks I'd been avoiding!"
                  </p>
                  <p className="text-navy font-semibold">— Sarah K., Quiz Subscriber</p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Capture Form */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-navy mb-2 font-playfair">Get Your Free Guide</h2>
              <p className="text-gray-600">
                Enter your email and I'll send it to you immediately - no spam, ever.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-navy font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-tealblue transition text-navy text-lg"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-freshaqua to-tealblue text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Your Guide...
                  </span>
                ) : '📧 Send Me the Guide!'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Your email is safe. I hate spam too.</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Unsubscribe anytime. Read our <Link href="/privacy" className="text-tealblue underline">privacy policy</Link>.
              </p>
            </div>

            {/* Bonus info */}
            <div className="mt-6 p-4 bg-freshaqua/10 rounded-lg">
              <p className="text-sm text-gray-700 text-center">
                <strong>🎁 Bonus:</strong> You'll also get my weekly ADHD tips and strategies (but only the good stuff, I promise!)
              </p>
            </div>
          </div>
        </div>

        {/* Why This Guide Is Different */}
        <div className="mt-16 bg-gradient-to-br from-navy/10 to-deepteal/10 rounded-2xl shadow-lg p-8 border border-navy/20">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center font-playfair">
            Why This Guide Is Different
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-freshaqua rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Science-Based</h3>
              <p className="text-gray-600 text-sm">Based on current ADHD research and how executive function actually works</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-tealblue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Instantly Actionable</h3>
              <p className="text-gray-600 text-sm">No fluff - just practical strategies you can implement today</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Compassionate</h3>
              <p className="text-gray-600 text-sm">No shame, no "just try harder" - only understanding and practical support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}