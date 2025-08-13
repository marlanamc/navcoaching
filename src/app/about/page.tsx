'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, BarChart3, User, Star } from 'lucide-react';
import TestimonialCarousel from '@/components/testimonials/TestimonialCarousel';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-playfair">
          Why Work With Me
        </h1>
      </div>
      
      {/* Main Story Section */}
      <section className="mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Photo and Quick Stats */}
              <div className="md:col-span-1">
                <div className="sticky top-8">
                  <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg mx-auto mb-4 bg-white p-2">
                    <img 
                      src="/me.png" 
                      alt="Marlie, ADHD coach and teacher with data background, smiling in professional headshot" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-navy mb-2">Marlie</h2>
                    <p className="text-sm text-gray-600 mb-4">Your ADHD Accountability Coach</p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center text-xs mb-6">
                    <span className="bg-ocean/10 text-navy px-3 py-1 rounded-full border border-ocean/20">Compassionate</span>
                    <span className="bg-ocean/10 text-navy px-3 py-1 rounded-full border border-ocean/20">Research-Based</span>
                    <span className="bg-ocean/10 text-navy px-3 py-1 rounded-full border border-ocean/20">Practical</span>
                    <span className="bg-ocean/10 text-navy px-3 py-1 rounded-full border border-ocean/20">Supportive</span>
                  </div>
                  
                  {/* Background */}
                  <div className="bg-tealblue/10 p-4 rounded-xl border border-tealblue/20 mb-4">
                    <h3 className="text-lg font-bold text-navy mb-3 font-playfair text-center">
                      Background
                    </h3>
                    <div className="text-sm text-gray-700 space-y-2">
                      <p><span className="font-semibold text-navy">Education:</span> BS/MS in Economics, Georgia Tech</p>
                      <div>
                        <span className="font-semibold text-navy">Experience:</span>
                        <ul className="list-disc list-inside ml-4 mt-1">
                          <li>Swim Coach</li>
                          <li>Server</li>
                          <li>Economics Research Analyst</li>
                          <li>Data Analyst</li>
                          <li>Data Engineer</li>
                          <li>ESOL Teacher</li>
                        </ul>
                        <div className="mt-2 p-2 bg-purple-50 border border-purple-200 rounded-lg">
                          <p className="text-gray-700 text-sm">If it involves teaching, problem-solving, or keeping calm under pressure, I've probably done it (and have a story to tell).</p>
                        </div>
                      </div>
                      <p><span className="font-semibold text-navy">Location:</span> Atlanta-born, Boston-based.</p>
                      <p><span className="font-semibold text-navy">When I'm not coaching:</span> Screaming at Atlanta sports teams through the TV, getting lost in period dramas, or wandering the Boston Harbor pretending I'm in one.</p>
                    </div>
                  </div>

                </div>
              </div>
              
              {/* Story and Approach */}
              <div className="md:col-span-2">
                <div className="bg-freshaqua/10 p-6 rounded-xl mb-6 border border-freshaqua/20">
                  <p className="mb-4 text-gray-700 text-lg">
                    <span className="font-bold text-navy">I live with ADHD.</span> I don't have it all figured out, I still get distracted, procrastinate, and have messy days. I was diagnosed as an adult, which meant years of mourning the "what ifs" and trying to figure out life without the structure I needed. I've tried every system out there, and most didn't stick. But I feel more clear and grounded than I ever have, because I stopped trying to "fix" myself and started building tools that fit my brain.
                  </p>
                  <p className="mb-4 text-gray-700 text-lg">
                    I've consumed hundreds of books, podcasts, and workbooks researching ADHD, not because I'm perfect at it now, but because I'm obsessed with finding what actually works in real life.
                  </p>
                  <p className="mb-4 text-gray-700 text-lg">
                    That's the energy I bring to my clients - whether you're frozen in place and don't know where to start, or running non-stop and burning out. We experiment, adapt, and keep moving together. I'll meet you where you are, celebrate wins that no one else sees, and help you get back up when things fall apart.
                  </p>
                  <p className="text-gray-700 text-lg font-semibold">
                    Absolutely no judgment. No shame. Just forward motion.
                  </p>
                </div>

                {/* What I Bring - After main story */}
                <div className="bg-white/90 p-6 rounded-xl mb-6 shadow-soft border border-gray-200">
                  <h3 className="text-xl font-bold text-navy mb-4 font-playfair">
                    What I Bring
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-ocean/5 p-4 rounded-lg border border-ocean/10">
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-navy mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">
                          <span className="font-semibold text-navy">Teaching:</span> I turn complex, intimidating work into steps so small you can't get stuck.
                        </p>
                      </div>
                    </div>
                    <div className="bg-ocean/5 p-4 rounded-lg border border-ocean/10">
                      <div className="flex items-start gap-3">
                        <BarChart3 className="h-5 w-5 text-navy mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">
                          <span className="font-semibold text-navy">Data & ops:</span> I spot patterns and design workflows that cut out wasted effort.
                        </p>
                      </div>
                    </div>
                    <div className="bg-ocean/5 p-4 rounded-lg border border-ocean/10">
                      <div className="flex items-start gap-3">
                        <User className="h-5 w-5 text-navy mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">
                          <span className="font-semibold text-navy">Lived experience:</span> I know the real blocks because I've hit them too — and I know how to move past them.
                        </p>
                      </div>
                    </div>
                    <div className="bg-ocean/5 p-4 rounded-lg border border-ocean/10">
                      <div className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-navy mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">
                          <span className="font-semibold text-navy">Results:</span> Clients finish projects, apply for jobs, pass classes, and start believing in themselves again.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-tealblue/10 p-6 rounded-xl border border-tealblue/20">
                  <h3 className="text-xl font-bold text-navy mb-4 font-playfair">
                    How We Work
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <span className="font-semibold text-navy">30-minute weekly call</span> (focused, action-oriented, and tailored to you)
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-navy">Personalized check-in texts</span> to keep you moving
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-navy">A shared Notion dashboard</span> so nothing gets lost
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-navy">An eight-level nautical system</span> we layer in at your pace — built to handle setbacks, overwhelm, and wins
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-navy mb-8 text-center font-playfair">
          Words from My Clients
        </h2>
        <TestimonialCarousel />
      </section>
      
      
      {/* CTA Section */}
      <section className="text-center py-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-navy mb-4">Ready to get started?</h3>
          <p className="text-gray-600 mb-6">Sign up for your $25 first session, then you'll receive a questionnaire to fill out before we meet.</p>
          <a 
            href="https://cal.com/navcoaching/first-session" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn cta px-10 py-4 bg-ocean text-white font-bold rounded-lg shadow-lg hover:bg-tealblue transition hover-lift text-lg"
          >
            Sign Up for $25 First Session
          </a>
          <p className="text-sm text-gray-500 mt-3">Then $50/week • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
}