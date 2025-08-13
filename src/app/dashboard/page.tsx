'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';
import Link from 'next/link';
import { Calendar, Clock, ExternalLink, Package, CheckCircle, AlertCircle } from 'lucide-react';

interface UserProfile {
  id: string;
  created_at: string;
  notion_dashboard_url: string | null;
  is_member: boolean;
}

interface SessionPack {
  id: string;
  user_id: string;
  pack_type: 'drop-in' | '4-session' | '8-session';
  total_sessions: number;
  sessions_used: number;
  sessions_remaining: number;
  purchased_at: string;
  expires_at: string | null;
  status: 'active' | 'expired' | 'completed';
}

interface UpcomingSession {
  id: string;
  user_id: string;
  scheduled_at: string;
  session_type: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  meeting_link: string | null;
  notes: string | null;
}

interface QuizSubmission {
  id: string;
  email: string;
  archetype: string;
  answers: any;
  created_at: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [sessionPacks, setSessionPacks] = useState<SessionPack[]>([]);
  const [upcomingSessions, setUpcomingSessions] = useState<UpcomingSession[]>([]);
  const [quizData, setQuizData] = useState<QuizSubmission | null>(null);
  const [showQuizDetails, setShowQuizDetails] = useState(false);
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

        // Fetch session packs, upcoming sessions, and quiz data
        if (session.user.id && session.user.email) {
          await Promise.all([
            fetchSessionPacks(session.user.id),
            fetchUpcomingSessions(session.user.id),
            fetchQuizData(session.user.id, session.user.email)
          ]);
        }
      } catch (error) {
        console.error('Error:', error);
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    const fetchSessionPacks = async (userId: string) => {
      try {
        const { data, error } = await supabase
          .from('session_packs')
          .select('*')
          .eq('user_id', userId)
          .order('purchased_at', { ascending: false });

        if (error) throw error;
        setSessionPacks(data || []);
      } catch (error) {
        console.error('Error fetching session packs:', error);
      }
    };

    const fetchUpcomingSessions = async (userId: string) => {
      try {
        const { data, error } = await supabase
          .from('upcoming_sessions')
          .select('*')
          .eq('user_id', userId)
          .eq('status', 'scheduled')
          .gte('scheduled_at', new Date().toISOString())
          .order('scheduled_at', { ascending: true })
          .limit(5);

        if (error) throw error;
        setUpcomingSessions(data || []);
      } catch (error) {
        console.error('Error fetching upcoming sessions:', error);
      }
    };

    const fetchQuizData = async (userId: string, email: string) => {
      try {
        console.log('Fetching quiz data for:', { userId, email }); // Debug log
        
        // Try to fetch by user_id first (preferred), then fall back to email
        let { data, error } = await supabase
          .from('quiz_submissions')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();

        console.log('Quiz data by user_id:', { data, error }); // Debug log

        // If no data found by user_id, try by email
        if (!data && !error) {
          ({ data, error } = await supabase
            .from('quiz_submissions')
            .select('*')
            .eq('email', email)
            .order('created_at', { ascending: false })
            .limit(1)
            .maybeSingle());

          console.log('Quiz data by email:', { data, error }); // Debug log

          // If found by email, update it with user_id for future queries
          if (data) {
            const { error: updateError } = await supabase
              .from('quiz_submissions')
              .update({ user_id: userId })
              .eq('id', data.id);
            
            if (updateError) {
              console.error('Error updating quiz submission with user_id:', updateError);
            }
          }
        }

        if (error) throw error;
        setQuizData(data);
        console.log('Final quiz data set:', data); // Debug log
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    checkUserAndFetchProfile();
  }, [router, supabase]);

  // Helper functions
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const getTotalSessionsRemaining = () => {
    return sessionPacks
      .filter(pack => pack.status === 'active')
      .reduce((total, pack) => total + pack.sessions_remaining, 0);
  };

  const getPackTypeDisplay = (packType: string) => {
    switch (packType) {
      case 'drop-in': return 'Drop-in Session';
      case '4-session': return '4-Session Pack';
      case '8-session': return '8-Session Bundle';
      default: return packType;
    }
  };

  const getStructurePreference = () => {
    if (!quizData?.archetype) return null;
    
    // Map your actual archetype names to structure preference
    const structureMap: { [key: string]: 'high' | 'medium' | 'low' } = {
      'Drift Sailor': 'low',           // Avoids rigid structure, needs flexibility
      'Tide Navigator': 'medium',      // Gentle structure, rhythm-based
      'Deckhand Builder': 'medium',    // Structured but adaptable
      'Lighthouse Operator': 'high'   // Craves clear, tracked structure
    };
    
    return structureMap[quizData.archetype] || 'medium';
  };

  const getPersonalizedRecommendation = () => {
    if (!quizData?.archetype || sessionPacks.length > 0) return null;
    
    const archetype = quizData.archetype;
    
    switch (archetype) {
      case 'Drift Sailor':
        return {
          pack: 'drop-in',
          reason: 'As a Drift Sailor, you avoid rigid structure. Drop-in sessions give you the flexibility to get support exactly when you need it, without the pressure of a set schedule.'
        };
      case 'Tide Navigator':
        return {
          pack: '4-session',
          reason: 'Tide Navigators thrive with gentle rhythm. The 4-session pack provides consistent support while allowing weekly adjustments based on your energy and flow.'
        };
      case 'Deckhand Builder':
        return {
          pack: '4-session',
          reason: 'As a Deckhand Builder, you like structure that adapts to real life. The 4-session pack gives you regular check-ins with the flexibility to refine your systems weekly.'
        };
      case 'Lighthouse Operator':
        return {
          pack: '8-session',
          reason: 'Lighthouse Operators crave clear structure and tracking. The 8-session bundle provides the consistent, structured support you need to build and maintain strong systems.'
        };
      default:
        return {
          pack: '4-session',
          reason: 'The 4-session pack offers a great balance of consistency and flexibility, perfect for exploring what works best for your style.'
        };
    }
  };

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

  // Quiz categories and analysis
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
      return { type: 'complex', message: 'Mixed - you need some but resist others' };
    } else if (avg >= 2.5) {
      return { type: 'high', message: 'Essential - you thrive with this support' };
    } else if (avg <= 1.5) {
      return { type: 'low', message: 'Flexible - you prefer gentle approaches here' };
    } else {
      return { type: 'medium', message: 'Balanced - supportive structure works well' };
    }
  };

  const getPersonalizedInsights = () => {
    const categories = getQuizCategories();
    if (!categories || !quizData?.answers) return [];

    const insights = [];
    const answers = quizData.answers;

    // Time structure patterns
    const dailySchedule = answers[0]; // Daily schedule
    const deadlines = answers[3]; // Deadlines
    const timers = answers[9]; // Timers
    const morningRoutine = answers[2]; // Morning routine

    if (dailySchedule === 1 && morningRoutine === 3) {
      insights.push("🕐 You need anchoring routines but resist rigid scheduling - gentle consistency is your sweet spot");
    }
    
    if (timers === 1 && deadlines <= 2) {
      insights.push("⏰ Time pressure feels restrictive to you - energy-based planning will work better than clock-based");
    }

    // Task management patterns
    const digitalTasks = answers[4]; // Digital task manager
    const habitTrackers = answers[10]; // Habit trackers
    const goalWriting = answers[14]; // Writing goals

    if (digitalTasks === 3 && habitTrackers === 1) {
      insights.push("📝 You love organizing tasks but resist tracking habits - flexible goal lists work better than rigid trackers");
    }

    // Social support patterns
    const accountability = answers[5]; // Accountability check-ins
    const journaling = answers[8]; // Journaling
    const sayingNo = answers[13]; // Saying no to plans

    if (accountability >= 2 && sayingNo === 1) {
      insights.push("🤝 You value connection but struggle with boundaries - gentle accountability without guilt is key");
    }

    if (journaling === 3 && accountability === 1) {
      insights.push("📖 You prefer private reflection over external accountability - self-guided processing works best for you");
    }

    // Environment patterns
    const mealPlanning = answers[1]; // Meal planning
    const exercise = answers[7]; // Exercise plans
    const cleanSpace = answers[12]; // Clean environment

    if (cleanSpace === 3 && mealPlanning === 1) {
      insights.push("🏠 You need external order but resist rigid meal planning - visual systems beat detailed schedules");
    }

    // Self-regulation patterns
    const budgeting = answers[6]; // Budgeting
    const phoneLimits = answers[11]; // Phone limits

    if (budgeting === 1 && phoneLimits === 1) {
      insights.push("🚫 Traditional restriction-based tools feel caging - you'll respond better to choice-based systems");
    }

    // Complex patterns
    const highStructureCount = answers.filter(a => a === 3).length;
    const lowStructureCount = answers.filter(a => a === 1).length;
    
    if (highStructureCount >= 5 && lowStructureCount >= 3) {
      insights.push("🎭 You have a complex relationship with structure - you crave it in some areas but resist it in others");
    }

    if (insights.length === 0) {
      insights.push(`${quizData.archetype === 'Drift Sailor' ? '🌊' : quizData.archetype === 'Tide Navigator' ? '⛵' : quizData.archetype === 'Deckhand Builder' ? '⚓' : '🛳'} Your responses show a consistent ${getStructurePreference()} structure preference - we'll build systems that honor this style`);
    }

    return insights;
  };

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

        {/* Membership Check */}
        {profile && !profile.is_member ? (
          <div className="space-y-6">
            {/* Personalized Recommendation based on Quiz */}
            {quizData && getPersonalizedRecommendation() && (
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg shadow-soft p-6 border border-purple-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">Personalized for Your Style</h3>
                    <p className="text-gray-700 mb-4">
                      Based on your quiz results (archetype: <span className="font-medium text-purple-600">{quizData.archetype}</span>):
                    </p>
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <p className="text-gray-700 italic">"{getPersonalizedRecommendation()?.reason}"</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/services#pricing`}
                        className="btn px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-soft hover:bg-purple-700 transition hover-lift inline-block text-center"
                      >
                        Get {
                          getPersonalizedRecommendation()?.pack === '8-session' ? '8-Session Bundle' :
                          getPersonalizedRecommendation()?.pack === '4-session' ? '4-Session Pack' : 
                          'Drop-in Session'
                        }
                      </Link>
                      <Link
                        href="/services#pricing"
                        className="btn px-6 py-3 bg-white text-purple-600 font-medium rounded-lg shadow-soft hover:bg-gray-50 transition hover-lift inline-block text-center border border-purple-200"
                      >
                        Compare All Options
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Default Welcome */}
            <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-8 content-card text-center">
              <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Welcome!</h2>
              <p className="text-navy mb-6">
                Get started with your first session for just $25, then choose the package that works best for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services#pricing"
                  className="btn px-6 py-3 bg-tealblue text-white font-bold rounded-lg shadow-soft hover:bg-opacity-90 transition hover-lift inline-block"
                >
                  View Pricing & Book
                </Link>
                <Link
                  href="/contact"
                  className="btn px-6 py-3 bg-freshaqua text-navy font-bold rounded-lg shadow-soft hover:bg-tealblue hover:text-white transition hover-lift inline-block"
                >
                  Questions? Contact Me
                </Link>
              </div>
              {!quizData && (
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800 text-sm">
                    💡 <strong>Tip:</strong> Take our <Link href="/quiz" className="underline hover:no-underline">planning style quiz</Link> to get personalized session recommendations!
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            {/* Session Overview */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Sessions Remaining */}
              <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6 content-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-navy font-playfair">Sessions Remaining</h3>
                  <Package className="w-6 h-6 text-tealblue" />
                </div>
                <div className="text-3xl font-bold text-tealblue mb-2">
                  {getTotalSessionsRemaining()}
                </div>
                <p className="text-gray-600 mb-4">Total sessions across all active packs</p>
                
                {sessionPacks.length === 0 ? (
                  <Link
                    href="/services#pricing"
                    className="btn px-4 py-2 bg-tealblue text-white font-medium rounded-lg hover:bg-opacity-90 transition text-sm"
                  >
                    Purchase Sessions
                  </Link>
                ) : (
                  <div className="space-y-2">
                    {sessionPacks
                      .filter(pack => pack.status === 'active')
                      .map(pack => (
                        <div key={pack.id} className="flex justify-between items-center text-sm">
                          <span className="text-gray-700">{getPackTypeDisplay(pack.pack_type)}</span>
                          <span className="font-medium text-navy">
                            {pack.sessions_remaining} / {pack.total_sessions}
                          </span>
                        </div>
                      ))}
                  </div>
                )}
              </div>

              {/* Next Session */}
              <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6 content-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-navy font-playfair">Next Session</h3>
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                
                {upcomingSessions.length > 0 ? (
                  <div className="space-y-3">
                    {upcomingSessions.slice(0, 1).map(session => (
                      <div key={session.id}>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-lg font-medium text-navy">
                            {formatDate(session.scheduled_at)}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-3">{session.session_type}</p>
                        {session.meeting_link && (
                          <a
                            href={session.meeting_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-tealblue hover:text-navy font-medium text-sm"
                          >
                            Join Meeting
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">No upcoming sessions scheduled</p>
                    <a
                      href="/book"
                      className="btn px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-opacity-90 transition text-sm"
                    >
                      Schedule Next Session
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Personal Notion Dashboard */}
            {profile?.notion_dashboard_url && (
              <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6 mb-8 content-card">
                <h3 className="text-xl font-bold text-navy mb-4 font-playfair">Your Personal Notion Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Access your personalized Notion workspace with goals, priorities, and session notes.
                </p>
                <a
                  href={profile.notion_dashboard_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn px-6 py-3 bg-tealblue text-white font-bold rounded-lg shadow-soft hover:bg-opacity-90 transition hover-lift inline-flex items-center"
                >
                  Open Notion Dashboard
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </div>
            )}

            {/* Quiz Results Display */}
            {quizData && (
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-soft p-6 border-2 border-slate-200 mb-8 relative overflow-hidden">
                {/* Nautical wave pattern background */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-tealblue">
                    <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="currentColor"/>
                  </svg>
                </div>
                
                <div className="relative">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-tealblue to-ocean rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-2xl">
                        {quizData.archetype === 'Drift Sailor' && '🌊'}
                        {quizData.archetype === 'Tide Navigator' && '⛵'}
                        {quizData.archetype === 'Deckhand Builder' && '⚓'}
                        {quizData.archetype === 'Lighthouse Operator' && '🛳'}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-navy mb-2">
                        Your Navigation Style: {quizData.archetype}
                      </h3>
                      <p className="text-gray-700 text-sm mb-3">
                        Quiz taken on {new Date(quizData.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  {/* Category Breakdown */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-navy mb-3 flex items-center">
                      <span className="mr-2">🎯</span> Your Structure Profile by Category
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {getQuizCategories() && Object.entries(getQuizCategories()!).map(([category, data]) => {
                        const insight = getCategoryInsight(category, data.scores, data.total);
                        const bgColor = insight.type === 'high' ? 'bg-violet-50 border-violet-200' :
                                       insight.type === 'low' ? 'bg-rose-50 border-rose-200' :
                                       insight.type === 'complex' ? 'bg-orange-50 border-orange-200' :
                                       'bg-emerald-50 border-emerald-200';
                        
                        return (
                          <div key={category} className={`p-4 rounded-lg border ${bgColor}`}>
                            <h5 className="text-sm font-bold text-gray-800 mb-2">{category}</h5>
                            <div className="mb-3">
                              {/* Dots showing individual responses */}
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
                              
                              {/* Progress bar */}
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

                  {/* Personalized Insights */}
                  {getPersonalizedInsights().length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-navy mb-3 flex items-center">
                        <span className="mr-2">💡</span> Your Personal Coaching Insights
                      </h4>
                      <div className="space-y-2">
                        {getPersonalizedInsights().map((insight, index) => (
                          <div key={index} className="bg-white/80 backdrop-blur rounded-lg p-3 border border-slate-200">
                            <p className="text-sm text-gray-700">{insight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/80 backdrop-blur rounded-lg p-4 border border-slate-200">
                      <h4 className="font-semibold text-navy mb-2 flex items-center">
                        <span className="mr-2">📊</span> Overall Summary
                      </h4>
                      <div className="text-sm text-gray-600">
                        <p>Total responses: {quizData.answers?.length || 0}</p>
                        <p>Structure preference: {
                          getStructurePreference() === 'high' ? 'High Structure' :
                          getStructurePreference() === 'low' ? 'Flexible Structure' : 'Balanced Structure'
                        }</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur rounded-lg p-4 border border-slate-200">
                      <h4 className="font-semibold text-navy mb-2 flex items-center">
                        <span className="mr-2">⛵</span> Your Recommended Approach
                      </h4>
                      <p className="text-sm text-gray-600">
                        {quizData.archetype === 'Drift Sailor' && 'Low-pressure coaching with flexible, mood-based structure'}
                        {quizData.archetype === 'Tide Navigator' && 'Gentle structure with rhythm-based planning'}
                        {quizData.archetype === 'Deckhand Builder' && 'Modular systems with regular adjustments'}
                        {quizData.archetype === 'Lighthouse Operator' && 'Clear structure with visual planning and tracking'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Detailed Quiz Breakdown */}
                  <div className="mt-6 bg-white/60 backdrop-blur rounded-lg border border-slate-200">
                    <button
                      onClick={() => setShowQuizDetails(!showQuizDetails)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-white/40 transition-colors rounded-lg"
                    >
                      <span className="font-medium text-navy">📋 View Question-by-Question Results</span>
                      <span className={`transform transition-transform ${showQuizDetails ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    
                    {showQuizDetails && (
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
                        
                        <div className="mt-4 p-3 bg-tealblue/10 rounded-lg border border-tealblue/20">
                          <p className="text-sm text-tealblue font-medium">
                            💡 <strong>Your Structure Style:</strong> {(() => {
                              const totalScore = quizData.answers?.reduce((sum: number, score: number) => sum + score, 0) || 0;
                              if (totalScore <= 22) return "🌊 Flexible & Flow-Based";
                              else if (totalScore <= 30) return "⛵ Gentle & Rhythm-Based";  
                              else if (totalScore <= 37) return "⚓ Structured & Adaptable";
                              else return "🛳 Clear & Systematic";
                            })()}
                            <span className="ml-2 text-xs text-gray-600">
                              (Total responses: {quizData.answers?.reduce((sum: number, score: number) => sum + score, 0)} points)
                            </span>
                          </p>
                          <div className="mt-2 text-xs text-gray-600">
                            <p><strong>How scoring works:</strong></p>
                            <p>1 = "I feel caged" • 2 = "I feel held" • 3 = "I feel lost without this"</p>
                            <p>Higher scores indicate you thrive with more structure - there's no "right" score! 🎯</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Link
                      href="/quiz"
                      className="text-tealblue hover:text-ocean underline text-sm font-medium"
                    >
                      ↻ Retake Quiz
                    </Link>
                  </div>
                </div>
              </div>
            )}


            {/* Session Packs Details */}
            {sessionPacks.length > 0 && (
              <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6 mb-8 content-card">
                <h3 className="text-xl font-bold text-navy mb-4 font-playfair">Your Session Packs</h3>
                <div className="space-y-4">
                  {sessionPacks.map(pack => (
                    <div key={pack.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-navy">{getPackTypeDisplay(pack.pack_type)}</h4>
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

            {/* Quiz Recommendation for Members */}
            {!quizData && (
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-soft p-6 border-2 border-slate-200 mb-8 relative overflow-hidden">
                {/* Nautical wave pattern background */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-tealblue">
                    <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="currentColor"/>
                  </svg>
                </div>
                
                <div className="flex items-start space-x-4 relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-tealblue to-ocean rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-2xl">🧭</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-navy mb-2 flex items-center">
                      Discover Your Navigation Style
                      <span className="ml-2 text-sm">⛵</span>
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Take our quick Structure Quiz to help me chart the best course for your unique ADHD brain. 
                      Your results will help me customize our sessions and your Notion dashboard to match your working style.
                    </p>
                    <div className="bg-white/80 backdrop-blur rounded-lg p-4 mb-4 border border-slate-200">
                      <p className="text-slate-700 text-sm">
                        <span className="text-tealblue font-bold">⚓ Why it helps:</span> The quiz reveals whether you're a <span className="font-medium text-slate-800">Drift Sailor 🌊</span>, <span className="font-medium text-slate-800">Tide Navigator ⛵</span>, 
                        <span className="font-medium text-slate-800">Deckhand Builder ⚓</span>, or <span className="font-medium text-slate-800">Lighthouse Operator 🛳</span> - each archetype thrives with different approaches to structure and accountability.
                      </p>
                    </div>
                    <Link
                      href="/quiz"
                      className="btn px-6 py-3 bg-gradient-to-r from-tealblue to-ocean text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-flex items-center"
                    >
                      <span className="mr-2">🧭</span>
                      Chart Your Course (5 min)
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* All Upcoming Sessions */}
            {upcomingSessions.length > 1 && (
              <div className="bg-white bg-opacity-90 rounded-lg shadow-soft p-6 content-card">
                <h3 className="text-xl font-bold text-navy mb-4 font-playfair">Upcoming Sessions</h3>
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
                            className="btn px-3 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-opacity-90 transition text-sm inline-flex items-center"
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
          </>
        )}
      </div>
    </div>
  );
} 