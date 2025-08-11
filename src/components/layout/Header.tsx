'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            <Link href="/quiz" className="text-mutedpink font-semibold px-3 py-2 rounded-lg hover:bg-black hover:text-mutedpink_light transition hover-lift focus-highlight">
              Quiz
            </Link>
            <Link href="/contact" className="text-aquablue font-semibold px-3 py-2 rounded-lg hover:bg-black hover:text-aquablue_light transition hover-lift focus-highlight">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Link 
              href="/signin" 
              className="btn px-4 py-2 bg-coral text-gradientStart font-bold rounded-lg shadow hover:bg-opacity-90 hover-lift focus-highlight"
            >
              Sign In
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
            <Link href="/quiz" className="block px-3 py-2 text-base font-medium text-navy hover:bg-aquablue hover:text-ocean rounded-lg mobile-touch-target">Quiz</Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-navy hover:bg-aquablue hover:text-ocean rounded-lg mobile-touch-target">Contact</Link>
            <Link
              href="/signin"
              className="block px-3 py-2 text-base font-bold text-white bg-coral rounded-lg mt-2 hover:bg-opacity-90 transition mobile-touch-target"
            >
              Sign In
            </Link>
            <a
              href="https://calendly.com/marlie-navcoaching/initial"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-bold text-navy bg-freshaqua rounded-lg mt-2 hover:bg-tealblue hover:text-white transition mobile-touch-target"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
