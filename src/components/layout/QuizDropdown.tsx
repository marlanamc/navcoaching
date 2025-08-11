'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function QuizDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-freshaqua font-semibold px-3 py-2 rounded-lg hover:bg-aquablue hover:text-ocean transition hover-lift focus-highlight flex items-center"
        aria-expanded={isOpen}
      >
        Quizzes
        <svg
          className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <Link
              href="/quiz"
              className="block px-4 py-2 text-sm text-navy hover:bg-aquablue hover:text-ocean transition-colors"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              ADHD Structure Style
            </Link>
            {/* Add more quiz links here as needed */}
            <div className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
              More Quizzes Coming Soon
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 