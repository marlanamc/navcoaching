'use client';

import React, { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import AuthForm from '@/components/auth/AuthForm'

export default function Members() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<{ notion_dashboard_url?: string } | null>(null)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [supabase.auth])

  useEffect(() => {
    const getProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('notion_dashboard_url')
        .eq('id', user.id)
        .single();
      setProfile(data);
    };
    if (user) getProfile();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-navy"></div>
      </div>
    )
  }

  if (!user) {
    return <AuthForm />
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Members Area</h1>
        <button
          onClick={() => supabase.auth.signOut()}
          className="bg-navy text-white px-4 py-2 rounded-md hover:bg-deepteal transition-colors"
        >
          Sign Out
        </button>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome, {(
            user.user_metadata?.full_name ||
            user.user_metadata?.name ||
            user.email
          ).split(' ')[0]}!
        </h2>
          <p className="text-gray-600 mb-6">
            This is your private space to access your Notion dashboard and resources, track progress, and manage your coaching journey.
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Quick Links</h3>
              <ul className="space-y-2">
                {profile?.notion_dashboard_url && (
                  <li>
                    <a
                      href={profile.notion_dashboard_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      View Your Notion Dashboard
                    </a>
                  </li>
                )}
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Access Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Schedule/Reschedule Sessions
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Recent Activity</h3>
              <p className="text-gray-600">No recent activity to display.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 