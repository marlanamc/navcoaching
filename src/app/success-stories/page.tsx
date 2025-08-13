import React from 'react';
import Link from 'next/link';

interface CaseStudy {
  name: string;
  role: string;
  archetype: string;
  timeframe: string;
  challenge: string;
  solution: string[];
  results: string[];
  quote: string;
  outcome: string;
}

const caseStudies: CaseStudy[] = [
  {
    name: "Jamie T.",
    role: "Graduate Student",
    archetype: "Deckhand Builder", 
    timeframe: "3 months",
    challenge: "Jamie was drowning in thesis research with no clear system for organizing sources, notes, or deadlines. They'd started and abandoned multiple productivity apps, feeling like nothing worked for their ADHD brain. Procrastination and overwhelm were creating a shame spiral.",
    solution: [
      "Set up a custom Notion dashboard for research management",
      "Created weekly \"thesis sprints\" with specific mini-goals",
      "Established body doubling sessions for focused writing time",
      "Developed a \"parking lot\" system for random thoughts and ideas"
    ],
    results: [
      "Completed literature review 6 weeks ahead of schedule",
      "Established consistent daily writing routine",
      "Reduced thesis-related anxiety by organizing the chaos",
      "Built confidence in their ability to tackle big projects"
    ],
    quote: "Working with Marlie has been transformative. For the first time, I have accountability that actually works for my ADHD brain. I've accomplished more in three months than in the previous year!",
    outcome: "Jamie successfully defended their thesis proposal and now uses their system for ongoing research projects."
  },
  {
    name: "Alex M.",
    role: "Marketing Manager",
    archetype: "Tide Navigator",
    timeframe: "4 months", 
    challenge: "Alex was constantly missing deadlines and feeling overwhelmed by competing priorities at work. They had great ideas but struggled with follow-through, often leaving projects 80% finished. Work stress was affecting their personal life and self-confidence.",
    solution: [
      "Implemented weekly priority-setting sessions",
      "Created project \"containers\" to prevent scope creep",
      "Established energy-based scheduling (high-focus tasks in morning)",
      "Built in regular check-ins with manager using their progress dashboard"
    ],
    results: [
      "Improved project completion rate from 60% to 95%",
      "Received first performance review with zero missed deadlines",
      "Developed reputation as reliable team member", 
      "Created boundaries between work and personal time"
    ],
    quote: "I finally feel like I have control over my workday instead of just reacting to whatever feels urgent. My manager even commented on how much more organized I've become.",
    outcome: "Alex earned a promotion to Senior Marketing Manager and now mentors other team members struggling with project management."
  },
  {
    name: "Sam R.",
    role: "Freelance Designer", 
    archetype: "Drift Sailor",
    timeframe: "6 months",
    challenge: "Sam's creative business was chaotic – missed client deadlines, inconsistent income, and no clear systems for project management. They felt like they were always in crisis mode, putting out fires instead of growing their business strategically.",
    solution: [
      "Created gentle structure that preserved creative freedom",
      "Established \"client containers\" with clear boundaries",  
      "Implemented a simple invoicing and follow-up system",
      "Set up weekly \"business admin\" sessions with body doubling support"
    ],
    results: [
      "Increased monthly income by 40% through better project management",
      "Reduced client revision cycles by setting clearer expectations upfront",
      "Created 2-month project pipeline for first time ever",
      "Developed sustainable work rhythm without burning out creativity"
    ],
    quote: "I was skeptical about adding 'structure' to my creative process, but Marlie helped me find systems that support my creativity instead of stifling it.",
    outcome: "Sam now has a waitlist of clients and has raised their rates twice, with the confidence and systems to deliver consistently excellent work."
  }
];

export default function SuccessStories() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-playfair">
            Success Stories
          </h1>
          <p className="text-xl text-deepteal max-w-2xl mx-auto">
            Real clients, real challenges, real transformation. See how ADHD accountability coaching changes lives.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16 mb-16">
          {caseStudies.map((story, index) => (
            <div key={index} className="bg-white/90 rounded-2xl shadow-lg overflow-hidden">
              {/* Header with client info */}
              <div className="bg-gradient-to-r from-freshaqua/20 to-tealblue/20 p-8 border-b border-tealblue/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-navy mb-2 font-playfair">{story.name}</h2>
                    <p className="text-lg text-gray-700 mb-2">{story.role}</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-freshaqua/30 text-navy px-3 py-1 rounded-full text-sm font-semibold">
                        {story.archetype} Archetype
                      </span>
                      <span className="bg-tealblue/30 text-navy px-3 py-1 rounded-full text-sm font-semibold">
                        {story.timeframe}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-freshaqua to-tealblue rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{story.name.split(' ')[0].charAt(0)}{story.name.split(' ')[1]?.charAt(0)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Challenge & Solution */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-navy mb-3 flex items-center font-playfair">
                        <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 text-sm">!</span>
                        The Challenge
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{story.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-navy mb-3 flex items-center font-playfair">
                        <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm">⚡</span>
                        Our Solution
                      </h3>
                      <ul className="space-y-2">
                        {story.solution.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-tealblue mr-3 text-lg">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Results & Quote */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-navy mb-3 flex items-center font-playfair">
                        <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 text-sm">🎉</span>
                        The Results
                      </h3>
                      <ul className="space-y-2">
                        {story.results.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-600 mr-3 text-lg">→</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-freshaqua/10 to-tealblue/10 p-6 rounded-xl border border-tealblue/20">
                      <div className="flex items-start">
                        <div className="text-4xl text-tealblue mr-4">"</div>
                        <div>
                          <p className="text-gray-700 italic leading-relaxed mb-3">{story.quote}</p>
                          <p className="text-navy font-semibold">— {story.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-navy mb-2">Where They Are Now</h3>
                  <p className="text-gray-700">{story.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Overview */}
        <div className="bg-gradient-to-r from-navy to-deepteal rounded-2xl shadow-lg p-8 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center font-playfair">Common Results Across All Clients</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-freshaqua mb-2">85%</div>
              <p className="text-sm">Complete their first major project within 6 weeks</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-freshaqua mb-2">3x</div>
              <p className="text-sm">More likely to follow through on commitments</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-freshaqua mb-2">90%</div>
              <p className="text-sm">Report feeling more confident and in control</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-freshaqua mb-2">100%</div>
              <p className="text-sm">Say they finally feel understood and supported</p>
            </div>
          </div>
        </div>

        {/* Your Story */}
        <div className="text-center bg-gradient-to-br from-freshaqua/20 to-tealblue/20 rounded-2xl shadow-lg p-8 border border-tealblue/30">
          <h2 className="text-3xl font-bold text-navy mb-4 font-playfair">
            Your Success Story Starts Here
          </h2>
          <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
            These clients started exactly where you are now – frustrated with traditional productivity advice and ready for something that actually works with their ADHD brain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a 
              href="https://cal.com/navcoaching/first-session" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gradient-to-r from-freshaqua to-tealblue text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-lg"
            >
              🚀 Book Your First Session
            </a>
            <Link 
              href="/quiz"
              className="inline-block px-10 py-4 bg-white border-2 border-tealblue text-tealblue font-bold rounded-lg shadow hover:shadow-lg transition text-lg"
            >
              📋 Take the ADHD Quiz First
            </Link>
          </div>
          
          <p className="text-sm text-gray-600">
            Questions about coaching? <Link href="/what-to-expect" className="text-tealblue underline hover:text-navy">See what to expect</Link> or <Link href="/contact" className="text-tealblue underline hover:text-navy">send me a message</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}