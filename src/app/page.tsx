'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import LegalDisclaimer from '@/components/common/LegalDisclaimer';

export default function Home() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'whoItsFor';

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section with Logo and Title */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="Navigating the Storm Logo"
            width={200}
            height={200}
            className="object-contain mb-6"
            priority
          />
          <h1 className="text-5xl md:text-6xl font-bold text-navy font-playfair mb-4 text-center">
            Navigating the Storm
          </h1>
          <h2 className="text-2xl md:text-3xl text-deepteal font-semibold font-sans text-center max-w-2xl">
            Follow-through coaching for ADHD brains
          </h2>
        </div>
      </div>


      {/* Services Highlights */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-navy mb-8 text-center font-playfair">
          Your Personal <span className="text-ocean">Navigation System</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primary: Weekly Coaching */}
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-soft content-card md:col-span-2">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-softblue rounded-full flex items-center justify-center animated-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-3 text-center">Weekly Coaching</h3>
            <ul className="space-y-3 max-w-2xl mx-auto">
              <li className="flex items-start">
                <span className="text-tealblue mr-2">•</span>
                <span>One 60-min deep dive per month</span>
              </li>
              <li className="flex items-start">
                <span className="text-tealblue mr-2">•</span>
                <span>Weekly 30-min video check-ins</span>
              </li>
              <li className="flex items-start">
                <span className="text-tealblue mr-2">•</span>
                <span>Weekly experiments to help you stay on track</span>
              </li>
            </ul>
          </div>
          {/* Secondary: Private Dashboard */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-soft content-card">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-softblue rounded-full flex items-center justify-center animated-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2 text-center">Private Dashboard</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-tealblue mr-2">•</span>
                <span>Brainstorming space</span>
              </li>
              <li className="flex items-start">
                <span className="text-tealblue mr-2">•</span>
                <span>Session notes</span>
              </li>
              <li className="flex items-start">
                <span className="text-tealblue mr-2">•</span>
                <span>Progress tracking</span>
              </li>
            </ul>
          </div>
          {/* Secondary: Weekly Body Doubling */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-soft content-card">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-softblue rounded-full flex items-center justify-center animated-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2 text-center">Weekly Body Doubling</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-tealblue mr-2">•</span>
                <span>Join virtual coworking sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-tealblue mr-2">•</span>
                <span>Camera on optional!</span>
              </li>
              <li className="flex items-start">
                <span className="text-tealblue mr-2">•</span>
                <span>Work alongside others with ADHD</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Who It's For + How It Works (condensed) */}
      <section className="mb-12">
        <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-soft content-card p-6">
          <h3 className="text-2xl font-bold text-navy mb-4 font-playfair text-center">This is for you if…</h3>
          <ul className="grid grid-cols-1 gap-3 mb-6">
            <li className="flex items-start"><span className="text-tealblue mr-2">•</span><span>You’ve tried apps and planners, but nothing sticks</span></li>
            <li className="flex items-start"><span className="text-tealblue mr-2">•</span><span>Task overwhelm makes it hard to start or finish</span></li>
            <li className="flex items-start"><span className="text-tealblue mr-2">•</span><span>You want structure without shame—and human accountability</span></li>
          </ul>
          <div className="text-center text-navy">
            <p className="font-semibold">How it works: <span className="font-normal">Free consult → Personalized plan → Weekly check-ins</span></p>
          </div>
        </div>
      </section>

      {/* Quiz CTA removed */}
      
      {/* Testimonials Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-navy mb-8 text-center font-playfair">
          Success <span className="text-tealblue">Stories</span>
        </h2>
        
        <div className="max-w-2xl mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-soft content-card">
          <p className="text-center text-lg italic mb-4">
            "Working with Marlie has been transformative. For the first time, I have accountability that actually works for my ADHD brain. I've accomplished more in three months than in the previous year!"
          </p>
          <div className="flex justify-center items-center">
            <div className="w-10 h-10 bg-freshaqua rounded-full flex items-center justify-center mr-3">
              <span className="text-navy font-bold">JT</span>
            </div>
            <div>
              <p className="font-bold text-navy">Jamie T.</p>
              <p className="text-sm text-gray-600">Graduate Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust row */}
      <section className="mb-10">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-4 text-navy">Private, judgment-free</div>
          <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-4 text-navy">Flexible scheduling</div>
          <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-4 text-navy">Cancel anytime</div>
        </div>
      </section>
      
      {/* Legal Disclaimer moved to footer */}
      
      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-navy mb-6 font-playfair">
          Ready to Navigate Your Storm?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Take the first step toward structured support that meets you where you are—and helps you get where you want to go.
        </p>
        <div className="flex justify-center">
          <a 
            href="https://calendly.com/marlie-navcoaching/initial" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn cta px-8 py-3 bg-freshaqua text-navy font-bold rounded-lg shadow-soft hover:bg-tealblue hover:text-white transition hover-lift text-lg"
          >
            Book a Free Consultation
          </a>
        </div>
        <p className="mt-4 text-navy">
          Already a member? <Link href="/signin" className="text-tealblue underline hover:text-navy">Sign in</Link>
        </p>
      </section>
    </div>
  );
}
