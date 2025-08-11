'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { saveQuizSubmission } from '@/lib/supabase';

interface QuizQuestion {
  id: number;
  text: string;
  category: string;
}

interface QuizResult {
  archetype: string;
  description: string;
  needs: string[];
  bestFit: string;
  emoji: string;
}

const quizQuestions: QuizQuestion[] = [
  { id: 1, text: "Daily schedule (with specific time blocks)", category: "Time Structure" },
  { id: 2, text: "Weekly meal planning", category: "Physical/Environment" },
  { id: 3, text: "Having a consistent morning routine", category: "Self-Regulation Tools" },
  { id: 4, text: "Deadlines (work, school, creative)", category: "Time Structure" },
  { id: 5, text: "Digital task manager or to-do list", category: "Task Systems" },
  { id: 6, text: "Accountability check-ins with another person", category: "Relational Support" },
  { id: 7, text: "Budgeting and tracking spending", category: "Self-Regulation Tools" },
  { id: 8, text: "Exercise or movement plans", category: "Physical/Environment" },
  { id: 9, text: "Journaling or reflecting regularly", category: "Relational Support" },
  { id: 10, text: "Using timers to focus (Pomodoro, countdowns)", category: "Time Structure" },
  { id: 11, text: "Habit trackers or streak apps", category: "Task Systems" },
  { id: 12, text: "Phone limits or screen time blockers", category: "Self-Regulation Tools" },
  { id: 13, text: "Clean, organized environment", category: "Physical/Environment" },
  { id: 14, text: "Saying no to spontaneous plans to protect your time", category: "Relational Support" },
  { id: 15, text: "Writing out your goals or intentions", category: "Task Systems" }
];

const quizResults: { [key: string]: QuizResult } = {
  "Drift Sailor": {
    archetype: "Drift Sailor",
    description: "You avoid structure that feels rigid or rules-based. Systems overwhelm you if they expect daily perfection or high energy.",
    needs: [
      "Low-pressure coaching with a focus on mood, momentum, and nervous system awareness",
      "Optional structure tools: voice note goals, body-doubling, 1 anchor task per week",
      "A coach who uses humor, compassion, and regulation-first language"
    ],
    bestFit: "Creative accountability, flexible structure coaching, weekly voice/text check-ins",
    emoji: "🌊"
  },
  "Tide Navigator": {
    archetype: "Tide Navigator",
    description: "You like gentle structure, not too loose, not too rigid. You respond best to rhythm, flow, and emotionally relevant routines.",
    needs: [
      "Coaching that helps you build systems around your energy, not around time clocks",
      "Visual mapping tools, flexible goal-setting, and space to adjust weekly",
      "Gentle accountability that includes weekly rhythm planning"
    ],
    bestFit: "ADHD-aligned coaching that blends emotional regulation with creative planning",
    emoji: "⛵"
  },
  "Deckhand Builder": {
    archetype: "Deckhand Builder",
    description: "You like structure and you know you need it, but it can't be inflexible. You thrive with modular plans and weekly check-ins that adapt to real life.",
    needs: [
      "Coaching that helps you refine systems, declutter tools, and prevent burnout",
      "Goal-setting with emotional context, not just productivity",
      "Mid-week adjustments + weekly Compass resets"
    ],
    bestFit: "Strategic structure coaching with strong systems and regular accountability",
    emoji: "⚓"
  },
  "Lighthouse Operator": {
    archetype: "Lighthouse Operator",
    description: "You crave structure. Without it, everything feels chaotic. You do best when your schedule, goals, and systems are clear, tracked, and reinforced.",
    needs: [
      "Structured coaching with visual planning, time blocking, and system audits",
      "Clear metrics, written goals, firm accountability check-ins",
      "Morning/evening anchors, energy mapping, and automation"
    ],
    bestFit: "High-support structure coaching with templates, systems setup, and routine design",
    emoji: "🛳"
  }
};

