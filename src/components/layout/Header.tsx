'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            <Link href="/" className="text-softblue font-semibold px-3 py-2 rounded-lg">
              Home
            </Link>
            <Link href="/about" className="text-lavenderblue font-semibold px-3 py-2 rounded-lg">
              About
            </Link>
            <Link href="/services" className="text-dustylilac font-semibold px-3 py-2 rounded-lg">
              Services
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
              <Link href="/" className="block px-3 py-3 text-base font-bold text-white rounded-lg" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="block px-3 py-3 text-base font-medium text-white rounded-lg" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/services" className="block px-3 py-3 text-base font-medium text-white rounded-lg" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}