'use client';

import React from 'react';
import Link from 'next/link';

export default function MembersOnly() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-8 content-card">
          <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-6">
            Members Only
          </h1>
          
          <div className="mb-8">
            <p className="text-navy text-lg mb-4">
              This area is exclusively for members of our ADHD community.
            </p>
            <p className="text-navy mb-6">
              Please sign in to access your personalized dashboard, worksheets, and body doubling sessions.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              href="/members"
              className="btn px-8 py-3 bg-tealblue text-white font-bold rounded-lg shadow-soft hover:bg-opacity-90 transition hover-lift inline-block"
            >
              Sign In
            </Link>
            
            <div className="mt-6">
              <p className="text-navy mb-2">Not a member yet?</p>
              <Link
                href="/"
                className="text-tealblue hover:text-navy font-semibold transition-colors"
              >
                Learn more about joining our community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 