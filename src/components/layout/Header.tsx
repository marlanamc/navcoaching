'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

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
    <header className="bg-black transition-all duration-300 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="md:hidden">
            <Link href="/" className="text-softblue font-bold text-lg">
              Navigating the Storm
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <button
                onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
                onMouseEnter={() => setIsHomeDropdownOpen(true)}
                onMouseLeave={() => setIsHomeDropdownOpen(false)}
                className="text-softblue font-semibold px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-softblue_light transition flex items-center gap-1"
              >
                Home
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isHomeDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 bg-black border border-gray-700 rounded-lg shadow-xl z-50"
                  onMouseEnter={() => setIsHomeDropdownOpen(true)}
                  onMouseLeave={() => setIsHomeDropdownOpen(false)}
                >
                  <div className="py-2">
                    <Link 
                      href="/" 
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-softblue transition"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      🏠 Main Page
                    </Link>
                    <Link 
                      href="/#framework" 
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-softblue transition"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      🧭 Framework
                    </Link>
                    <Link 
                      href="/#dashboard" 
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-softblue transition"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      📊 Dashboard
                    </Link>
                    <Link 
                      href="/#who" 
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-softblue transition"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      👥 Who It's For
                    </Link>
                    <Link 
                      href="/#value" 
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-softblue transition"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      💰 Membership Tiers
                    </Link>
                    <Link 
                      href="/#not" 
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-softblue transition"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      ❌ What It's NOT
                    </Link>
                    <Link 
                      href="/#testimonials" 
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-softblue transition"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      💬 Testimonials
                    </Link>
                    <Link 
                      href="/#faq" 
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-softblue transition"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      ❓ FAQ
                    </Link>
                    <Link 
                      href="/#policy" 
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-softblue transition"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      📅 Scheduling
                    </Link>
                    <Link 
                      href="/#process" 
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-softblue transition"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      🚀 Get Started
                    </Link>
                    <Link 
                      href="/#resources" 
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-softblue transition"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      🛟 Free Resources
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/about" className="text-white font-semibold px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-lavenderblue transition">
              About
            </Link>
            <Link href="/membership" className="text-white font-semibold px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-dustylilac transition">
              Membership
            </Link>
            <Link href="/quiz" className="text-white font-semibold px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-mutedpink transition">
              Quiz
            </Link>
            <Link href="/contact" className="text-white font-semibold px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-aquablue transition">
              Contact
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="/signin" 
              className="btn px-4 py-2 bg-coral text-white font-bold rounded-lg shadow hover:bg-opacity-90 transition"
            >
              Sign In
            </Link>
            <Link 
              href="/membership"
              className="btn cta px-4 py-2 bg-freshaqua text-navy font-bold rounded-lg shadow hover:bg-tealblue hover:text-white transition"
            >
              Join the Crew
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-freshaqua hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-700">
            <div className="pt-2 pb-3 space-y-1 px-2">
              <Link href="/" className="block px-3 py-3 text-base font-bold text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="block px-3 py-3 text-base font-medium text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/membership" className="block px-3 py-3 text-base font-medium text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg" onClick={() => setIsMenuOpen(false)}>
                Membership
              </Link>
              <Link href="/quiz" className="block px-3 py-3 text-base font-medium text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg" onClick={() => setIsMenuOpen(false)}>
                Quiz
              </Link>
              <Link href="/contact" className="block px-3 py-3 text-base font-medium text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              
              {/* Sections Submenu for Mobile */}
              <div className="pt-2 border-t border-gray-600 mt-2">
                <div className="px-3 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Sections
                </div>
                <Link 
                  href="/#framework" 
                  className="block px-3 py-2 text-sm text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg" 
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      window.location.hash = 'framework';
                      setTimeout(() => {
                        const section = document.getElementById('tabbed-section');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }
                  }}
                >
                  🧭 Framework
                </Link>
                <Link 
                  href="/#dashboard" 
                  className="block px-3 py-2 text-sm text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg" 
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      window.location.hash = 'dashboard';
                      setTimeout(() => {
                        const section = document.getElementById('tabbed-section');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }
                  }}
                >
                  📊 Dashboard
                </Link>
                <Link 
                  href="/#who" 
                  className="block px-3 py-2 text-sm text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg" 
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      window.location.hash = 'who';
                      setTimeout(() => {
                        const section = document.getElementById('tabbed-section');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }
                  }}
                >
                  👥 Who It's For
                </Link>
                <Link 
                  href="/#value" 
                  className="block px-3 py-2 text-sm text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg" 
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      window.location.hash = 'value';
                      setTimeout(() => {
                        const section = document.getElementById('tabbed-section');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }
                  }}
                >
                  💰 Pricing
                </Link>
                <Link 
                  href="/#not" 
                  className="block px-3 py-2 text-sm text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg" 
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      window.location.hash = 'not';
                      setTimeout(() => {
                        const section = document.getElementById('tabbed-section');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }
                  }}
                >
                  ❌ What It's NOT
                </Link>
                <Link 
                  href="/#testimonials" 
                  className="block px-3 py-2 text-sm text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg" 
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      window.location.hash = 'testimonials';
                      setTimeout(() => {
                        const section = document.getElementById('tabbed-section');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }
                  }}
                >
                  💬 Testimonials
                </Link>
                <Link 
                  href="/#faq" 
                  className="block px-3 py-2 text-sm text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg" 
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      window.location.hash = 'faq';
                      setTimeout(() => {
                        const section = document.getElementById('tabbed-section');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }
                  }}
                >
                  ❓ FAQ
                </Link>
                <Link 
                  href="/#policy" 
                  className="block px-3 py-2 text-sm text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg" 
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      window.location.hash = 'policy';
                      setTimeout(() => {
                        const section = document.getElementById('tabbed-section');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }
                  }}
                >
                  📅 Scheduling
                </Link>
                <Link 
                  href="/#process" 
                  className="block px-3 py-2 text-sm text-white hover:bg-gray-800 hover:text-freshaqua rounded-lg" 
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      window.location.hash = 'process';
                      setTimeout(() => {
                        const section = document.getElementById('tabbed-section');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }
                  }}
                >
                  🚀 Get Started
                </Link>
              </div>
              
              {/* CTA Buttons */}
              <div className="pt-2 space-y-2">
                <Link
                  href="/signin"
                  className="block px-3 py-3 text-base font-bold text-white bg-coral rounded-lg hover:bg-opacity-90 transition text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/membership"
                  className="block px-3 py-3 text-base font-bold text-navy bg-freshaqua rounded-lg hover:bg-tealblue hover:text-white transition text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join the Crew
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}