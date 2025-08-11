'use client';

import React from 'react';
import StructureQuiz from '@/components/quiz/StructureQuiz';

export default function QuizPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4 font-playfair">
            What's Your ADHD Structure Archetype?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white bg-opacity-40 rounded-lg shadow-soft p-6">
              <h3 className="text-black font-bold text-lg mb-2">Purpose</h3>
              <p className="text-navy">
                Discover your unique relationship with structure and get personalized ADHD coaching recommendations.
              </p>
            </div>

            <div className="bg-white bg-opacity-40 rounded-lg shadow-soft p-6">
              <h3 className="text-black font-bold text-lg mb-2">Instructions</h3>
              <p className="text-navy">
                For each item, choose how you typically respond to this type of structure in your life. <br />
              </p>
            </div>
          </div>
        </div>
        <StructureQuiz />
      </div>
    </div>
  );
} 