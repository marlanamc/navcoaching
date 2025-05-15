'use client';

import React from 'react'
import { EnvelopeIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-8">
      <section className="w-full max-w-xl bg-ocean rounded-2xl shadow-lg p-8 mb-8 text-center">
        <EnvelopeIcon className="h-10 w-10 mx-auto text-coral mb-2" />
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-sand">Let's Connect!</h1>
        <p className="text-lg text-aqua font-semibold mb-4">Short, sweet, and judgment-free. Reach out below!</p>
        <form className="space-y-4 mt-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full rounded-lg border-0 p-3 text-ocean bg-sand placeholder-ocean focus:ring-2 focus:ring-aqua"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-lg border-0 p-3 text-ocean bg-sand placeholder-ocean focus:ring-2 focus:ring-aqua"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="How can I help?"
            className="w-full rounded-lg border-0 p-3 text-ocean bg-sand placeholder-ocean focus:ring-2 focus:ring-aqua"
          />
          <button type="submit" className="btn cta w-full py-3 text-lg mt-2">
            Send Message
          </button>
        </form>
      </section>
      <section className="w-full max-w-xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-aqua rounded-xl p-4 flex flex-col items-center text-center">
          <EnvelopeIcon className="h-7 w-7 text-coral mb-1" />
          <span className="font-bold text-ocean">Email</span>
          <a href="mailto:hello@navcoaching.org" className="text-coral underline">hello@navcoaching.org</a>
        </div>
        <div className="bg-lavender rounded-xl p-4 flex flex-col items-center text-center">
          <CalendarDaysIcon className="h-7 w-7 text-coral mb-1" />
          <span className="font-bold text-ocean">Book a Free Consult</span>
          <a href="#" className="text-ocean underline">Schedule Now</a>
        </div>
      </section>
    </main>
  )
} 