'use client';

import React from 'react';
import Link from 'next/link';
import { LifeBuoy, Download, FileText, Clock, Zap, Users, ArrowRight } from 'lucide-react';

export default function FirstAidKit() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-100 to-indigo-200">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-xl mb-8">
            <LifeBuoy className="w-12 h-12 text-purple-600" />
          </div>
          <h1 className="text-5xl font-bold text-navy mb-4">
            The ADHD First Aid Kit
          </h1>
          <p className="text-xl text-purple-900 font-semibold mb-4">
            Free for Everyone - No Strings Attached
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A growing library of emergency strategies, quick scripts, and get-unstuck tools 
            designed specifically for ADHD brains in crisis mode.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-8 max-w-2xl mx-auto mb-12 text-center">
          <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-yellow-900 mb-4">
            Currently in Development
          </h2>
          <p className="text-yellow-800 mb-6">
            We're crafting the most practical ADHD crisis toolkit on the internet. 
            Get notified when it launches and receive the first emergency script free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors font-semibold">
              Notify Me →
            </button>
          </div>
        </div>

        {/* What's Coming */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Crisis Scripts</h3>
            <p className="text-gray-700 text-sm">
              Word-for-word scripts for when you need to explain ADHD to your boss, 
              partner, or family during a meltdown
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">5-Minute Fixes</h3>
            <p className="text-gray-700 text-sm">
              Quick strategies to get unstuck when you're paralyzed, 
              overwhelmed, or completely frozen
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Body Doubling Guides</h3>
            <p className="text-gray-700 text-sm">
              How to start, host, or join body doubling sessions 
              even when social anxiety kicks in
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Templates & Checklists</h3>
            <p className="text-gray-700 text-sm">
              Printable Anchor & Compass worksheets, 
              emergency contact lists, and crisis protocols
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Phone Wallpapers</h3>
            <p className="text-gray-700 text-sm">
              Emergency reminder cards you can save to your phone 
              for instant access during tough moments
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <ArrowRight className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Action Plans</h3>
            <p className="text-gray-700 text-sm">
              Step-by-step guides for common ADHD emergencies: 
              forgotten deadlines, lost motivation, rejection sensitivity
            </p>
          </div>
        </div>

        {/* Community Advantage */}
        <div className="bg-gradient-to-br from-navy/10 to-teal/10 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Why Our Community Takes It Further
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The First Aid Kit gives you the tools. Our community gives you the support, 
              practice, and personalization to make them work in real life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-navy text-lg">Free First Aid Kit Includes:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Access to all guides and scripts</li>
                <li>• Downloadable templates</li>
                <li>• Self-paced learning</li>
                <li>• Basic crisis protocols</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-navy text-lg">Community Members Also Get:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Weekly walkthroughs of each tool</li>
                <li>• Practice sessions with real scenarios</li>
                <li>• Custom application to your situation</li>
                <li>• Early access to new resources</li>
                <li>• Live Q&A about implementation</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/membership"
              className="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Learn About Community Membership →
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-navy mb-6">
            Want to be the first to know when the First Aid Kit launches?
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                Get Notified
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              No spam, just helpful resources and launch updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}