'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import QuizDropdown from './QuizDropdown';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [focusMode, setFocusMode] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle focus mode
  const toggleFocusMode = () => {
    setFocusMode(!focusMode);
    document.body.classList.toggle('focus-mode');
  };

  return (
    <header className={`${scrolled ? 'bg-black shadow-md' : 'bg-black'} transition-all duration-300 sticky top-0 z-50`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className=" flex items-center font-extrabold text-softblue text-xl tracking-tight px-3 py-2 rounded-lg hover:bg-black hover:text-softblue_light transition hover-lift focus-highlight">
              Home
            </Link>
            <Link href="/about" className="text-lavenderblue font-semibold px-3 py-2 rounded-lg hover:bg-black hover:text-lavenderblue_light transition hover-lift focus-highlight">
              About
            </Link>
            <Link href="/services" className="text-dustylilac font-semibold px-3 py-2 rounded-lg hover:bg-black hover:text-dustylilac_light transition hover-lift focus-highlight">
              Services
            </Link>
            <QuizDropdown />
            <Link href="/pricing" className="text-mutedpink font-semibold px-3 py-2 rounded-lg hover:bg-black hover:text-mutedpink_light transition hover-lift focus-highlight">
              Pricing
            </Link>
            <Link href="/members" className="text-palepurple font-semibold px-3 py-2 rounded-lg hover:bg-black hover:text-palepurple_light transition hover-lift focus-highlight">
              Members
            </Link>
            <Link href="/contact" className="text-aquablue font-semibold px-3 py-2 rounded-lg hover:bg-black hover:text-aquablue_light transition hover-lift focus-highlight">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            {/* Focus mode toggle */}
            <button 
              onClick={toggleFocusMode}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              aria-label={focusMode ? "Disable focus mode" : "Enable focus mode"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-14-14zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 6a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Sign up button */}
            <Link 
              href="/signup" 
              className="btn px-4 py-2 bg-coral text-gradientStart font-bold rounded-lg shadow hover:bg-opacity-90 hover-lift focus-highlight"
            >
              Sign Up
            </Link>
            
            {/* Consultation button */}
            <a 
              href="https://calendly.com/marlie-navcoaching/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn cta px-4 py-2 bg-freshaqua text-navy font-bold rounded-lg shadow hover:bg-tealblue hover:text-white transition hover-lift focus-highlight"
            >
              Book a Free Consultation
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center ml-2">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-navy hover:text-ocean hover:bg-aquablue mobile-touch-target"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}> 
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-base font-bold text-navy hover:bg-aquablue hover:text-ocean rounded-lg mobile-touch-target">Home</Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-navy hover:bg-aquablue hover:text-ocean rounded-lg mobile-touch-target">About</Link>
            <Link href="/services" className="block px-3 py-2 text-base font-medium text-navy hover:bg-aquablue hover:text-ocean rounded-lg mobile-touch-target">Services</Link>
            
            {/* Quiz section in mobile menu */}
            <div className="px-3 py-2">
              <div className="text-base font-medium text-navy mb-2">Quizzes</div>
              <Link href="/quiz" className="block pl-4 py-2 text-sm text-navy hover:bg-aquablue hover:text-ocean rounded-lg mobile-touch-target">
                ADHD Structure Style
              </Link>
              <div className="pl-4 py-2 text-sm text-gray-400">More Quizzes Coming Soon</div>
            </div>

            <Link href="/pricing" className="block px-3 py-2 text-base font-medium text-navy hover:bg-aquablue hover:text-ocean rounded-lg mobile-touch-target">Pricing</Link>
            <Link href="/members" className="block px-3 py-2 text-base font-medium text-navy hover:bg-aquablue hover:text-ocean rounded-lg mobile-touch-target">Members</Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-navy hover:bg-aquablue hover:text-ocean rounded-lg mobile-touch-target">Contact</Link>
            <Link
              href="/signup"
              className="block px-3 py-2 text-base font-bold text-white bg-coral rounded-lg mt-2 hover:bg-opacity-90 transition mobile-touch-target"
            >
              Sign Up
            </Link>
            <a
              href="https://calendly.com/marlie-navcoaching/initial"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-bold text-navy bg-freshaqua rounded-lg mt-2 hover:bg-tealblue hover:text-white transition mobile-touch-target"
            >
              Book a Free Consultation
            </a>
            {/* Focus mode toggle in mobile menu */}
            <button 
              onClick={toggleFocusMode}
              className="flex items-center w-full px-3 py-2 text-base font-medium text-navy hover:bg-aquablue hover:text-ocean rounded-lg mobile-touch-target"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-14-14zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 6a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
              </svg>
              {focusMode ? "Disable Focus Mode" : "Enable Focus Mode"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
