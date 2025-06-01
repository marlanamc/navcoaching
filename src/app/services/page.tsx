import React from 'react'
import { VideoCameraIcon, ClipboardDocumentCheckIcon, UsersIcon, BellAlertIcon } from '@heroicons/react/24/solid'

const AnchorBullet = () => (
  <svg
    className="inline-block w-5 h-5 text-coral mr-2 -mt-1"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M10 2a1 1 0 011 1v7a1 1 0 11-2 0V3a1 1 0 011-1zm-4.293 9.293a1 1 0 011.414 0l.293.293V13a4 4 0 008 0v-1.414l.293-.293a1 1 0 111.414 1.414l-1 1A1 1 0 0115 14v1a6 6 0 01-12 0v-1a1 1 0 01.293-.707l1-1a1 1 0 011.414 0z" />
  </svg>
);

const Bullet = () => (
  <span
    className="inline-block w-2 h-2 rounded-full bg-coral mr-3 align-middle"
    aria-hidden="true"
  />
);

export default function Services() {
  return (
    <main className="min-h-screen flex flex-col items-center py-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-ocean">What You Get</h1>
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Video Coaching */}
        <div className="bg-aqua rounded-2xl p-6 flex flex-col items-center shadow-lg">
          <VideoCameraIcon className="h-10 w-10 text-coral mb-2" />
          <h2 className="text-xl font-bold mb-2 text-ocean">Video Coaching</h2>
          <ul className="text-ocean text-base font-medium space-y-1 mb-4">
            <li><Bullet />One 60-min deep dive per month</li>
            <li><Bullet />Weekly 30-min video check-ins</li>
            <li><Bullet />Weekly experiements to help you stay on track</li>
          </ul>
        </div>
        {/* Private Dashboard */}
        <div className="bg-lavender rounded-2xl p-6 flex flex-col items-center shadow-lg">
          <ClipboardDocumentCheckIcon className="h-10 w-10 text-coral mb-2" />
          <h2 className="text-xl font-bold mb-2 text-ocean">Private Dashboard</h2>
          <ul className="text-ocean text-base font-medium space-y-1 mb-4">
            <li><Bullet />Brainstorming space</li>
            <li><Bullet />Session notes</li>
            <li><Bullet />Progress tracking</li>
          </ul>
        </div>
        {/* Body Doubling */}
        <div className="bg-sand rounded-2xl p-6 flex flex-col items-center shadow-lg">
          <UsersIcon className="h-10 w-10 text-coral mb-2" />
          <h2 className="text-xl font-bold mb-2 text-ocean">Weekly Body Doubling</h2>
          <ul className="text-ocean text-base font-medium space-y-1 mb-4">
            <li><Bullet />Join virtual coworking sessions</li>
            <li><Bullet />Camera on optional!</li>
            <li><Bullet />Work alongside others with ADHD</li>
          </ul>
        </div>
        {/* Text Nudges */}
        <div className="bg-palepurple rounded-2xl p-6 flex flex-col items-center shadow-lg">
          <BellAlertIcon className="h-10 w-10 text-coral mb-2" />
          <h2 className="text-xl font-bold mb-2 text-ocean">Text Nudges</h2>
          <ul className="text-ocean text-base font-medium space-y-1 mb-4">
            <li><Bullet />Gentle reminders for important events</li>
            <li><Bullet />Supportive check-ins</li>
            <li><Bullet />Stay on track, your way</li>
          </ul>
        </div>
      </section>
    </main>
  )
} 