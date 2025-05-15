import React from 'react'
import { CalendarIcon, ChatBubbleLeftRightIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid'

export default function Services() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-ocean">How I Can Help</h1>
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-aqua rounded-2xl p-6 flex flex-col items-center shadow-lg">
          <CalendarIcon className="h-10 w-10 text-coral mb-2" />
          <h2 className="text-xl font-bold mb-2 text-ocean">Free 15-Min Consult</h2>
          <p className="text-ocean text-base font-medium mb-4">Quick, no-pressure call to see if we vibe.</p>
          <a href="/contact" className="btn cta px-6 py-2">Book a Free Consultation</a>
        </div>
        <div className="bg-lavender rounded-2xl p-6 flex flex-col items-center shadow-lg">
          <ChatBubbleLeftRightIcon className="h-10 w-10 text-coral mb-2" />
          <h2 className="text-xl font-bold mb-2 text-ocean">1:1 Weekly Coaching</h2>
          <ul className="text-ocean text-base font-medium space-y-1 mb-4">
            <li>90-min deep dive</li>
            <li>Weekly 30-min calls</li>
            <li>Text nudges</li>
          </ul>
          <a href="/contact" className="btn cta px-6 py-2">Book a Free Consultation</a>
        </div>
        <div className="bg-sand rounded-2xl p-6 flex flex-col items-center shadow-lg">
          <ClipboardDocumentCheckIcon className="h-10 w-10 text-coral mb-2" />
          <h2 className="text-xl font-bold mb-2 text-ocean">Client Dashboard</h2>
          <ul className="text-ocean text-base font-medium space-y-1 mb-4">
            <li>Private Notion space</li>
            <li>Habit tracker</li>
            <li>Session notes</li>
          </ul>
          <a href="/contact" className="btn cta px-6 py-2">Book a Free Consultation</a>
        </div>
      </section>
    </main>
  )
} 