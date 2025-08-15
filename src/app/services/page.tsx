'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Services() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to membership page
    router.replace('/membership');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-navy mb-4">Redirecting...</h1>
        <p className="text-gray-600">We've moved to a membership model. You'll be redirected shortly.</p>
      </div>
    </div>
  );
}