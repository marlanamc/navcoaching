'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';
import Link from 'next/link';

interface Session {
  id: string;
  title: string;
  start_time: string;
  duration: number;
  max_participants: number;
  current_participants: number;
  meeting_url: string;
  host_name: string;
}

export default function BodyDoubling() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [sessions, setSessions] = useState<Session[]>([]);
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    const checkAuthAndFetchSessions = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          router.push('/members-only');
          return;
        }

        // Fetch upcoming sessions from Supabase
        const { data, error } = await supabase
          .from('body_doubling_sessions')
          .select('*')
          .gte('start_time', new Date().toISOString())
          .order('start_time');

        if (error) throw error;
        setSessions(data || []);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthAndFetchSessions();
  }, [router, supabase]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

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

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair">
            Body Doubling Sessions
          </h1>
          <Link
            href="/dashboard"
            className="btn px-6 py-2 bg-freshaqua text-navy font-bold rounded-lg shadow-soft hover:bg-tealblue hover:text-white transition hover-lift"
          >
            Back to Dashboard
          </Link>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-8 mb-8 content-card">
          <h2 className="text-2xl font-bold text-navy mb-6 font-playfair">
            Upcoming Sessions
          </h2>
          
          {sessions.length > 0 ? (
            <div className="space-y-6">
              {sessions.map((session) => (
                <div key={session.id} className="bg-softblue rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-navy mb-2">
                        {session.title}
                      </h3>
                      <p className="text-navy mb-2">
                        Hosted by {session.host_name}
                      </p>
                      <p className="text-navy">
                        {formatDate(session.start_time)} • {session.duration} minutes
                      </p>
                      <p className="text-navy mt-2">
                        {session.current_participants} / {session.max_participants} participants
                      </p>
                    </div>
                    <a
                      href={session.meeting_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn px-6 py-3 bg-tealblue text-white font-bold rounded-lg shadow-soft hover:bg-opacity-90 transition hover-lift inline-flex items-center"
                    >
                      Join Session
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-navy text-lg mb-4">
                No upcoming sessions scheduled.
              </p>
              <p className="text-navy">
                Check back soon for new body doubling sessions!
              </p>
            </div>
          )}
        </div>

        {/* Session Guidelines */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-8 content-card">
          <h2 className="text-2xl font-bold text-navy mb-6 font-playfair">
            Session Guidelines
          </h2>
          <div className="space-y-4">
            <div className="bg-softblue rounded-lg p-6">
              <h3 className="text-xl font-bold text-navy mb-4">What to Expect</h3>
              <ul className="list-disc list-inside space-y-2 text-navy">
                <li>Camera is optional - you can keep it off if you prefer</li>
                <li>Work on your own tasks in a focused environment</li>
                <li>Take breaks as needed</li>
                <li>Use the chat for quick questions or support</li>
                <li>Respect others' focus time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 