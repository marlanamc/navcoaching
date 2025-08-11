'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsLoggedIn(true);
      }
    };
    checkUser();
  }, [supabase.auth]);

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

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });
      if (error) throw error;
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred during sign in');
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  if (isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-soft content-card text-center">
          <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">You're already signed in!</h2>
          <div className="mb-6">
            <Link href="/dashboard" className="btn px-6 py-3 bg-tealblue text-white font-bold rounded-lg shadow-soft hover:bg-opacity-90 transition hover-lift inline-block mr-2">Go to Dashboard</Link>
            <button onClick={handleSignOut} className="btn px-6 py-3 bg-freshaqua text-navy font-bold rounded-lg shadow-soft hover:bg-tealblue hover:text-white transition hover-lift inline-block">Log Out</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-soft content-card">
        <h1 className="text-3xl font-bold text-navy font-playfair mb-8 text-center">Sign In</h1>
        <div className="mb-8 text-center">
           <p className="text-navy">
             New here? Have questions?{' '}
             <Link href="/contact" className="text-tealblue hover:text-navy font-semibold transition-colors">Contact me</Link>
           </p>
        </div>
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error === 'no-account' ? (
              <span>
                No account found with that email. If you are interested in joining, please{' '}
                <Link href="/contact" className="text-tealblue underline hover:text-navy">contact us</Link> or{' '}
                <Link href="/services" className="text-tealblue underline hover:text-navy">learn more</Link>.
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
            <label htmlFor="email" className="block text-navy font-semibold mb-2">Email</label>
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
            <label htmlFor="password" className="block text-navy font-semibold mb-2">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tealblue focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn px-6 py-3 bg-tealblue text-white font-bold rounded-lg shadow-soft hover:bg-opacity-90 transition hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full btn px-6 py-3 bg-white text-navy font-bold rounded-lg shadow-soft hover:bg-gray-50 transition hover-lift border border-gray-300 flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
} 