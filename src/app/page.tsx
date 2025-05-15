import React from 'react'
import { SparklesIcon, UserGroupIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      {/* Business Title */}
      <div className="w-full max-w-3xl text-center mb-2 mt-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-coral tracking-tight mb-2">
          Navigating the Storm
        </h1>
        <p className="text-xl sm:text-2xl text-aqua font-semibold">
          Accountability Coaching with Marlie
        </p>
      </div>
      {/* Hero Section */}
      <section className="w-full max-w-3xl bg-ocean rounded-2xl shadow-lg p-8 mb-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-sand">Gentle Structure. Real Progress.</h2>
        <p className="text-lg sm:text-xl text-aqua mb-6 font-semibold">Coaching that meets you where you are.</p>
        <button className="btn px-8 py-3 text-lg shadow-lg cta" type="button">
          Book a Free Consultation
        </button>
      </section>

      {/* What I Offer */}
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-aqua rounded-xl p-6 flex flex-col items-center">
          <SparklesIcon className="h-8 w-8 text-coral mb-2" />
          <h2 className="text-xl font-bold mb-2 text-ocean">Weekly Coaching</h2>
          <ul className="text-ocean text-base font-medium space-y-1">
            <li>Quick check-ins</li>
            <li>Action steps</li>
            <li>Zero shame</li>
          </ul>
        </div>
        <div className="bg-lavender rounded-xl p-6 flex flex-col items-center">
          <UserGroupIcon className="h-8 w-8 text-coral mb-2" />
          <h2 className="text-xl font-bold mb-2 text-ocean">Personalized Dashboard</h2>
          <ul className="text-ocean text-base font-medium space-y-1">
            <li>Notion setup</li>
            <li>Track wins</li>
            <li>See progress</li>
          </ul>
        </div>
        <div className="bg-sand rounded-xl p-6 flex flex-col items-center">
          <CheckCircleIcon className="h-8 w-8 text-coral mb-2" />
          <h2 className="text-xl font-bold mb-2 text-ocean">Gentle Reminders</h2>
          <ul className="text-ocean text-base font-medium space-y-1">
            <li>Supportive nudges</li>
            <li>Celebrate wins</li>
            <li>Stay on track</li>
          </ul>
        </div>
      </section>

      {/* Who It's For & How It Works */}
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-lavender rounded-xl p-6 text-ocean">
          <h2 className="text-2xl font-bold mb-2">Who It's For</h2>
          <ul className="space-y-2 text-lg">
            <li>✨ ADHD brains</li>
            <li>🎨 Overwhelmed creatives</li>
            <li>🧠 Anyone craving structure (without shame!)</li>
          </ul>
        </div>
        <div className="bg-ocean rounded-xl p-6 text-sand">
          <h2 className="text-2xl font-bold mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            <li>Free consult</li>
            <li>90-min intake</li>
            <li>Weekly support + check-ins</li>
          </ol>
        </div>
      </section>
    </main>
  )
} 