import React from 'react'
import Link from 'next/link'
import { VideoCameraIcon, ClipboardDocumentCheckIcon, UsersIcon, BellAlertIcon } from '@heroicons/react/24/solid'

const Bullet = () => (
  <span
    className="inline-block w-2 h-2 rounded-full bg-coral mr-3 align-middle"
    aria-hidden="true"
  />
);

export default function Services() {
  return (
    <main className="min-h-screen flex flex-col items-center py-12 px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-ocean font-playfair">Your ADHD Success Toolkit</h1>
        <p className="text-xl text-center mb-12 text-navy max-w-2xl mx-auto">
          Personalized coaching and support designed specifically for ADHD brains. 
          Choose the combination of services that works best for you.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Video Coaching */}
          <div className="bg-white bg-opacity-90 rounded-2xl p-8 flex flex-col shadow-soft hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <VideoCameraIcon className="h-8 w-8 text-coral mr-3" />
              <h2 className="text-2xl font-bold text-ocean font-playfair">Video Coaching</h2>
            </div>
            <p className="text-navy mb-4">Deep dive sessions and regular check-ins to keep you on track.</p>
            <ul className="text-navy space-y-3 mb-6">
              <li className="flex items-start">
                <Bullet />
                <span>60-minute strategy sessions</span>
              </li>
              <li className="flex items-start">
                <Bullet />
                <span>Weekly 30-minute check-ins</span>
              </li>
              <li className="flex items-start">
                <Bullet />
                <span>Personalized action plans</span>
              </li>
            </ul>
          </div>

          {/* Private Dashboard */}
          <div className="bg-white bg-opacity-90 rounded-2xl p-8 flex flex-col shadow-soft hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <ClipboardDocumentCheckIcon className="h-8 w-8 text-coral mr-3" />
              <h2 className="text-2xl font-bold text-ocean font-playfair">Private Dashboard</h2>
            </div>
            <p className="text-navy mb-4">Your personal command center for tracking progress and staying organized.</p>
            <ul className="text-navy space-y-3 mb-6">
              <li className="flex items-start">
                <Bullet />
                <span>Custom Notion workspace</span>
              </li>
              <li className="flex items-start">
                <Bullet />
                <span>Progress tracking tools</span>
              </li>
              <li className="flex items-start">
                <Bullet />
                <span>Resource library access</span>
              </li>
            </ul>
          </div>

          {/* Body Doubling */}
          <div className="bg-white bg-opacity-90 rounded-2xl p-8 flex flex-col shadow-soft hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <UsersIcon className="h-8 w-8 text-coral mr-3" />
              <h2 className="text-2xl font-bold text-ocean font-playfair">Body Doubling</h2>
            </div>
            <p className="text-navy mb-4">Virtual coworking sessions to boost your productivity and focus.</p>
            <ul className="text-navy space-y-3 mb-6">
              <li className="flex items-start">
                <Bullet />
                <span>Weekly group sessions</span>
              </li>
              <li className="flex items-start">
                <Bullet />
                <span>Camera optional</span>
              </li>
              <li className="flex items-start">
                <Bullet />
                <span>ADHD-friendly environment</span>
              </li>
            </ul>
          </div>

          {/* Text Support */}
          <div className="bg-white bg-opacity-90 rounded-2xl p-8 flex flex-col shadow-soft hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <BellAlertIcon className="h-8 w-8 text-coral mr-3" />
              <h2 className="text-2xl font-bold text-ocean font-playfair">Text Support</h2>
            </div>
            <p className="text-navy mb-4">Gentle reminders and support when you need it most.</p>
            <ul className="text-navy space-y-3 mb-6">
              <li className="flex items-start">
                <Bullet />
                <span>Custom reminder system</span>
              </li>
              <li className="flex items-start">
                <Bullet />
                <span>Quick check-ins</span>
              </li>
              <li className="flex items-start">
                <Bullet />
                <span>24/7 support access</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-6 font-playfair">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-navy">
            Choose the package that best fits your needs and start your journey to better productivity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/services#pricing" 
              className="btn px-8 py-3 bg-coral text-white font-bold rounded-lg shadow-soft hover:bg-opacity-90 transition hover-lift text-lg"
            >
              View Pricing
            </Link>
            <Link 
              href="/contact" 
              className="btn cta px-8 py-3 bg-freshaqua text-navy font-bold rounded-lg shadow-soft hover:bg-tealblue hover:text-white transition hover-lift text-lg"
            >
              Book a Free Consultation
            </Link>
          </div>
        </section>

        {/* Pricing embedded */}
        <section id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center font-playfair">Coaching Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Voyage */}
            <div className="bg-white bg-opacity-90 rounded-lg shadow-soft overflow-hidden content-card">
              <div className="bg-softblue p-6">
                <h3 className="text-2xl font-bold text-navy mb-1 font-playfair">First Voyage</h3>
                <p className="text-navy">Perfect for getting started</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-navy">$299</span>
                  <span className="text-navy ml-2">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6 text-navy">
                  <li className="flex items-start"><Bullet /><span>2 coaching sessions per month</span></li>
                  <li className="flex items-start"><Bullet /><span>Weekly text check-ins</span></li>
                  <li className="flex items-start"><Bullet /><span>Personal Notion dashboard</span></li>
                </ul>
                <Link href="/contact" className="block w-full py-3 px-4 bg-ocean text-white text-center font-bold rounded-lg shadow hover:bg-opacity-90 transition hover-lift">Get Started</Link>
              </div>
            </div>
            {/* Steady Course */}
            <div className="bg-white bg-opacity-90 rounded-lg shadow-soft overflow-hidden content-card">
              <div className="bg-ocean p-6 text-white">
                <h3 className="text-2xl font-bold mb-1 font-playfair">Steady Course</h3>
                <p>Comprehensive support</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$399</span>
                  <span className="ml-2">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6 text-navy">
                  <li className="flex items-start"><Bullet /><span>4 coaching sessions per month</span></li>
                  <li className="flex items-start"><Bullet /><span>Unlimited text check-ins</span></li>
                  <li className="flex items-start"><Bullet /><span>Weekly body doubling sessions</span></li>
                </ul>
                <Link href="/contact" className="block w-full py-3 px-4 bg-coral text-white text-center font-bold rounded-lg shadow hover:bg-opacity-90 transition hover-lift">Get Started</Link>
              </div>
            </div>
            {/* Full Journey */}
            <div className="bg-white bg-opacity-90 rounded-lg shadow-soft overflow-hidden content-card">
              <div className="bg-tealblue p-6 text-white">
                <h3 className="text-2xl font-bold mb-1 font-playfair">Full Journey</h3>
                <p>Maximum accountability</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$599</span>
                  <span className="ml-2">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6 text-navy">
                  <li className="flex items-start"><Bullet /><span>6 coaching sessions per month</span></li>
                  <li className="flex items-start"><Bullet /><span>Daily text check-ins</span></li>
                  <li className="flex items-start"><Bullet /><span>Priority scheduling</span></li>
                </ul>
                <Link href="/contact" className="block w-full py-3 px-4 bg-tealblue text-white text-center font-bold rounded-lg shadow hover:bg-opacity-90 transition hover-lift">Get Started</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center font-playfair">What My Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-soft">
              <p className="text-navy italic mb-4">"Marlie's coaching has been a game-changer for my productivity. The combination of video sessions and text support keeps me accountable in a way that works for my ADHD brain."</p>
              <p className="font-bold text-ocean">- Sarah K.</p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-soft">
              <p className="text-navy italic mb-4">"The body doubling sessions are incredible! I've never been so productive. Having someone there to keep me on track makes all the difference."</p>
              <p className="font-bold text-ocean">- Michael T.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 