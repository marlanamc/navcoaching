'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  // Getting Started
  {
    category: "Getting Started",
    question: "What happens in my first session?",
    answer: "In your first session, we'll spend time getting to know each other and understanding your specific ADHD challenges and goals. We'll set up your personal Notion dashboard together, establish your weekly rhythm, and design your first action experiment. Think of it as laying the foundation for everything that comes next."
  },
  {
    category: "Getting Started", 
    question: "How do I know if coaching is right for me?",
    answer: "Coaching works best if you're ready to take action and want accountability support. You don't need to have everything figured out – that's what we'll work on together! If you're curious, book a free consultation and we can chat about whether it's a good fit."
  },
  {
    category: "Getting Started",
    question: "What if I've tried other coaches or programs before?",
    answer: "Many of my clients have tried other approaches that didn't stick. Traditional productivity systems often aren't designed for ADHD brains. My approach is specifically tailored for how ADHD minds work – with flexibility, compassion, and strategies that account for executive function differences."
  },

  // Coaching Process
  {
    category: "Coaching Process",
    question: "What's the difference between coaching and therapy?",
    answer: "I'm not a therapist or certified ADHD coach – I'm your accountability partner who happens to understand ADHD really well. Therapy focuses on clinical treatment and processing emotions. I provide practical support, consistent check-ins, and strategies that work with ADHD brains. Think of me as the friend who actually shows up and helps you follow through."
  },
  {
    category: "Coaching Process",
    question: "How often will we meet?",
    answer: "Most clients meet weekly, but we can adjust based on your needs. Some prefer bi-weekly check-ins, others benefit from twice-weekly support during busy periods. The key is consistency and finding a rhythm that works for your life and schedule."
  },
  {
    category: "Coaching Process",
    question: "What happens between sessions?",
    answer: "You'll have access to your personal Notion dashboard where you can track goals, jot down wins and challenges, and complete weekly experiments. Depending on your plan, you might also have mid-week check-ins or access to body doubling sessions."
  },
  {
    category: "Coaching Process",
    question: "What if I miss a session or need to reschedule?",
    answer: "Life happens, especially with ADHD! If you give me 24+ hours notice, we can reschedule at no charge. For emergency situations or ADHD-related struggles, I'm flexible and understanding. We'll work together to find a solution that works."
  },

  // Pricing & Plans
  {
    category: "Pricing & Plans",
    question: "Why is the first session only $25?",
    answer: "I know trying something new with ADHD can feel risky. The 50% off first session lets you experience real coaching without the financial pressure. It's my way of showing I'm confident you'll find value – no high-pressure sales, just genuine support to see if we're a good fit."
  },
  {
    category: "Pricing & Plans",
    question: "Can I switch plans later?",
    answer: "Absolutely! Your sessions are flexible. We maintain a consistent 45-minute format that's proven to work well, but we can adjust frequency, add body doubling sessions, or take breaks when needed. We'll find what works best for you."
  },
  {
    category: "Pricing & Plans",
    question: "Is there a trial period?",
    answer: "Yes! All new clients get a 2-week trial period. If you're not completely satisfied within those first two weeks, I'll provide a full refund. I want to make sure we're a great fit before you commit long-term."
  },
  {
    category: "Pricing & Plans",
    question: "What if I need to cancel my coaching?",
    answer: "You can cancel anytime with 1 week notice. Any unused prepaid sessions will be refunded on a prorated basis. There are no long-term contracts or cancellation fees – I want you to stay because coaching is working, not because you're trapped."
  },
  {
    category: "Pricing & Plans",
    question: "Do you offer payment plans?",
    answer: "Yes! We can set up weekly or monthly payment plans that work with your budget. The goal is to make coaching accessible, not add financial stress to your life."
  },

  // Technical & Practical
  {
    category: "Technical & Practical",
    question: "What is the Notion dashboard?",
    answer: "Your personal Notion dashboard is like your coaching command center. It includes space for goal tracking, session notes, weekly experiments, wins and challenges, and resources. I'll set it up for you and teach you how to use it in a way that works with your ADHD brain."
  },
  {
    category: "Technical & Practical",
    question: "What's included in the Discord community?",
    answer: "Our private Discord server is your 24/7 support system. It includes text channels for daily check-ins, wins, and challenges; voice rooms for body doubling; scheduled group sessions; and a community of ADHD professionals who truly get it. It's a judgment-free zone where you can be yourself."
  },
  {
    category: "Technical & Practical",
    question: "What are body doubling sessions?",
    answer: "Body doubling is virtual coworking where you work alongside others with ADHD in our Discord community. You can join voice channels (camera optional!), share your goals, and work 'alongside' others. There's no pressure – just the gentle accountability of working with people who understand the ADHD experience. We have scheduled sessions and 24/7 open rooms."
  },
  {
    category: "Technical & Practical",
    question: "How do virtual sessions work?",
    answer: "We meet via video call (usually Zoom) at your scheduled time. You'll need a reliable internet connection and a device with a camera/microphone. Don't worry about having the 'perfect' setup – I've coached people from cars, closets, and coffee shops!"
  },
  {
    category: "Technical & Practical",
    question: "What if technology isn't my strong suit?",
    answer: "No worries! I'll walk you through everything step-by-step. Most clients find the tech much easier than expected, and I'm always available to troubleshoot. We can even do a quick tech check before your first session."
  },

  // Results & Expectations
  {
    category: "Results & Expectations",
    question: "How quickly will I see results?",
    answer: "Many clients notice small wins within the first few weeks – like completing a project they'd been avoiding or feeling less overwhelmed about their to-do list. Bigger changes typically happen over 2-3 months as we build sustainable systems together."
  },
  {
    category: "Results & Expectations",
    question: "What if I don't do my 'homework' between sessions?",
    answer: "There's no shame or judgment if you don't complete experiments between sessions. We'll explore what got in the way and adjust our approach. Sometimes the most valuable sessions happen when things didn't go as planned – that's when we learn the most."
  },
  {
    category: "Results & Expectations",
    question: "Can you guarantee I'll be more productive?",
    answer: "I can't guarantee specific outcomes because everyone's journey is different. What I can promise is a judgment-free space, strategies tailored to your ADHD brain, and consistent support as you work toward your goals. Success looks different for everyone."
  }
];

