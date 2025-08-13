'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
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
          {/* Mobile Logo - Left side on mobile */}
          <div className="md:hidden">
            <Link href="/" className="text-softblue font-bold text-lg">
              Navigating the Storm
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <Link
                href="/"
                onMouseEnter={() => setIsHomeDropdownOpen(true)}
                onMouseLeave={() => setIsHomeDropdownOpen(false)}
                className="flex items-center font-extrabold text-softblue text-xl tracking-tight px-3 py-2 rounded-lg hover:bg-black hover:text-softblue_light transition hover-lift focus-highlight"
              >
                Home
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              
              {isHomeDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-48 z-50"
                  onMouseEnter={() => setIsHomeDropdownOpen(true)}
                  onMouseLeave={() => setIsHomeDropdownOpen(false)}
                >
                  <Link 
                    href="/" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => {
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    🏠 Home
                  </Link>
                  <Link 
                    href="/#framework" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => {
                      setTimeout(() => {
                        const tabbedSection = document.getElementById('tabbed-section');
                        if (tabbedSection) {
                          const headerHeight = 80;
                          const sectionTop = tabbedSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                          window.scrollTo({ top: sectionTop, behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                  >
                    🧭 Framework
                  </Link>
                  <Link 
                    href="/#dashboard" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => {
                      setTimeout(() => {
                        const tabbedSection = document.getElementById('tabbed-section');
                        if (tabbedSection) {
                          const headerHeight = 80;
                          const sectionTop = tabbedSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                          window.scrollTo({ top: sectionTop, behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                  >
                    📊 Dashboard
                  </Link>
                  <Link 
                    href="/#who" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => {
                      setTimeout(() => {
                        const tabbedSection = document.getElementById('tabbed-section');
                        if (tabbedSection) {
                          const headerHeight = 80;
                          const sectionTop = tabbedSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                          window.scrollTo({ top: sectionTop, behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                  >
                    👥 Who It's For
                  </Link>
                  <Link 
                    href="/#value" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => {
                      setTimeout(() => {
                        const tabbedSection = document.getElementById('tabbed-section');
                        if (tabbedSection) {
                          const headerHeight = 80;
                          const sectionTop = tabbedSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                          window.scrollTo({ top: sectionTop, behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                  >
                    💰 Pricing
                  </Link>
                  <Link 
                    href="/#not" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => {
                      setTimeout(() => {
                        const tabbedSection = document.getElementById('tabbed-section');
                        if (tabbedSection) {
                          const headerHeight = 80;
                          const sectionTop = tabbedSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                          window.scrollTo({ top: sectionTop, behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                  >
                    ❌ What It's NOT
                  </Link>
                  <Link 
                    href="/#testimonials" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => {
                      setTimeout(() => {
                        const tabbedSection = document.getElementById('tabbed-section');
                        if (tabbedSection) {
                          const headerHeight = 80;
                          const sectionTop = tabbedSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                          window.scrollTo({ top: sectionTop, behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                  >
                    💬 Testimonials
                  </Link>
                  <Link 
                    href="/#faq" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => {
                      setTimeout(() => {
                        const tabbedSection = document.getElementById('tabbed-section');
                        if (tabbedSection) {
                          const headerHeight = 80;
                          const sectionTop = tabbedSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                          window.scrollTo({ top: sectionTop, behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                  >
                    ❓ FAQ
                  </Link>
                  <Link 
                    href="/#policy" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => {
                      setTimeout(() => {
                        const tabbedSection = document.getElementById('tabbed-section');
                        if (tabbedSection) {
                          const headerHeight = 80;
                          const sectionTop = tabbedSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                          window.scrollTo({ top: sectionTop, behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                  >
                    📅 Scheduling
                  </Link>
                  <Link 
                    href="/#process" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => {
                      setTimeout(() => {
                        const tabbedSection = document.getElementById('tabbed-section');
                        if (tabbedSection) {
                          const headerHeight = 80;
                          const sectionTop = tabbedSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                          window.scrollTo({ top: sectionTop, behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                  >
                    🚀 Get Started
                  </Link>
                </div>
              )}
            </div>
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
          
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="/signin" 
              className="btn px-4 py-2 bg-coral text-gradientStart font-bold rounded-lg shadow hover:bg-opacity-90 hover-lift focus-highlight"
            >
              Sign In
            </Link>
            
            {/* First Session button */}
            <a 
              href="https://cal.com/navcoaching/first-session"
              target="_blank"
              rel="noopener noreferrer"
              className="btn cta px-4 py-2 bg-freshaqua text-navy font-bold rounded-lg shadow hover:bg-tealblue hover:text-white transition hover-lift focus-highlight"
            >
              Book Your First Session
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-freshaqua hover:bg-gray-800 mobile-touch-target"
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
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-black border-t border-gray-700`}> 
          <div className="pt-2 pb-3 space-y-1 px-2">
            <Link href="/" className="block px-3 py-3 text-base font-bold text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg mobile-touch-target" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className="block px-3 py-3 text-base font-medium text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg mobile-touch-target" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/services" className="block px-3 py-3 text-base font-medium text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg mobile-touch-target" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/quiz" className="block px-3 py-3 text-base font-medium text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg mobile-touch-target" onClick={() => setIsMenuOpen(false)}>Quiz</Link>
            <Link href="/contact" className="block px-3 py-3 text-base font-medium text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg mobile-touch-target" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="pt-2 space-y-2">
              <Link
                href="/signin"
                className="block px-3 py-3 text-base font-bold text-white bg-coral rounded-lg hover:bg-opacity-90 transition mobile-touch-target text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <a
                href="https://cal.com/navcoaching/first-session"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-3 text-base font-bold text-navy bg-freshaqua rounded-lg hover:bg-tealblue hover:text-white transition mobile-touch-target text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Your First Session
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
