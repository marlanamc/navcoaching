'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'footer';
  className?: string;
}

export default function NewsletterSignup({ variant = 'default', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className={`${className} ${variant === 'footer' ? 'text-center' : 'bg-green-50 border border-green-200 rounded-lg p-4'}`}>
        <div className="flex items-center justify-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className={`font-semibold ${variant === 'footer' ? 'text-white' : 'text-green-800'}`}>
            Thanks for subscribing!
          </span>
        </div>
        <p className={`text-sm ${variant === 'footer' ? 'text-gray-300' : 'text-green-700'}`}>
          Check your inbox for a welcome message.
        </p>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-freshaqua/10 rounded-lg p-4 border border-freshaqua/30 ${className}`}>
        <h3 className="font-semibold text-navy mb-2">📧 Weekly ADHD Tips</h3>
        <p className="text-sm text-gray-600 mb-3">
          Get practical strategies delivered to your inbox every week.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-tealblue"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-freshaqua text-navy font-semibold rounded hover:bg-tealblue hover:text-white transition text-sm disabled:opacity-50"
          >
            {isSubmitting ? '...' : 'Join'}
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-2">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={className}>
        <h3 className="text-lg font-semibold mb-3 text-freshaqua">Weekly ADHD Tips</h3>
        <p className="text-gray-300 text-sm mb-4">
          Get practical strategies and insights delivered to your inbox every week.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-freshaqua text-sm"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 bg-freshaqua text-black font-semibold rounded hover:bg-white transition text-sm disabled:opacity-50"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-2">
          No spam, ever. Read our <Link href="/privacy" className="text-freshaqua underline">privacy policy</Link>.
        </p>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`bg-gradient-to-br from-freshaqua/20 to-tealblue/20 rounded-2xl shadow-lg p-8 border border-tealblue/30 text-center ${className}`}>
      <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">
        Get Weekly ADHD Tips & Strategies
      </h2>
      <p className="text-gray-700 mb-6 max-w-md mx-auto">
        Join hundreds of ADHD professionals and students getting practical tips that actually work for their brains.
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="flex gap-3 mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-tealblue transition"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-gradient-to-r from-freshaqua to-tealblue text-white font-bold rounded-lg shadow hover:shadow-lg transition disabled:opacity-50"
          >
            {isSubmitting ? '...' : 'Join'}
          </button>
        </div>
        <p className="text-sm text-gray-600">
          No spam, ever. Unsubscribe anytime.
        </p>
      </form>
      
      <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600">
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Weekly tips
        </span>
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          ADHD-focused
        </span>
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          No fluff
        </span>
      </div>
    </div>
  );
}