export default function StructureQuiz() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [email, setEmail] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (newAnswers.length === quizQuestions.length) {
      calculateResult(newAnswers);
      setShowEmailForm(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleGoBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setAnswers(answers.slice(0, -1)); // Remove the last answer
    }
  };

  const calculateResult = (finalAnswers: number[]) => {
    const totalScore = finalAnswers.reduce((sum, score) => sum + score, 0);
    
    let archetype: string;
    if (totalScore <= 22) archetype = "Drift Sailor";
    else if (totalScore <= 30) archetype = "Tide Navigator";
    else if (totalScore <= 37) archetype = "Deckhand Builder";
    else archetype = "Lighthouse Operator";

    setResult(quizResults[archetype]);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      if (!result) throw new Error('No quiz result available');

      const submission = {
        email,
        archetype: result.archetype,
        answers
      };

      console.log('Preparing to submit quiz:', {
        email: submission.email,
        archetype: submission.archetype,
        answersCount: submission.answers.length
      });

      const response = await saveQuizSubmission(submission);
      console.log('Submission response:', response);
      
      if (response.error) {
        console.error('Detailed submission error:', {
          error: response.error,
          message: response.error.message,
          details: response.error instanceof Error ? response.error.stack : undefined
        });
        setSubmitError(response.error.message || 'Failed to save your results. Please try again.');
        return;
      }
      
      console.log('Quiz submitted successfully:', response.data);
      setShowResults(true);
    } catch (error) {
      console.error('Submission error details:', {
        error,
        type: error?.constructor?.name,
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined
      });
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  if (showEmailForm && !showResults) {
    return (
      <div className="max-w-2xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-soft p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Your Results Are Ready!
          </h2>
          <p className="text-lg mb-6">
            Enter your email to receive your Structure Archetype results and get weekly ADHD tips tailored to your style.
          </p>
        </div>

        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-navy font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ocean"
              required
              disabled={isSubmitting}
            />
          </div>
          {submitError && (
            <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg border border-red-100">
              {submitError}
            </div>
          )}
          <div className="text-sm text-gray-600 mb-4">
            By submitting, you agree to receive emails from Navigating The Storm. You can unsubscribe at any time.
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-freshaqua text-white font-bold rounded-lg shadow hover:bg-opacity-90 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Get My Results'}
          </button>
        </form>
      </div>
    );
  }

  if (showResults && result) {
    return (
      <div className="max-w-2xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-soft p-8 border-2 border-navy">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-navy mb-4">
            {result.emoji} You're a {result.archetype}!
          </h2>
          <p className="text-lg mb-8">{result.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="text-left">
              <h3 className="text-xl font-bold text-navy mb-3 text-center">You need:</h3>
              <div className="bg-freshaqua bg-opacity-40 p-4 rounded-lg">
                <ul className="space-y-2">
                  {result.needs.map((need, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-tealblue mr-2">•</span>
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-xl font-bold text-navy mb-3 text-center">Best fit:</h3>
              <div className="bg-softblue bg-opacity-40 p-4 rounded-lg">
                <p className="text-lg">{result.bestFit}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link 
              href="/pricing" 
              className="inline-block px-6 py-3 bg-freshaqua text-white font-bold rounded-lg shadow hover:bg-opacity-90 transition"
            >
              Sign Up for Coaching
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-coral rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="flex justify-between items-center mt-2">
          <button
            onClick={handleGoBack}
            className={`text-navy hover:text-ocean transition-colors ${currentQuestionIndex === 0 ? 'invisible' : ''}`}
            disabled={currentQuestionIndex === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <p className="text-center text-navy">
            <span className="font-bold">Question {currentQuestionIndex + 1}</span> of {quizQuestions.length}
          </p>
          <div className="w-6"></div> {/* Spacer for alignment */}
        </div>
      </div>

      {/* Question */}
      <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-8 mb-8">
        <h2 className="text-xl font-bold text-black mb-6 text-center">
          {quizQuestions[currentQuestionIndex].text}
        </h2>

        <div className="space-y-4 max-w-xl mx-auto">
          <button
            onClick={() => handleAnswer(1)}
            className="w-full p-4 text-left rounded-lg border border-gray-200 bg-mutedpink hover:bg-opacity-60 transition"
          >
            <span className="font-bold text-navy">I feel caged by this</span>
            <p className="text-sm text-gray-600">
              Feels restrictive, pressure-inducing, or shame-triggering
            </p>
          </button>

          <button
            onClick={() => handleAnswer(2)}
            className="w-full p-4 text-left rounded-lg border border-gray-200 bg-palepurple hover:bg-opacity-60 transition"
          >
            <span className="font-bold text-navy">I feel held by this</span>
            <p className="text-sm text-gray-600">
              Feels supportive, flexible, or rhythm-based
            </p>
          </button>

          <button
            onClick={() => handleAnswer(3)}
            className="w-full p-4 text-left rounded-lg border border-gray-200 bg-softblue hover:bg-opacity-80 transition"
          >
            <span className="font-bold text-navy">I feel lost without this</span>
            <p className="text-sm text-gray-600">
              Feels essential to function, clarity, or emotional safety
            </p>
          </button>
        </div>
      </div>
    </div>
  );
} 