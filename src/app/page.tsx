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
            Accountability Coaching with Marlie
          </h2>
        </div>
      </div>


      {/* Services Highlights */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-navy mb-8 text-center font-playfair">
          Your Personal <span className="text-ocean">Navigation System</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-soft content-card">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-softblue rounded-full flex items-center justify-center animated-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2 text-center">Weekly Coaching</h3>
            <ul className="space-y-2">
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
      
      {/* Who It's For / How It Works */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-soft overflow-hidden content-card">
          <div className="flex border-b border-gray-200">
            <Link
              href="?tab=whoItsFor"
              className={`flex-1 py-3 px-4 text-center font-bold ${
                activeTab === 'whoItsFor' ? 'bg-freshaqua text-navy' : 'bg-white text-navy hover:bg-gray-50'
              }`}
            >
              Who It's For
            </Link>
            <Link
              href="?tab=howItWorks"
              className={`flex-1 py-3 px-4 text-center font-bold ${
                activeTab === 'howItWorks' ? 'bg-freshaqua text-navy' : 'bg-white text-navy hover:bg-gray-50'
              }`}
            >
              How It Works
            </Link>
          </div>
          
          <div className="p-6">
            {activeTab === 'whoItsFor' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy mb-3 font-playfair">
                  This is for you if...
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-tealblue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-navy">You've tried <strong>every app and planner</strong> but nothing sticks</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-tealblue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-navy">You're <strong>overwhelmed by tasks</strong> and don't know where to start</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-tealblue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-navy">You need <strong>human accountability</strong> to follow through</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-tealblue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-navy">You're looking for <strong>structure without shame</strong> or judgment</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-tealblue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-navy">You want to <strong>bridge the gap</strong> between therapy/medication and real-world progress</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'howItWorks' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy mb-3 font-playfair">
                  Your Coaching Journey
                </h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ocean text-white flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-navy">Free Consultation</h4>
                      <p className="text-navy">We'll discuss your challenges, goals, and whether we're a good fit.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ocean text-white flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-navy">Personalized Plan</h4>
                      <p className="text-navy">Together, we'll create a coaching plan tailored to your specific needs.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ocean text-white flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-navy">Regular Check-ins</h4>
                      <p className="text-navy">Weekly video sessions keep you accountable and help adjust strategies as needed.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ocean text-white flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-navy">Ongoing Support</h4>
                      <p className="text-navy">Text check-ins, body doubling sessions, and your private dashboard provide continuous support.</p>
                    </div>
                  </li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quiz CTA removed */}
      
      {/* Testimonials Section */}
      <section className="mb-16">
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

      {/* AI Tools section removed */}
      
      {/* Legal Disclaimer */}
      <div className="max-w-3xl mx-auto mb-12">
        <LegalDisclaimer />
      </div>
      
      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-navy mb-6 font-playfair">
          Ready to Navigate Your Storm?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Take the first step toward structured support that meets you where you are—and helps you get where you want to go.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/signin" 
            className="btn px-8 py-3 bg-tealblue text-white font-bold rounded-lg shadow-soft hover:bg-opacity-90 transition hover-lift text-lg"
          >
            Sign In
          </Link>
          <Link 
            href="/contact" 
            className="btn cta px-8 py-3 bg-freshaqua text-navy font-bold rounded-lg shadow-soft hover:bg-tealblue hover:text-white transition hover-lift text-lg"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