const categories = [...new Set(faqData.map(item => item.category))];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(new Set());

  const toggleQuestion = (index: number) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(index)) {
      newOpenQuestions.delete(index);
    } else {
      newOpenQuestions.add(index);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-playfair">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-deepteal max-w-2xl mx-auto">
            Everything you need to know about ADHD accountability coaching
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedCategory === "All"
                  ? "bg-freshaqua text-navy"
                  : "bg-white text-gray-600 hover:bg-freshaqua/20"
              }`}
            >
              All Questions
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === category
                    ? "bg-freshaqua text-navy"
                    : "bg-white text-gray-600 hover:bg-freshaqua/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-2xl shadow-soft border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-semibold text-freshaqua bg-freshaqua/20 px-2 py-1 rounded-full mr-3">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy">{faq.question}</h3>
                </div>
                <div className="ml-4">
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      openQuestions.has(index) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openQuestions.has(index) && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="bg-gradient-to-br from-freshaqua/20 to-tealblue/20 rounded-2xl shadow-lg p-8 border border-tealblue/30 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">
            Still Have Questions?
          </h2>
          <p className="text-gray-700 mb-6">
            Don't see what you're looking for? I'm here to help! Send me a message or book a free consultation to chat about your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white border-2 border-tealblue text-tealblue font-bold rounded-lg shadow hover:shadow-lg transition"
            >
              Send a Message
            </Link>
            <a
              href="https://calendly.com/marlie-navcoaching/initial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-freshaqua to-tealblue text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              Book Your First Session
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}