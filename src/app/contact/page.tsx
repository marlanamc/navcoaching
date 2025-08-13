'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-freshaqua/20 to-tealblue/20 rounded-2xl shadow-lg p-8 border border-tealblue/30">
            <div className="w-20 h-20 bg-freshaqua rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-navy mb-4 font-playfair">Message Sent! 🎉</h1>
            <p className="text-lg text-gray-700 mb-6">
              Thanks for reaching out! I'll get back to you within 24 hours.
            </p>
            <p className="text-gray-600 mb-8">
              Ready to get started right away? Book your first session below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/marlie-navcoaching/initial" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-freshaqua to-tealblue text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                Book Your First Session
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
      </main>
    );
  }

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-playfair">
            Let's Connect
          </h1>
          <p className="text-xl text-deepteal max-w-2xl mx-auto">
            Have questions about ADHD coaching? Want to know if we're a good fit? Just say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/90 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-navy mb-6 font-playfair">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-navy font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What should I call you?"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-tealblue transition text-navy"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-navy font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-tealblue transition text-navy"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-navy font-semibold mb-2">
                  What are you reaching out about?
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-tealblue transition text-navy bg-white"
                  required
                >
                  <option value="">Select a topic...</option>
                  <option value="initial-consultation">Initial Consultation - Ready to Start</option>
                  <option value="questions-services">Questions About Services</option>
                  <option value="scheduling">Scheduling or Availability</option>
                  <option value="pricing">Pricing and Payment Options</option>
                  <option value="adhd-fit">Is This Right for My ADHD?</option>
                  <option value="technical">Technical Issues or Dashboard Help</option>
                  <option value="partnership">Partnership or Collaboration</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-navy font-semibold mb-2">
                  Tell me more
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your ADHD challenges, goals, or any questions you have about coaching..."
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-tealblue transition text-navy resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-freshaqua to-tealblue text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message 📤'}
              </button>
            </form>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="bg-gradient-to-br from-freshaqua/10 to-tealblue/10 rounded-2xl p-8 border border-tealblue/20">
              <h3 className="text-xl font-bold text-navy mb-4 font-playfair">Prefer Direct Contact?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-freshaqua rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Email</p>
                    <a href="mailto:marlie@navcoaching.org" className="text-navy hover:text-tealblue transition font-medium">
                      marlie@navcoaching.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-tealblue rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Response Time</p>
                    <p className="text-navy">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Start */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-navy mb-4 font-playfair">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Skip the back-and-forth and book your first session directly. We'll cover your goals, challenges, and set up your personal dashboard.
              </p>
              
              <a 
                href="https://calendly.com/marlie-navcoaching/initial" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-4 px-6 bg-gradient-to-r from-freshaqua to-tealblue text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                📅 Book Your First Session
              </a>
              
              <p className="text-xs text-gray-500 mt-3 text-center">
                45 minutes • Goal-setting included
              </p>
            </div>

            {/* FAQ Preview */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-navy mb-4">Common Questions</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-navy">What happens in the first session?</p>
                  <p className="text-gray-600">We'll talk about your goals and challenges, then set up your personal Notion dashboard.</p>
                </div>
                <div>
                  <p className="font-semibold text-navy">How flexible is scheduling?</p>
                  <p className="text-gray-600">Very! We work around your energy levels and life demands.</p>
                </div>
              </div>
              <Link href="/about" className="text-tealblue hover:text-navy text-sm font-semibold mt-3 inline-block">
                More questions? Learn about my approach →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}