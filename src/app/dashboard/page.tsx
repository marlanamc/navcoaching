'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';
import Link from 'next/link';

interface UserProfile {
  id: string;
  created_at: string;
  notion_dashboard_url: string | null;
  is_member: boolean;
}

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string>('');
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    const checkUserAndFetchProfile = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          router.push('/members-only');
          return;
        }

        // Get first name from user metadata
        const fullName = session.user.user_metadata?.full_name || '';
        const nameParts = fullName.split(' ');
        setFirstName(nameParts[0] || 'Member');

        console.log('User ID:', session.user.id); // Debug log

        // Fetch user profile with Notion dashboard URL and membership status
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('id, created_at, notion_dashboard_url, is_member')
          .eq('id', session.user.id)
          .single();

        console.log('Profile data:', profile); // Debug log
        console.log('Profile error:', error); // Debug log

        if (error) {
          if (error.code === 'PGRST116') {
            // Profile doesn't exist, create it
            const { data: newProfile, error: insertError } = await supabase
              .from('profiles')
              .insert([
                {
                  id: session.user.id,
                  notion_dashboard_url: null
                }
              ])
              .select()
              .single();

            if (insertError) throw insertError;
            setProfile(newProfile);
          } else {
            throw error;
          }
        } else {
          setProfile(profile);
        }
      } catch (error) {
        console.error('Error:', error);
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    checkUserAndFetchProfile();
  }, [router, supabase]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-48 bg-gray-200 rounded"></div>
              <div className="h-48 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
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
            Welcome, {firstName}!
          </h1>
          <button
            onClick={handleSignOut}
            className="btn px-6 py-2 bg-freshaqua text-navy font-bold rounded-lg shadow-soft hover:bg-tealblue hover:text-white transition hover-lift"
          >
            Sign Out
          </button>
        </div>

        {/* Main Dashboard */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-8 mb-8 content-card">
          <h2 className="text-2xl font-bold text-navy mb-6 font-playfair">Your Dashboard</h2>
          
          {/* Membership Check */}
          {profile && !profile.is_member ? (
            <div className="mb-8 p-4 bg-softblue rounded-lg text-center">
              <h3 className="text-xl font-bold text-navy mb-2">You're signed up!</h3>
              <p className="text-navy mb-4">
                Upgrade to a paid membership to access resources and your personalized Notion dashboard.
              </p>
              <Link
                href="/pricing"
                className="btn px-6 py-3 bg-tealblue text-white font-bold rounded-lg shadow-soft hover:bg-opacity-90 transition hover-lift inline-block"
              >
                Upgrade Membership
              </Link>
            </div>
          ) : (
            <>
              {/* Notion Dashboard Link */}
              {profile?.notion_dashboard_url ? (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-navy mb-4">Notion Workspace</h3>
                  <a
                    href={profile.notion_dashboard_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn px-6 py-3 bg-tealblue text-white font-bold rounded-lg shadow-soft hover:bg-opacity-90 transition hover-lift inline-flex items-center"
                  >
                    <span>Open Notion Dashboard</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              ) : null}

              {/* Quick Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-softblue rounded-lg p-6">
                  <h3 className="text-xl font-bold text-navy mb-4">ADHD Worksheets</h3>
                  <p className="text-navy mb-4">
                    Access your personalized worksheets and templates designed for ADHD brains.
                  </p>
                  <Link
                    href="/worksheets"
                    className="btn px-4 py-2 bg-tealblue text-white font-bold rounded-lg shadow-soft hover:bg-opacity-90 transition hover-lift inline-flex items-center"
                  >
                    View Worksheets
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>

                <div className="bg-softblue rounded-lg p-6">
                  <h3 className="text-xl font-bold text-navy mb-4">Body Doubling Sessions</h3>
                  <p className="text-navy mb-4">
                    Join virtual coworking sessions with other members. Camera optional, productivity guaranteed.
                  </p>
                  <Link
                    href="/body-doubling"
                    className="btn px-4 py-2 bg-tealblue text-white font-bold rounded-lg shadow-soft hover:bg-opacity-90 transition hover-lift inline-flex items-center"
                  >
                    Join Session
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Recent Activity */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-8 content-card">
          <h2 className="text-2xl font-bold text-navy mb-6 font-playfair">Recent Activity</h2>
          <div className="space-y-4">
            <div className="p-4 bg-softblue rounded-lg">
              <p className="text-navy">Your recent activity will appear here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 