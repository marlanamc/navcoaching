'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';
import Link from 'next/link';
import { ArrowLeft, Calendar, Mail, ExternalLink, Package, Eye, BarChart3, Clock, CheckCircle, AlertCircle } from 'lucide-react';

// Import the same interfaces and logic from the main dashboard
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
  sessions_used: number;
  sessions_remaining: number;
  status: string;
  purchased_at: string;
  expires_at: string | null;
}

interface UpcomingSession {
  id: string;
  user_id: string;
  scheduled_at: string;
  session_type: string;
  status: string;
  meeting_link: string | null;
  notes: string | null;
}

export default function ClientDetailPage() {
  const router = useRouter();
  const params = useParams();
  const clientId = params.id as string;
  
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<ClientProfile | null>(null);
  const [quizData, setQuizData] = useState<ClientQuizData | null>(null);
  const [sessionPacks, setSessionPacks] = useState<ClientSessionPack[]>([]);
  const [upcomingSessions, setUpcomingSessions] = useState<UpcomingSession[]>([]);
  const [error, setError] = useState<string | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // Quiz questions from your StructureQuiz component
  const quizQuestions = [
    "Daily schedule (with specific time blocks)",
    "Weekly meal planning", 
    "Having a consistent morning routine",
    "Deadlines (work, school, creative)",
    "Digital task manager or to-do list",
    "Accountability check-ins with another person",
    "Budgeting and tracking spending",
    "Exercise or movement plans",
    "Journaling or reflecting regularly", 
    "Using timers to focus (Pomodoro, countdowns)",
    "Habit trackers or streak apps",
    "Phone limits or screen time blockers",
    "Clean, organized environment",
    "Saying no to spontaneous plans to protect your time",
    "Writing out your goals or intentions"
  ];

  const getQuestionText = (index: number) => {
    return quizQuestions[index] || `Question ${index + 1}`;
  };

  const getResponseText = (answer: number) => {
    switch (answer) {
      case 1: return "I feel caged by this - Feels restrictive, pressure-inducing, or shame-triggering";
      case 2: return "I feel held by this - Feels supportive, flexible, or rhythm-based";
      case 3: return "I feel lost without this - Feels essential to function, clarity, or emotional safety";
      default: return `Response ${answer}`;
    }
  };

  const getQuizCategories = () => {
    if (!quizData?.answers) return null;

    const categories = {
      'Time Structure': { questions: [0, 3, 9], scores: [] as number[], total: 0 },
      'Physical/Environment': { questions: [1, 7, 12], scores: [] as number[], total: 0 },
      'Self-Regulation': { questions: [2, 6, 11], scores: [] as number[], total: 0 },
      'Task Systems': { questions: [4, 10, 14], scores: [] as number[], total: 0 },
      'Relational Support': { questions: [5, 8, 13], scores: [] as number[], total: 0 }
    };

    Object.keys(categories).forEach(category => {
      categories[category as keyof typeof categories].questions.forEach(qIndex => {
        if (quizData.answers[qIndex]) {
          categories[category as keyof typeof categories].scores.push(quizData.answers[qIndex]);
          categories[category as keyof typeof categories].total += quizData.answers[qIndex];
        }
      });
    });

    return categories;
  };

  const getCategoryInsight = (category: string, scores: number[], total: number) => {
    const avg = total / scores.length;
    const hasConflict = scores.includes(1) && scores.includes(3);
    
    if (hasConflict) {
      return { type: 'complex', message: 'Mixed - needs some but resists others' };
    } else if (avg >= 2.5) {
      return { type: 'high', message: 'Essential - thrives with this support' };
    } else if (avg <= 1.5) {
      return { type: 'low', message: 'Flexible - prefers gentle approaches' };
    } else {
      return { type: 'medium', message: 'Balanced - supportive structure works well' };
    }
  };

  useEffect(() => {
    fetchClientData();
  }, [clientId]);

  const fetchClientData = async () => {
    try {
      // Check auth first - must be the coach
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/signin');
        return;
      }

      // Check if the logged-in user is the coach (your email)
      const COACH_EMAIL = 'marlie@navcoaching.org';
      
      if (session.user.email !== COACH_EMAIL) {
        setError('Access denied. Coach privileges required.');
        return;
      }

      // Fetch client profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', clientId)
        .single();

      if (profileError) throw profileError;
      setProfile(profileData);

      // Fetch quiz data
      const { data: quizDataResult, error: quizError } = await supabase
        .from('quiz_submissions')
        .select('*')
        .eq('user_id', clientId)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (quizError && quizError.code !== 'PGRST116') throw quizError;
      setQuizData(quizDataResult);

      // Fetch session packs
      const { data: sessionPacksData, error: sessionPacksError } = await supabase
        .from('session_packs')
        .select('*')
        .eq('user_id', clientId)
        .order('purchased_at', { ascending: false });

      if (sessionPacksError) throw sessionPacksError;
      setSessionPacks(sessionPacksData || []);

      // Fetch upcoming sessions
      const { data: upcomingData, error: upcomingError } = await supabase
        .from('upcoming_sessions')
        .select('*')
        .eq('user_id', clientId)
        .eq('status', 'scheduled')
        .gte('scheduled_at', new Date().toISOString())
        .order('scheduled_at', { ascending: true });

      if (upcomingError) throw upcomingError;
      setUpcomingSessions(upcomingData || []);

    } catch (error) {
      console.error('Error fetching client data:', error);
      setError('Failed to load client data');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const getPackTypeDisplay = (packType: string) => {
    switch (packType) {
      case 'drop-in': return 'Drop-in Session';
      case '4-session': return '4-Session Pack';
      case '8-session': return '8-Session Bundle';
      default: return packType;
    }
  };

  const getTotalSessionsRemaining = () => {
    return sessionPacks
      .filter(pack => pack.status === 'active')
      .reduce((total, pack) => total + pack.sessions_remaining, 0);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-softblue/30 to-freshaqua/30 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tealblue mx-auto mb-4"></div>
          <p className="text-navy">Loading client data...</p>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-softblue/30 to-freshaqua/30 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'Client not found'}</p>
          <Link href="/coach" className="text-tealblue hover:underline">
            ← Back to Coach Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const getArchetypeEmoji = (archetype: string) => {
    switch (archetype) {
      case 'Drift Sailor': return '🌊';
      case 'Tide Navigator': return '⛵';
      case 'Deckhand Builder': return '⚓';
      case 'Lighthouse Operator': return '🛳';
      default: return '❓';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-softblue/30 to-freshaqua/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/coach" className="inline-flex items-center text-tealblue hover:text-navy mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Coach Dashboard
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-navy mb-2 font-playfair">
                {profile.first_name || (profile.email ? profile.email.split('@')[0] : 'Unknown')} {profile.last_name || ''}
              </h1>
              <div className="flex items-center space-x-4">
                <p className="text-gray-700">{profile.email}</p>
                {profile.is_member && (
                  <span className="bg-tealblue text-white text-sm px-3 py-1 rounded-full font-medium">
                    Member
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <a
                href={`mailto:${profile.email}`}
                className="p-2 bg-white rounded-lg shadow-soft text-gray-600 hover:text-tealblue transition-colors"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              
              {profile.notion_dashboard_url && (
                <a
                  href={profile.notion_dashboard_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-lg shadow-soft text-gray-600 hover:text-tealblue transition-colors"
                  title="Open Notion Dashboard"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Sessions Remaining</p>
                <p className="text-3xl font-bold text-tealblue">{getTotalSessionsRemaining()}</p>
              </div>
              <Package className="w-8 h-8 text-tealblue" />
            </div>
          </div>

          <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Upcoming Sessions</p>
                <p className="text-3xl font-bold text-purple-600">{upcomingSessions.length}</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Member Since</p>
                <p className="text-lg font-bold text-navy">
                  {new Date(profile.created_at).toLocaleDateString()}
                </p>
              </div>
              <BarChart3 className="w-8 h-8 text-emerald-600" />
            </div>
          </div>
        </div>

        {/* Quiz Results */}
        {quizData ? (
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-soft p-6 border-2 border-slate-200 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-tealblue to-ocean rounded-full flex items-center justify-center shadow-md">
                <span className="text-2xl">{getArchetypeEmoji(quizData.archetype)}</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy">Navigation Style: {quizData.archetype}</h2>
                <p className="text-gray-600">Quiz taken on {new Date(quizData.created_at).toLocaleDateString()}</p>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-navy mb-4">Structure Profile by Category</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getQuizCategories() && Object.entries(getQuizCategories()!).map(([category, data]) => {
                  const insight = getCategoryInsight(category, data.scores, data.total);
                  const bgColor = insight.type === 'high' ? 'bg-violet-50 border-violet-200' :
                                 insight.type === 'low' ? 'bg-rose-50 border-rose-200' :
                                 insight.type === 'complex' ? 'bg-orange-50 border-orange-200' :
                                 'bg-emerald-50 border-emerald-200';
                  
                  return (
                    <div key={category} className={`p-4 rounded-lg border ${bgColor}`}>
                      <h4 className="text-sm font-bold text-gray-800 mb-2">{category}</h4>
                      <div className="mb-3">
                        <div className="flex space-x-1.5 mb-3">
                          {data.scores.map((score, idx) => (
                            <div
                              key={idx}
                              className={`w-3 h-3 rounded-full ${
                                score === 1 ? 'bg-rose-400' : score === 2 ? 'bg-emerald-400' : 'bg-violet-400'
                              }`}
                            />
                          ))}
                        </div>
                        
                        <div className="relative">
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div
                              className="h-2 rounded-full bg-gradient-to-r from-rose-300 via-emerald-300 to-violet-300"
                              style={{ width: `${(data.total / 9) * 100}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-sm text-gray-600 mt-2">
                            <span>Flexible</span>
                            <span>Structured</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 font-medium">{insight.message}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Detailed Quiz Responses - Coach View */}
            <details className="bg-white/60 backdrop-blur rounded-lg border border-slate-200">
              <summary className="px-4 py-3 cursor-pointer font-medium text-navy">
                📋 View Detailed Quiz Responses
              </summary>
              <div className="px-4 pb-4 border-t border-slate-200 mt-2">
                <div className="grid gap-3 mt-3">
                  {quizData.answers?.map((answer: number, index: number) => {
                    const questionText = getQuestionText(index);
                    const responseText = getResponseText(answer);
                    const badgeColor = answer === 1 ? 'bg-rose-100 border-rose-300 text-rose-700' : 
                                     answer === 2 ? 'bg-emerald-100 border-emerald-300 text-emerald-700' : 
                                     'bg-violet-100 border-violet-300 text-violet-700';
                    const bulletColor = answer === 1 ? 'bg-rose-500' : answer === 2 ? 'bg-emerald-500' : 'bg-violet-500';
                    
                    return (
                      <div key={index} className="bg-white/80 rounded-lg p-4 border border-slate-100">
                        <div className="flex justify-between items-start mb-3">
                          <p className="text-base font-medium text-gray-800 flex-1 mr-4">
                            {index + 1}. {questionText}
                          </p>
                          <div className="text-right flex-shrink-0">
                            <span className={`text-sm font-bold px-3 py-1.5 rounded-full border ${badgeColor}`}>
                              {answer}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className={`w-3 h-3 rounded-full ${bulletColor} mt-1.5 flex-shrink-0`}></div>
                          <p className="text-sm text-gray-700 font-medium leading-relaxed">
                            {responseText}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </details>
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-8 h-8 text-yellow-600" />
              <div>
                <h3 className="font-semibold text-yellow-800">No Quiz Completed</h3>
                <p className="text-yellow-700">This client hasn't taken the structure quiz yet.</p>
              </div>
            </div>
          </div>
        )}

        {/* Session Packs */}
        {sessionPacks.length > 0 && (
          <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6 mb-8">
            <h2 className="text-xl font-bold text-navy mb-4">Session Packs</h2>
            <div className="space-y-4">
              {sessionPacks.map(pack => (
                <div key={pack.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-navy">{getPackTypeDisplay(pack.pack_type)}</h3>
                      <p className="text-sm text-gray-600">
                        Purchased: {new Date(pack.purchased_at).toLocaleDateString()}
                      </p>
                      {pack.expires_at && (
                        <p className="text-sm text-gray-600">
                          Expires: {new Date(pack.expires_at).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        {pack.status === 'active' ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mr-1" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-yellow-500 mr-1" />
                        )}
                        <span className={`text-sm font-medium ${
                          pack.status === 'active' ? 'text-green-600' : 'text-yellow-600'
                        }`}>
                          {pack.status.charAt(0).toUpperCase() + pack.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-lg font-bold text-navy mt-1">
                        {pack.sessions_remaining} / {pack.total_sessions}
                      </p>
                      <p className="text-xs text-gray-500">sessions remaining</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Sessions */}
        {upcomingSessions.length > 0 && (
          <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6">
            <h2 className="text-xl font-bold text-navy mb-4">Upcoming Sessions</h2>
            <div className="space-y-3">
              {upcomingSessions.map(session => (
                <div key={session.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-navy">{session.session_type}</p>
                      <div className="flex items-center text-gray-600 mt-1">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{formatDate(session.scheduled_at)}</span>
                      </div>
                      {session.notes && (
                        <p className="text-sm text-gray-600 mt-2">{session.notes}</p>
                      )}
                    </div>
                    {session.meeting_link && (
                      <a
                        href={session.meeting_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-opacity-90 transition text-sm inline-flex items-center"
                      >
                        Join
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}