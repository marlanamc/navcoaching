'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';
import Link from 'next/link';
import { Search, Filter, Calendar, Users, BarChart3, Eye, ExternalLink, Mail, Phone } from 'lucide-react';

interface ClientProfile {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  is_member: boolean;
  notion_dashboard_url: string | null;
  created_at: string;
}

interface ClientQuizData {
  id: string;
  user_id: string;
  email: string;
  archetype: string;
  answers: number[];
  created_at: string;
}

interface ClientSessionPack {
  id: string;
  user_id: string;
  pack_type: string;
  total_sessions: number;
  sessions_remaining: number;
  status: string;
  purchased_at: string;
}

interface ClientData {
  profile: ClientProfile;
  quizData: ClientQuizData | null;
  sessionPacks: ClientSessionPack[];
  totalSessionsRemaining: number;
}

export default function CoachDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [clients, setClients] = useState<ClientData[]>([]);
  const [filteredClients, setFilteredClients] = useState<ClientData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // all, members, quiz-taken, has-sessions
  const [error, setError] = useState<string | null>(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    checkAuthAndFetchClients();
  }, []);

  useEffect(() => {
    filterClients();
  }, [searchTerm, filterType, clients]);

  const checkAuthAndFetchClients = async () => {
    try {
      // Check if user is logged in and is the coach
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push('/signin');
        return;
      }

      // Check if the logged-in user is the coach (your email)
      const COACH_EMAIL = 'marlie@navcoaching.org';
      
      if (session.user.email !== COACH_EMAIL) {
        setError('Access denied. Coach privileges required.');
        setIsAuthorized(false);
        setIsLoading(false);
        return;
      }

      setIsAuthorized(true);

      await fetchAllClientsData();
    } catch (error) {
      console.error('Error checking auth:', error);
      setError('Authentication error');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAllClientsData = async () => {
    try {
      // Fetch all profiles
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (profilesError) throw profilesError;

      // Fetch all quiz data
      const { data: quizData, error: quizError } = await supabase
        .from('quiz_submissions')
        .select('*');

      if (quizError) throw quizError;

      // Fetch all session packs
      const { data: sessionPacks, error: sessionError } = await supabase
        .from('session_packs')
        .select('*');

      if (sessionError) throw sessionError;

      // Combine data for each client
      const clientsData: ClientData[] = profiles.map(profile => {
        const clientQuiz = quizData?.find(quiz => 
          quiz.user_id === profile.id || quiz.email === profile.email
        ) || null;

        const clientPacks = sessionPacks?.filter(pack => pack.user_id === profile.id) || [];
        const totalSessionsRemaining = clientPacks
          .filter(pack => pack.status === 'active')
          .reduce((total, pack) => total + pack.sessions_remaining, 0);

        return {
          profile,
          quizData: clientQuiz,
          sessionPacks: clientPacks,
          totalSessionsRemaining
        };
      });

      setClients(clientsData);
    } catch (error) {
      console.error('Error fetching clients data:', error);
      setError('Failed to load client data');
    }
  };

  const filterClients = () => {
    let filtered = clients;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(client => 
        client.profile.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.profile.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.profile.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.quizData?.archetype.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply type filter
    switch (filterType) {
      case 'members':
        filtered = filtered.filter(client => client.profile.is_member);
        break;
      case 'quiz-taken':
        filtered = filtered.filter(client => client.quizData !== null);
        break;
      case 'has-sessions':
        filtered = filtered.filter(client => client.totalSessionsRemaining > 0);
        break;
      case 'no-quiz':
        filtered = filtered.filter(client => client.quizData === null);
        break;
    }

    setFilteredClients(filtered);
  };

  const getArchetypeEmoji = (archetype: string | null) => {
    if (!archetype) return '❓';
    switch (archetype) {
      case 'Drift Sailor': return '🌊';
      case 'Tide Navigator': return '⛵';
      case 'Deckhand Builder': return '⚓';
      case 'Lighthouse Operator': return '🛳';
      default: return '❓';
    }
  };

  const getClientStats = () => {
    const totalClients = clients.length;
    const members = clients.filter(c => c.profile.is_member).length;
    const withQuiz = clients.filter(c => c.quizData !== null).length;
    const withSessions = clients.filter(c => c.totalSessionsRemaining > 0).length;

    return { totalClients, members, withQuiz, withSessions };
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-softblue/30 to-freshaqua/30 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tealblue mx-auto mb-4"></div>
          <p className="text-navy">Loading coach dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-softblue/30 to-freshaqua/30 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-tealblue text-white rounded-lg hover:bg-opacity-90"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-softblue/30 to-freshaqua/30 flex items-center justify-center">
        <div className="text-center">
          <p className="text-navy mb-4">Access denied. Coach privileges required.</p>
          <Link href="/" className="text-tealblue hover:underline">Return to home</Link>
        </div>
      </div>
    );
  }

  const stats = getClientStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-softblue/30 to-freshaqua/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-navy mb-2 font-playfair">Coach Dashboard</h1>
          <p className="text-gray-700">Manage your clients and view their progress</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Clients</p>
                <p className="text-3xl font-bold text-navy">{stats.totalClients}</p>
              </div>
              <Users className="w-8 h-8 text-tealblue" />
            </div>
          </div>
          
          <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Members</p>
                <p className="text-3xl font-bold text-navy">{stats.members}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Quiz Completed</p>
                <p className="text-3xl font-bold text-navy">{stats.withQuiz}</p>
              </div>
              <Eye className="w-8 h-8 text-emerald-600" />
            </div>
          </div>

          <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Sessions</p>
                <p className="text-3xl font-bold text-navy">{stats.withSessions}</p>
              </div>
              <Calendar className="w-8 h-8 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search clients by name, email, or archetype..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-tealblue"
                />
              </div>
            </div>

            {/* Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-tealblue"
              >
                <option value="all">All Clients</option>
                <option value="members">Members Only</option>
                <option value="quiz-taken">Quiz Completed</option>
                <option value="no-quiz">No Quiz</option>
                <option value="has-sessions">Has Sessions</option>
              </select>
            </div>
          </div>
        </div>

        {/* Clients List */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-soft overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-navy">Clients ({filteredClients.length})</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredClients.map(client => (
              <div key={client.profile.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  {/* Client Info */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-tealblue/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">
                        {getArchetypeEmoji(client.quizData?.archetype || null)}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-navy">
                          {client.profile.first_name || (client.profile.email ? client.profile.email.split('@')[0] : 'Unknown')} {client.profile.last_name || ''}
                        </h3>
                        {client.profile.is_member && (
                          <span className="bg-tealblue text-white text-xs px-2 py-1 rounded-full font-medium">
                            Member
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-2">{client.profile.email}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        {client.quizData ? (
                          <div className="flex items-center space-x-1">
                            <span className="text-gray-500">Archetype:</span>
                            <span className="font-medium text-navy">{client.quizData.archetype}</span>
                            <span className="text-xs text-gray-400">
                              ({new Date(client.quizData.created_at).toLocaleDateString()})
                            </span>
                          </div>
                        ) : (
                          <span className="text-yellow-600 text-xs">No quiz completed</span>
                        )}
                        
                        {client.totalSessionsRemaining > 0 && (
                          <div className="flex items-center space-x-1">
                            <span className="text-gray-500">Sessions:</span>
                            <span className="font-medium text-tealblue">{client.totalSessionsRemaining} remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2">
                    {client.profile.notion_dashboard_url && (
                      <a
                        href={client.profile.notion_dashboard_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-tealblue transition-colors"
                        title="Open Notion Dashboard"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    
                    <a
                      href={`mailto:${client.profile.email}`}
                      className="p-2 text-gray-400 hover:text-tealblue transition-colors"
                      title="Send Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>

                    <Link
                      href={`/coach/client/${client.profile.id}`}
                      className="px-3 py-1 bg-tealblue text-white text-xs rounded-lg hover:bg-opacity-90 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

                {/* Session Packs Summary */}
                {client.sessionPacks.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {client.sessionPacks
                        .filter(pack => pack.status === 'active')
                        .map(pack => (
                          <div key={pack.id} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full">
                            {pack.pack_type}: {pack.sessions_remaining}/{pack.total_sessions}
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {filteredClients.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No clients found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}