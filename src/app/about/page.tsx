import React from 'react'
import { UserIcon, HeartIcon, LightBulbIcon } from '@heroicons/react/24/solid'

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-8">
      <section className="w-full max-w-2xl bg-ocean rounded-2xl shadow-lg p-8 mb-8 text-center">
        <UserIcon className="h-10 w-10 mx-auto text-coral mb-2" />
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-sand">Meet Marlie</h1>
        <p className="text-lg text-aqua font-semibold mb-2">ADHD Coach. Teacher. Data Analyst. Real Human.</p>
      </section>

      <section className="w-full max-w-2xl bg-aqua rounded-2xl shadow-lg p-8 mb-8 text-center">
        <LightBulbIcon className="h-10 w-10 mx-auto text-coral mb-2" />
        <h2 className="text-2xl font-bold mb-2 text-ocean">My Approach</h2>
        <ul className="text-ocean text-base font-medium space-y-2">
          <li>✨ Compassionate, no-shame coaching</li>
          <li>🧠 Systems that fit your real life</li>
          <li>🔍 Data-driven, but always human</li>
        </ul>
      </section>

      <section className="w-full max-w-2xl bg-lavender rounded-2xl shadow-lg p-8 text-center">
        <HeartIcon className="h-10 w-10 mx-auto text-coral mb-2" />
        <h2 className="text-2xl font-bold mb-2 text-ocean">Why I Care</h2>
        <ul className="text-ocean text-base font-medium space-y-2">
          <li>💜 Lived ADHD experience</li>
          <li>🌱 I believe in gentle progress</li>
          <li>🚀 I want you to win—your way</li>
        </ul>
      </section>
    </main>
  )
} 