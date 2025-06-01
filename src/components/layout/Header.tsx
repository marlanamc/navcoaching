'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-palepurple">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center font-extrabold text-navy text-xl tracking-tight px-3 py-2 rounded-lg hover:bg-aqua hover:text-ocean transition">
              Home
            </Link>
            <Link href="/about" className="text-navy font-semibold px-3 py-2 rounded-lg hover:bg-aqua hover:text-ocean transition">
              About
            </Link>
            <Link href="/services" className="text-navy font-semibold px-3 py-2 rounded-lg hover:bg-aqua hover:text-ocean transition">
              Services
            </Link>
            <Link href="/members" className="text-navy font-semibold px-3 py-2 rounded-lg hover:bg-aqua hover:text-ocean transition">
              Members
            </Link>
            <Link href="/contact" className="text-navy font-semibold px-3 py-2 rounded-lg hover:bg-aqua hover:text-ocean transition">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Link 
              href="/contact" 
              className="btn cta px-4 py-2 bg-freshaqua text-navy font-bold rounded-lg shadow hover:bg-lavender hover:text-ocean transition"
            >
              Book a Free Consultation
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center ml-2">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-sand hover:text-ocean hover:bg-aqua"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            <Link href="/" className="block px-3 py-2 text-base font-bold text-sand hover:bg-aqua hover:text-ocean rounded-lg">Home</Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-sand hover:bg-aqua hover:text-ocean rounded-lg">About</Link>
            <Link href="/services" className="block px-3 py-2 text-base font-medium text-sand hover:bg-aqua hover:text-ocean rounded-lg">Services</Link>
            <Link href="/members" className="block px-3 py-2 text-base font-medium text-sand hover:bg-aqua hover:text-ocean rounded-lg">Members</Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-sand hover:bg-aqua hover:text-ocean rounded-lg">Contact</Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-bold text-navy bg-freshaqua rounded-lg mt-2 hover:bg-lavender hover:text-ocean transition"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 