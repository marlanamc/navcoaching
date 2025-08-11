import React from 'react';
import Link from 'next/link';

export default function LegalDisclaimer() {
  return (
    <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6 mb-8 content-card">
      <h2 className="text-xl font-bold text-navy mb-4">Important Notice</h2>
      <p className="mb-4 text-navy">
        Navigating the Storm provides accountability coaching services to help you accomplish your goals. 
        Our services fill the gap between therapy and medication, offering structured support for ADHD challenges.
      </p>
      <p className="mb-4 text-navy font-medium">
        These services are not therapy, medical treatment, or a substitute for professional healthcare. 
        If you're experiencing mental health concerns, please consult with qualified healthcare providers.
      </p>
      <div className="mt-4">
        <Link 
          href="/terms" 
          className="text-ocean hover:text-coral transition hover-lift inline-flex items-center"
        >
          <span>View Full Terms of Service</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
