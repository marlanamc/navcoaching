'use client';

import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  initials: string;
}

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Working with Marlie has been transformative. For the first time, I have accountability that actually works for my ADHD brain. I've accomplished more in three months than in the previous year!",
      name: "Jamie T.",
      title: "Graduate Student",
      initials: "JT"
    },
    {
      id: 2,
      quote: "I tried so many apps and planners before, but nothing stuck. Marlie's coaching provides the human element I needed. She understands how my ADHD brain works and helps me navigate around the obstacles.",
      name: "Alex K.",
      title: "Marketing Professional",
      initials: "AK"
    },
    {
      id: 3,
      quote: "The body doubling sessions have been a game-changer for me. Having that structured time to work alongside others who understand ADHD challenges has helped me complete tasks I'd been avoiding for months.",
      name: "Morgan P.",
      title: "Small Business Owner",
      initials: "MP"
    },
    {
      id: 4,
      quote: "Marlie helped me find AI tools that actually work for me instead of adding to my overwhelm. She bridges the gap between therapy and real-world productivity in a way that's compassionate and effective.",
      name: "Taylor R.",
      title: "Software Developer",
      initials: "TR"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 8000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-soft content-card">
      <div className="relative">
        {/* Testimonial Content */}
        <div className="min-h-[200px]">
          <p className="text-center text-lg italic mb-6">
            "{testimonials[currentIndex].quote}"
          </p>
          <div className="flex justify-center items-center">
            <div className="w-12 h-12 bg-freshaqua rounded-full flex items-center justify-center mr-4">
              <span className="text-navy font-bold">{testimonials[currentIndex].initials}</span>
            </div>
            <div>
              <p className="font-bold text-navy">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-gray-600">{testimonials[currentIndex].title}</p>
            </div>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-soft hover:bg-freshaqua transition focus:outline-none focus:ring-2 focus:ring-ocean"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-navy" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button 
          onClick={goToNext}
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-soft hover:bg-freshaqua transition focus:outline-none focus:ring-2 focus:ring-ocean"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-navy" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              index === currentIndex ? 'bg-coral' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
