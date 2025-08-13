'use client';

import React from 'react';
import StructureQuiz from '@/components/quiz/StructureQuiz';

export default function QuizPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-playfair">
            What's Your ADHD Structure Archetype?
          </h1>
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-xl text-deepteal mb-4">
              Discover how much structure your ADHD brain needs to thrive
            </p>
            <p className="text-gray-600">
              This quick quiz analyzes how you feel about different productivity approaches. For example, time blocking might be perfect for some but feel too restrictive for others. Results show whether you thrive with light guidance, moderate frameworks, or intensive systems.
            </p>
          </div>

        </div>
        
        <StructureQuiz />
      </div>
    </div>
  );
}