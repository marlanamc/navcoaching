'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';
import Link from 'next/link';

interface Worksheet {
  id: string;
  title: string;
  description: string;
  download_url: string;
  category: string;
}

export default function Worksheets() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [worksheets, setWorksheets] = useState<Worksheet[]>([]);
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    const checkAuthAndFetchWorksheets = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          router.push('/members-only');
          return;
        }

        // Fetch worksheets from Supabase
        const { data, error } = await supabase
          .from('worksheets')
          .select('*')
          .order('category');

        if (error) throw error;
        setWorksheets(data || []);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthAndFetchWorksheets();
  }, [router, supabase]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const categories = Array.from(new Set(worksheets.map(w => w.category)));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair">
            ADHD Worksheets
          </h1>
          <Link
            href="/dashboard"
            className="btn px-6 py-2 bg-freshaqua text-navy font-bold rounded-lg shadow-soft hover:bg-tealblue hover:text-white transition hover-lift"
          >
            Back to Dashboard
          </Link>
        </div>

        {/* Worksheets List */}
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category} className="bg-white bg-opacity-90 rounded-lg shadow-soft p-8 content-card">
              <h2 className="text-2xl font-bold text-navy mb-6 font-playfair capitalize">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {worksheets
                  .filter(w => w.category === category)
                  .map((worksheet) => (
                    <div key={worksheet.id} className="bg-softblue rounded-lg p-6">
                      <h3 className="text-xl font-bold text-navy mb-2">
                        {worksheet.title}
                      </h3>
                      <p className="text-navy mb-4">
                        {worksheet.description}
                      </p>
                      <a
                        href={worksheet.download_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn px-4 py-2 bg-tealblue text-white font-bold rounded-lg shadow-soft hover:bg-opacity-90 transition hover-lift inline-flex items-center"
                      >
                        Download
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 