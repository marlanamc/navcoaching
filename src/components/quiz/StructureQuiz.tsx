'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { saveQuizSubmission } from '@/lib/supabase';

interface QuizQuestion {
  id: number;
  text: string;
  category: string;
  visual: string;
}

interface QuizResult {
  archetype: string;
  description: string;
  needs: string[];
  bestFit: string;
  emoji: string;
}

const quizQuestions: QuizQuestion[] = [
  { id: 1, text: "Daily schedule (with specific time blocks)", category: "Time Structure", visual: "daily_schedule.jpg" },
  { id: 2, text: "Weekly meal planning", category: "Physical/Environment", visual: "meal_plannnig.jpg" },
  { id: 3, text: "Having a consistent morning routine", category: "Self-Regulation Tools", visual: "morning_routine.jpg" },
  { id: 4, text: "Deadlines (work, school, creative)", category: "Time Structure", visual: "deadline.jpg" },
  { id: 5, text: "Digital task manager or to-do list", category: "Task Systems", visual: "task_manager.png" },
  { id: 6, text: "Accountability check-ins with another person", category: "Relational Support", visual: "accountability.jpg" },
  { id: 7, text: "Budgeting and tracking spending", category: "Self-Regulation Tools", visual: "budgeting.png" },
  { id: 8, text: "Exercise or movement plans", category: "Physical/Environment", visual: "exercise.jpg" },
  { id: 9, text: "Journaling or reflecting regularly", category: "Relational Support", visual: "journaling.jpg" },
  { id: 10, text: "Using timers to focus (Pomodoro, countdowns)", category: "Time Structure", visual: "timer.jpg" },
  { id: 11, text: "Habit trackers or streak apps", category: "Task Systems", visual: "habit_tracking.jpg" },
  { id: 12, text: "Phone limits or screen time blockers", category: "Self-Regulation Tools", visual: "phone_limits.jpg" },
  { id: 13, text: "Clean, organized environment", category: "Physical/Environment", visual: "clean_space.jpg" },
  { id: 14, text: "Saying no to spontaneous plans to protect your time", category: "Relational Support", visual: "saying_no.jpg" },
  { id: 15, text: "Writing out your goals or intentions", category: "Task Systems", visual: "goals.jpg" }
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
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-freshaqua/20 to-tealblue/20 rounded-2xl shadow-lg p-8 border border-tealblue/30">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-freshaqua rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-navy mb-4 font-playfair">
              Your Results Are Ready! 🎉
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Enter your email to discover your unique ADHD Structure Archetype and get personalized coaching tips.
            </p>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-navy font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-tealblue transition text-lg"
                required
                disabled={isSubmitting}
              />
            </div>
            {submitError && (
              <div className="text-red-600 text-sm p-3 bg-red-50 rounded-lg border border-red-200">
                ⚠️ {submitError}
              </div>
            )}
            <div className="text-sm text-gray-600 bg-white/70 p-3 rounded-lg">
              📧 You'll receive your results immediately, plus weekly ADHD tips. Unsubscribe anytime.
            </div>
            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-freshaqua to-tealblue text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving Your Results...
                </span>
              ) : '🚀 Discover My Archetype'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (showResults && result) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border-2 border-gradient-to-r from-freshaqua to-tealblue">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{result.emoji}</div>
            <h2 className="text-4xl font-bold text-navy mb-4 font-playfair">
              You're a {result.archetype}!
            </h2>
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-freshaqua/10 to-tealblue/10 p-4 rounded-xl mb-8">
              <p className="text-lg text-gray-700">{result.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-soft">
              <h3 className="text-xl font-bold text-navy mb-4 text-center flex items-center justify-center">
                <span className="mr-2">🎯</span> What You Need
              </h3>
              <ul className="space-y-3">
                {result.needs.map((need, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-tealblue mr-3 text-lg">✓</span>
                    <span className="text-gray-700">{need}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft">
              <h3 className="text-xl font-bold text-navy mb-4 text-center flex items-center justify-center">
                <span className="mr-2">⭐</span> Perfect Fit
              </h3>
              <div className="bg-gradient-to-br from-freshaqua/20 to-tealblue/20 p-4 rounded-lg">
                <p className="text-gray-700 font-medium">{result.bestFit}</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6 border border-purple-200">
              <h3 className="text-xl font-bold text-navy mb-3">🎯 Want to See Your Complete Results?</h3>
              <p className="text-gray-700 mb-4">
                Create your personal dashboard to access detailed insights, category breakdowns, and personalized recommendations for your {result.archetype.toLowerCase()} style.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <span>📊 Detailed analysis</span>
                  <span>•</span>
                  <span>💡 Personal insights</span>
                  <span>•</span>
                  <span>⛵ Membership recommendations</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-lg"
              >
                📊 Create Dashboard & See Full Results
              </Link>
              <Link 
                href="/membership" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-freshaqua to-tealblue text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-lg"
              >
                🚀 Join the Community
              </Link>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account? <Link href="/signin" className="text-tealblue hover:text-navy underline font-medium">Sign in to view results</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleGoBack}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentQuestionIndex === 0 
                ? 'invisible' 
                : 'text-tealblue hover:bg-tealblue hover:text-white'
            }`}
            disabled={currentQuestionIndex === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          
          <div className="text-center">
            <p className="text-navy text-lg">
              <span className="font-bold text-2xl text-tealblue">{currentQuestionIndex + 1}</span>
              <span className="text-gray-500"> of {quizQuestions.length}</span>
            </p>
            <p className="text-sm text-gray-600">{quizQuestions[currentQuestionIndex].category}</p>
          </div>
          
          <div className="w-20"></div> {/* Spacer for alignment */}
        </div>
        
        <div className="relative">
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-3 bg-gradient-to-r from-freshaqua to-tealblue rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="absolute right-0 top-4 text-sm text-gray-600">
            {Math.round(progressPercentage)}% complete
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-navy mb-8 text-center leading-relaxed">
          How do you typically respond to:
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
          {/* Question Text */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-gradient-to-r from-freshaqua/20 to-tealblue/20 px-6 py-3 rounded-xl">
              <h3 className="text-xl font-bold text-navy">
                {quizQuestions[currentQuestionIndex].text}
              </h3>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image
                src={`/quiz_pics/${quizQuestions[currentQuestionIndex].visual}`}
                alt={quizQuestions[currentQuestionIndex].text}
                width={288}
                height={288}
                className="w-full h-full object-cover"
                priority={currentQuestionIndex <= 2} // Preload first few images
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <button
            onClick={() => handleAnswer(1)}
            className="w-full p-6 text-left rounded-xl border-2 border-rose-200 bg-gradient-to-r from-rose-50 to-pink-25 hover:from-rose-100 hover:to-pink-50 hover:border-rose-300 transition-all duration-200 transform hover:scale-105"
          >
            <div className="flex items-center mb-2">
              <span className="w-8 h-8 bg-rose-400 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">1</span>
              <span className="font-bold text-navy text-lg">I feel caged by this</span>
            </div>
            <p className="text-gray-600 ml-12">
              Feels restrictive, pressure-inducing, or shame-triggering
            </p>
          </button>

          <button
            onClick={() => handleAnswer(2)}
            className="w-full p-6 text-left rounded-xl border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-25 hover:from-emerald-100 hover:to-teal-50 hover:border-emerald-300 transition-all duration-200 transform hover:scale-105"
          >
            <div className="flex items-center mb-2">
              <span className="w-8 h-8 bg-emerald-400 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">2</span>
              <span className="font-bold text-navy text-lg">I feel held by this</span>
            </div>
            <p className="text-gray-600 ml-12">
              Feels supportive, flexible, or rhythm-based
            </p>
          </button>

          <button
            onClick={() => handleAnswer(3)}
            className="w-full p-6 text-left rounded-xl border-2 border-violet-200 bg-gradient-to-r from-violet-50 to-purple-25 hover:from-violet-100 hover:to-purple-50 hover:border-violet-300 transition-all duration-200 transform hover:scale-105"
          >
            <div className="flex items-center mb-2">
              <span className="w-8 h-8 bg-violet-400 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">3</span>
              <span className="font-bold text-navy text-lg">I feel lost without this</span>
            </div>
            <p className="text-gray-600 ml-12">
              Feels essential to function, clarity, or emotional safety
            </p>
          </button>
        </div>
      </div>
    </div>
  );
} 