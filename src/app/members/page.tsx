'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';
import LegalDisclaimer from '@/components/common/LegalDisclaimer';

export default function MembersArea() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          router.push('/dashboard');
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
      } finally {
        setIsLoading(false);
      }
    };
    checkUser();
  }, [router, supabase.auth]);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        // If error is 'Invalid login credentials', show a custom message
        if (error.message && error.message.toLowerCase().includes('invalid login credentials')) {
          setError('no-account');
        } else {
          setError(error.message || 'An error occurred during sign in');
        }
        setIsLoading(false);
        return;
      }
      router.push('/dashboard');
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred during sign in');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsResettingPassword(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;
      setSuccessMessage('Password reset instructions have been sent to your email.');
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred while sending reset instructions');
    } finally {
      setIsResettingPassword(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent'
          }
        }
      });

      if (error) throw error;
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred during sign in');
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-playfair text-center">
        Member <span className="text-tealblue">Resources</span>
      </h1>
      
      {/* Member Sign In Section */}
      <section className="mb-12">
        <div className="max-w-md mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-soft content-card">
          <h2 className="text-2xl font-bold text-navy mb-4 font-playfair text-center">
            Member Sign In
          </h2>
          <p className="text-center mb-6">
            Sign in to access your personalized dashboard and resources.
          </p>
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error === 'no-account' ? (
                <span>
                  No account found with that email. If you are interested in joining, please{' '}
                  <Link href="/signup" className="text-tealblue underline hover:text-navy">sign up</Link> or{' '}
                  <Link href="/contact" className="text-tealblue underline hover:text-navy">contact us</Link>.
                </span>
              ) : (
                error
              )}
            </div>
          )}
          {successMessage && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {successMessage}
            </div>
          )}
          <form onSubmit={handleEmailSignIn} className="space-y-6 mb-8">
            <div>
              <label htmlFor="email" className="block text-navy font-semibold mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tealblue focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-navy font-semibold mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tealblue focus:border-transparent"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-tealblue focus:ring-tealblue border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-navy">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                onClick={handlePasswordReset}
                disabled={isResettingPassword}
                className="text-sm text-tealblue hover:text-navy font-semibold transition-colors"
              >
                {isResettingPassword ? 'Sending...' : 'Forgot password?'}
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn px-6 py-3 bg-tealblue text-white font-bold rounded-lg shadow-soft hover:bg-opacity-90 transition hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Google Sign In */}
          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full btn px-6 py-3 bg-white text-navy font-bold rounded-lg shadow-soft hover:bg-gray-50 transition hover-lift border border-gray-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </button>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-navy">
              Don't have an account?{' '}
              <Link href="/signup" className="text-tealblue hover:text-navy font-semibold transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Member Benefits Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy mb-8 text-center font-playfair">
          What's Included in Your Membership
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Dashboard */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-soft content-card">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 bg-softblue rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-navy mb-2">Personal Dashboard</h3>
                <p className="text-gray-600">
                  Your central command center for tracking goals, progress, and session notes. 
                  Access your personalized workspace anytime.
                </p>
              </div>
            </div>
          </div>

          {/* ADHD Worksheets */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-soft content-card">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 bg-softblue rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-navy mb-2">ADHD Worksheets</h3>
                <p className="text-gray-600">
                  Exclusive worksheets and templates designed specifically for ADHD brains. 
                  Download and use them anytime.
                </p>
              </div>
            </div>
          </div>

          {/* AI Tools Guide */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-soft content-card">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 bg-softblue rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-navy mb-2">AI Tools Guide</h3>
                <p className="text-gray-600">
                  Curated collection of AI tools that work well with ADHD brains. 
                  Learn how to implement them effectively.
                </p>
              </div>
            </div>
          </div>

          {/* Body Doubling Sessions */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-soft content-card">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 bg-softblue rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-navy mb-2">Body Doubling Sessions</h3>
                <p className="text-gray-600">
                  Join virtual coworking sessions with other members. 
                  Camera on optional, productivity guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="mb-12">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-soft content-card">
          <h2 className="text-2xl font-bold text-navy mb-4 font-playfair text-center">
            Ready to Get Started?
          </h2>
          <p className="text-center mb-6 max-w-2xl mx-auto">
            Join now to access all member resources, including your personal dashboard, 
            ADHD worksheets, AI tools guide, and body doubling sessions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/signup" 
              className="btn px-8 py-3 bg-tealblue text-white font-bold rounded-lg shadow-soft hover:bg-opacity-90 transition hover-lift text-lg"
            >
              Become a Member
            </Link>
            <Link 
              href="/contact" 
              className="btn cta px-8 py-3 bg-freshaqua text-navy font-bold rounded-lg shadow-soft hover:bg-tealblue hover:text-white transition hover-lift text-lg"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
      
      {/* Legal Disclaimer */}
      <div className="max-w-3xl mx-auto mb-12">
        <LegalDisclaimer />
      </div>
    </div>
  );
}
 