'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TestimonialCarousel from '@/components/testimonials/TestimonialCarousel';
import LegalDisclaimer from '@/components/common/LegalDisclaimer';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-playfair text-center">
        About <span className="text-coral">Navigating the Storm</span>
      </h1>
      
      {/* About the Coach Section */}
      <section className="mb-16">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-soft content-card">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-freshaqua shadow-soft mx-auto">
                  <img 
                    src="/coach-profile.jpg" 
                    alt="Marlie - ADHD Accountability Coach" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-coral text-white px-4 py-2 rounded-lg shadow-soft">
                  Your Guide
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">
                Hi, I'm Marlie
              </h2>
              <p className="mb-4">
                As someone who has navigated the challenges of ADHD throughout my life, I understand firsthand the frustration of trying to stay productive when your brain works differently. Traditional productivity systems often fail us, and that's where personalized accountability coaching comes in.
              </p>
              <p className="mb-4">
                With a background in data analysis, teaching, and coaching, I combine structured support with empathy and flexibility. My approach fills the gap between therapy and medication, helping you actually follow through on what matters most.
              </p>
              <p className="mb-6">
                I'm not here to "fix" you—your brain isn't broken. I'm here to help you build systems that work <em>with</em> your unique brain, not against it. Together, we'll navigate the storm of overwhelm and create calm, productive waters.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-freshaqua bg-opacity-20 px-4 py-2 rounded-full">
                  <span className="font-bold">Data Analysis</span>
                </div>
                <div className="bg-freshaqua bg-opacity-20 px-4 py-2 rounded-full">
                  <span className="font-bold">Teaching</span>
                </div>
                <div className="bg-freshaqua bg-opacity-20 px-4 py-2 rounded-full">
                  <span className="font-bold">ADHD Lived Experience</span>
                </div>
                <div className="bg-freshaqua bg-opacity-20 px-4 py-2 rounded-full">
                  <span className="font-bold">Productivity Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* My Approach Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-navy mb-8 text-center font-playfair">
          My <span className="text-coral">Approach</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-soft content-card">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-softblue rounded-full flex items-center justify-center animated-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2 text-center">The Lighthouse</h3>
            <p className="text-center mb-4">
              Providing clarity and direction when you feel lost in the fog of overwhelm and indecision.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-coral mr-2">•</span>
                <span>Clear goal-setting</span>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-2">•</span>
                <span>Vision alignment</span>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-2">•</span>
                <span>Priority identification</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-soft content-card">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-softblue rounded-full flex items-center justify-center animated-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2 text-center">The Compass</h3>
            <p className="text-center mb-4">
              Creating personalized systems that work with your unique brain, not against it.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-coral mr-2">•</span>
                <span>Custom workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-2">•</span>
                <span>Habit building</span>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-2">•</span>
                <span>Strength-based strategies</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-soft content-card">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-softblue rounded-full flex items-center justify-center animated-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2 text-center">The Anchor</h3>
            <p className="text-center mb-4">
              Providing the human accountability that apps and planners alone can't deliver.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-coral mr-2">•</span>
                <span>Consistent check-ins</span>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-2">•</span>
                <span>Judgment-free accountability</span>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-2">•</span>
                <span>Adaptive support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Important Note Section */}
      <section className="mb-16">
        <div className="bg-navy p-8 rounded-lg shadow-soft text-white">
          <h2 className="text-2xl font-bold mb-4 font-playfair text-freshaqua">
            Important Note About My Services
          </h2>
          <p className="mb-4">
            My coaching services are designed to fill the gap between therapy and medication, providing practical support for goal achievement and productivity. I help you implement strategies and build accountability systems that work for your unique brain.
          </p>
          <p className="mb-4">
            <strong className="text-coral">However, I am not a therapist or healthcare provider.</strong> My services are not therapy, medical treatment, or mental health services. I do not diagnose, treat, or cure any medical or psychological conditions.
          </p>
          <p>
            If you're experiencing mental health concerns, please consult with qualified healthcare providers. My coaching works best as a complement to appropriate medical care, not a replacement for it.
          </p>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-navy mb-8 text-center font-playfair">
          Client <span className="text-coral">Success Stories</span>
        </h2>
        
        <TestimonialCarousel />
      </section>
      
      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-navy mb-6 font-playfair">
          Ready to Navigate Your Storm?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's work together to create systems that help you thrive with your unique brain.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/services#pricing" 
            className="btn px-8 py-3 bg-coral text-white font-bold rounded-lg shadow-soft hover:bg-opacity-90 transition hover-lift text-lg"
          >
            View Pricing Options
          </Link>
          <Link 
            href="/contact" 
            className="btn cta px-8 py-3 bg-freshaqua text-navy font-bold rounded-lg shadow-soft hover:bg-tealblue hover:text-white transition hover-lift text-lg"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
      
      {/* Legal Disclaimer */}
      <div className="mt-16">
        <LegalDisclaimer />
      </div>
    </div>
  );
}
