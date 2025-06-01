import React from 'react'
import { SparklesIcon, UserGroupIcon, CheckCircleIcon, UserIcon, ArrowPathIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Banner Image - Full Bleed */}
      <div className="w-full relative" style={{height: '320px'}}>
        <Image
          src="/banner.png"
          alt="Navigating the Storm Coaching"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Hero Section */}
      <section className="w-full max-w-3xl bg-softblue rounded-2xl shadow-lg p-8 mb-8 text-center mt-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-navy">Gentle Structure. Real Progress.</h2>
        <p className="text-lg sm:text-xl text-navy mb-6 font-semibold">Coaching that meets you where you are.</p>
        <button className="bg-mutedpink hover:bg-palepurple text-navy px-8 py-3 text-lg shadow-lg rounded-lg transition-colors" type="button">
          Book a Free Consultation
        </button>
      </section>

      {/* What I Offer */}
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-freshaqua rounded-xl p-6 flex flex-col items-center group relative overflow-hidden min-h-[180px]">
          <SparklesIcon className="h-8 w-8 text-navy mb-2" />
          <h2 className="text-xl font-bold mb-2 text-navy text-center">Weekly Coaching</h2>
          <ul className="text-navy text-base font-medium space-y-1 absolute inset-0 bg-freshaqua p-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li>Quick check-ins</li>
            <li>Action steps</li>
            <li>Zero shame</li>
          </ul>
        </div>
        <div className="bg-lavenderblue rounded-xl p-6 flex flex-col items-center group relative overflow-hidden min-h-[180px]">
          <UserGroupIcon className="h-8 w-12 text-navy mb-2" />
          <h2 className="text-xl font-bold mb-2 text-navy text-center">Personalized Dashboard</h2>
          <ul className="text-navy text-base font-medium space-y-1 absolute inset-0 bg-lavenderblue p-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li>Notion setup</li>
            <li>Track wins</li>
            <li>See progress</li>
          </ul>
        </div>
        <div className="bg-softcream rounded-xl p-6 flex flex-col items-center group relative overflow-hidden min-h-[180px]">
          <CheckCircleIcon className="h-8 w-8 text-navy mb-2" />
          <h2 className="text-xl font-bold mb-2 text-navy text-center">Gentle Reminders</h2>
          <ul className="text-navy text-base font-medium space-y-1 absolute inset-0 bg-softcream p-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li>Supportive nudges</li>
            <li>Celebrate wins</li>
            <li>Stay on track</li>
          </ul>
        </div>
      </section>

      {/* Who It's For & How It Works */}
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-palepurple rounded-xl p-6 text-navy group relative overflow-hidden min-h-[200px]">
          <div className="flex flex-col items-center">
            <UserIcon className="h-8 w-8 text-navy mb-2" />
            <h2 className="text-2xl font-bold mb-2 text-center">Who It's For</h2>
          </div>
          <ul className="space-y-2 text-lg absolute inset-0 bg-palepurple p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li>✨ ADHD brains</li>
            <li>🎨 Overwhelmed creatives</li>
            <li>🧠 Anyone craving structure (without shame!)</li>
          </ul>
        </div>
        <div className="bg-deepteal rounded-xl p-6 text-navy group relative overflow-hidden min-h-[200px]">
          <div className="flex flex-col items-center">
            <ArrowPathIcon className="h-8 w-8 text-navy mb-2" />
            <h2 className="text-2xl font-bold mb-2 text-center">How It Works</h2>
          </div>
          <ol className="list-decimal list-inside space-y-2 text-lg absolute inset-0 bg-deepteal p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li>Free consult</li>
            <li>60-min initial session</li>
            <li>Weekly 30 min calls + check-ins</li>
          </ol>
        </div>
      </section>
    </main>
  )
} 