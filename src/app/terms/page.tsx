'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-8 content-card">
        <h1 className="text-3xl font-bold text-navy mb-6">Terms of Service</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2 className="text-xl font-bold text-navy mt-8 mb-4">1. Service Description</h2>
          <p>
            Navigating the Storm provides accountability coaching services designed to help individuals with ADHD and executive function challenges achieve their goals through structured support, accountability partnerships, and productivity strategies.
          </p>
          
          <h2 className="text-xl font-bold text-navy mt-8 mb-4">2. Not Medical or Therapeutic Services</h2>
          <p>
            <strong>IMPORTANT DISCLAIMER:</strong> The services provided by Navigating the Storm are not therapy, medical treatment, or mental health services. Our coaching is designed to complement, not replace, professional healthcare services.
          </p>
          <p>
            We do not diagnose, treat, or cure any medical or psychological conditions. Our coaching services fill the gap between therapy and medication, providing practical support for goal achievement and productivity.
          </p>
          
          <h2 className="text-xl font-bold text-navy mt-8 mb-4">3. Client Responsibilities</h2>
          <p>
            Clients are responsible for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Seeking appropriate medical or mental health care when needed</li>
            <li>Providing accurate information about their goals and challenges</li>
            <li>Actively participating in the coaching relationship</li>
            <li>Completing agreed-upon tasks between sessions</li>
            <li>Communicating openly about what is and isn't working</li>
          </ul>
          
          <h2 className="text-xl font-bold text-navy mt-8 mb-4">4. Confidentiality</h2>
          <p>
            We respect your privacy and maintain confidentiality regarding all client communications and information. However, coaching is not protected by the same legal privileges as therapy. Information may be disclosed if required by law or if there is risk of harm to self or others.
          </p>
          
          <h2 className="text-xl font-bold text-navy mt-8 mb-4">5. Payment and Cancellation</h2>
          <p>
            Payment is required at the time services are scheduled. Cancellations must be made at least 24 hours in advance to receive a refund or reschedule without penalty.
          </p>
          
          <h2 className="text-xl font-bold text-navy mt-8 mb-4">6. Results Not Guaranteed</h2>
          <p>
            While we are committed to providing high-quality coaching services, we cannot guarantee specific results. Success depends on many factors, including client engagement and individual circumstances.
          </p>
          
          <h2 className="text-xl font-bold text-navy mt-8 mb-4">7. Agreement</h2>
          <p>
            By using our services, you acknowledge that you have read, understood, and agree to these terms. You understand that coaching is not therapy or medical treatment and that you are responsible for seeking appropriate healthcare when needed.
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <div className="mt-4">
            <Link 
              href="/" 
              className="text-ocean hover:text-coral transition hover-lift inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span>Return to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
