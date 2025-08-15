'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Zap, Shield, Fuel, MapPin, Anchor, Compass, CloudRain, Map, Radio, Settings, AlertTriangle, LifeBuoy, Users, Trophy, BookCopy, Monitor, Calendar, GraduationCap, CheckSquare, Phone, Briefcase, Clock, Brain, Play, Cog, MessageCircle, FileText, HelpCircle, Video, Camera, Timer, ClipboardList, Wrench, History, TrendingUp, Stethoscope, CreditCard, CalendarX, UserCheck, MessageSquare, Crown, User } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('framework');
  const [showExamples, setShowExamples] = useState(false);

  // Handle URL hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validTabs = ['framework', 'dashboard', 'who', 'value', 'not', 'testimonials', 'faq', 'policy', 'process', 'resources'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
        // Scroll to the tabbed section
        setTimeout(() => {
          const tabbedSection = document.getElementById('tabbed-section');
          if (tabbedSection) {
            const headerHeight = 80; // Account for sticky header
            const sectionTop = tabbedSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
          }
        }, 100); // Small delay to ensure tab content is rendered
      }
    };

    // Check hash on component mount
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-blue-300 via-purple-300 via-pink-300 to-indigo-900">
      <div className="container mx-auto px-4">
      <header role="banner" className="w-full">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12 lg:py-16 text-center">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Navigating the Storm, Accountability Coaching"
            className="mx-auto h-32 w-32 sm:h-40 sm:w-40 mb-6"
          />

          {/* Headings */}
          <div className="mb-6 px-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy font-playfair mb-4 leading-tight">
              Navigating the Storm
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold tracking-tight text-navy font-playfair leading-tight">
              Join a Crew That Helps You Navigate Executive Dysfunction
            </h2>
          </div>
          {/* Benefits Cards */}
          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-2">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-white/60">
              <Users className="mx-auto h-12 w-12 text-fuchsia-400 mb-4" />
              <h3 className="text-lg font-bold text-navy mb-2">Daily Body Doubling<br />Sessions</h3>
              <p className="text-sm text-gray-700">4 hours of scheduled sessions every<br />weekday + member-led options</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-white/60">
              <Compass className="mx-auto h-12 w-12 text-violet-400 mb-4" />
              <h3 className="text-lg font-bold text-navy mb-2">Weekly Planning<br />Calls</h3>
              <p className="text-sm text-gray-700">Sunday group calls to plan your<br />week ahead together</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-white/60">
              <Users className="mx-auto h-12 w-12 text-emerald-400 mb-4" />
              <h3 className="text-lg font-bold text-navy mb-2">1-on-1 Accountability<br />Coaching</h3>
              <p className="text-sm text-gray-700">Personal coaching calls based on<br />your membership tier</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-white/60">
              <GraduationCap className="mx-auto h-12 w-12 text-sky-400 mb-4" />
              <h3 className="text-lg font-bold text-navy mb-2">Monthly<br />Workshops</h3>
              <p className="text-sm text-gray-700">Skills training, ADHD tools, and<br />crisis protocols. Always recorded.</p>
            </div>
          </div>

          <p className="mt-6 sm:mt-8 text-lg sm:text-xl lg:text-2xl tracking-tight text-navy font-medium text-center px-4">
            Not another app. Not AI. Not another overwhelming system.
          </p>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl tracking-tight text-navy font-bold text-center px-4">
            The power of community + the structure you need.
          </p>

          {/* Trust Row */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-navy px-4">
            <span className="bg-white/80 backdrop-blur px-3 sm:px-4 py-2 rounded-full border border-white/60">ADHD specialized</span>
            <span className="bg-white/80 backdrop-blur px-3 sm:px-4 py-2 rounded-full border border-white/60">Trauma informed</span>
            <span className="bg-white/80 backdrop-blur px-3 sm:px-4 py-2 rounded-full border border-white/60">No diagnosis required</span>
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-12 text-center px-4">
            <Link 
              href="/membership" 
              className="inline-block bg-tealblue text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-deepteal transition-colors text-lg sm:text-xl w-full sm:w-auto max-w-xs"
            >
              Join the Crew →
            </Link>
            
          </div>
        </div>
      </header>


      {/* How It Works */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy mb-4 font-playfair">
            How Community Accountability Works
          </h2>
          <p className="text-xl text-navy mb-8">
            Daily support, weekly planning, monthly skill-building - all in one community
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Daily Support */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-white/60">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-violet-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-violet-700" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Daily Body Doubling</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-violet-500 mr-2">•</span>
                <span>10 AM - 12 PM & 1 PM - 3 PM every weekday</span>
              </li>
              <li className="flex items-start">
                <span className="text-violet-500 mr-2">•</span>
                <span>Work alongside others virtually</span>
              </li>
              <li className="flex items-start">
                <span className="text-violet-500 mr-2">•</span>
                <span>Camera optional, no pressure</span>
              </li>
              <li className="flex items-start">
                <span className="text-violet-500 mr-2">•</span>
                <span>Member-led sessions available anytime</span>
              </li>
            </ul>
          </div>
          
          {/* Weekly Planning */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-white/60">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-sky-700" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Weekly Compass Calls</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-sky-500 mr-2">•</span>
                <span>Sunday 7-9 PM group planning calls</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-500 mr-2">•</span>
                <span>Reflect on wins and challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-500 mr-2">•</span>
                <span>Set intentions for the week ahead</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-500 mr-2">•</span>
                <span>Connect with your crew</span>
              </li>
            </ul>
          </div>
          
          {/* Monthly Learning */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-white/60">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-teal-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Monthly Workshops</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                <span>Last Friday night of each month</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                <span>ADHD tools, planning strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                <span>Crisis protocols and seasonal themes</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                <span>Always recorded for later access</span>
              </li>
            </ul>
          </div>
        </div>
        
      </section>

      {/* Tabbed Interface */}
      <section id="tabbed-section" className="py-8 bg-white/90 rounded-2xl mb-8">
        <div className="max-w-6xl mx-auto px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-gray-200 pb-4">
            <button
              onClick={() => {
                setActiveTab('framework');
                window.history.pushState(null, '', '#framework');
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition text-sm ${
                activeTab === 'framework'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🧭 Framework
            </button>
            <button
              onClick={() => {
                setActiveTab('dashboard');
                window.history.pushState(null, '', '#dashboard');
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition text-sm ${
                activeTab === 'dashboard'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📊 Dashboard
            </button>
            <button
              onClick={() => {
                setActiveTab('who');
                window.history.pushState(null, '', '#who');
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition text-sm ${
                activeTab === 'who'
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              👥 Who It's For
            </button>
            <button
              onClick={() => {
                setActiveTab('value');
                window.history.pushState(null, '', '#value');
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition text-sm ${
                activeTab === 'value'
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              💰 Value
            </button>
            <button
              onClick={() => {
                setActiveTab('not');
                window.history.pushState(null, '', '#not');
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition text-sm ${
                activeTab === 'not'
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ❌ What It's NOT
            </button>
            <button
              onClick={() => {
                setActiveTab('faq');
                window.history.pushState(null, '', '#faq');
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition text-sm ${
                activeTab === 'faq'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ❓ FAQ
            </button>
            <button
              onClick={() => {
                setActiveTab('testimonials');
                window.history.pushState(null, '', '#testimonials');
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition text-sm ${
                activeTab === 'testimonials'
                  ? 'bg-indigo-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              💬 Testimonials
            </button>
            <button
              onClick={() => {
                setActiveTab('policy');
                window.history.pushState(null, '', '#policy');
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition text-sm ${
                activeTab === 'policy'
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📅 Scheduling
            </button>
            <button
              onClick={() => {
                setActiveTab('process');
                window.history.pushState(null, '', '#process');
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition text-sm ${
                activeTab === 'process'
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🚀 Get Started
            </button>
            <button
              onClick={() => {
                setActiveTab('resources');
                window.history.pushState(null, '', '#resources');
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition text-sm ${
                activeTab === 'resources'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🛟 Free Resources
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="min-h-[400px]">
            
            {/* Framework Tab */}
            {activeTab === 'framework' && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-navy mb-6 text-center font-playfair">
                  The Navigating the Storm Framework
                </h3>
                
                <p className="text-navy font-medium text-lg leading-relaxed text-center mb-8 max-w-4xl mx-auto">
                  This step-by-step accountability system I developed is backed by research in ADHD, executive function, and habit formation; flexible, judgment-free, and built so you can start again from any point.
                </p>
                
                {/* Eight Levels Framework Detail */}
                <div className="relative bg-gradient-to-br from-ocean/20 via-tealblue/10 to-navy/15 rounded-3xl p-8 mt-8 border-2 border-tealblue/30 shadow-2xl overflow-hidden">
                  {/* Subtle nautical pattern overlay */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23006B7D'/%3E%3C/svg%3E")`,
                    backgroundSize: '80px 80px'
                  }}></div>
                  
                  {/* Decorative nautical corners */}
                  <div className="absolute top-4 left-4 text-tealblue/20"><Anchor className="w-8 h-8" /></div>
                  <div className="absolute top-4 right-4 text-tealblue/20 transform rotate-45"><Compass className="w-8 h-8" /></div>
                  <div className="absolute bottom-4 left-4 text-tealblue/20"><CloudRain className="w-8 h-8" /></div>
                  <div className="absolute bottom-4 right-4 text-tealblue/20"><MapPin className="w-8 h-8" /></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-4">
                      <Map className="w-8 h-8 text-navy mr-3" />
                      <h4 className="text-3xl font-bold text-navy text-center font-playfair drop-shadow-sm">
                        Your Accountability Map
                      </h4>
                    </div>
                    
                    <p className="text-center text-navy font-medium mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
                      We start by grounding your energy and setting you up for a steady sail.
                    </p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Level 1: Dockside Prep */}
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border-2 border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center shadow-md">
                            <Anchor className="w-6 h-6 text-teal-700" />
                          </div>
                        </div>
                        <h5 className="text-lg font-bold text-navy mb-3 text-center">1. Dockside Prep</h5>
                        <p className="text-gray-700 text-sm text-center leading-relaxed">
                          Ground your energy, clarify your North Star, and prepare for smooth sailing ahead.
                        </p>
                      </div>
                      
                      {/* Level 2: Destination */}
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border-2 border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center shadow-md">
                            <MapPin className="w-6 h-6 text-sky-700" />
                          </div>
                        </div>
                        <h5 className="text-lg font-bold text-navy mb-3 text-center">2. Destination</h5>
                        <p className="text-gray-700 text-sm text-center leading-relaxed">
                          Set your course with crystal-clear goals that align with your authentic self.
                        </p>
                      </div>
                      
                      {/* Level 3: Anchor */}
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border-2 border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center shadow-md">
                            <Settings className="w-6 h-6 text-blue-700" />
                          </div>
                        </div>
                        <h5 className="text-lg font-bold text-navy mb-3 text-center">3. Anchor</h5>
                        <p className="text-gray-700 text-sm text-center leading-relaxed">
                          Create steady foundations and routines that keep you grounded when storms hit.
                        </p>
                      </div>
                      
                      {/* Level 4: Navigation Tools */}
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border-2 border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-violet-200 rounded-full flex items-center justify-center shadow-md">
                            <Compass className="w-6 h-6 text-violet-700" />
                          </div>
                        </div>
                        <h5 className="text-lg font-bold text-navy mb-3 text-center">4. Navigation Tools</h5>
                        <p className="text-gray-700 text-sm text-center leading-relaxed">
                          Master the systems and tools that help you stay on course toward your goals.
                        </p>
                      </div>
                      
                      {/* Level 5: Hazards at Sea */}
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border-2 border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-fuchsia-200 rounded-full flex items-center justify-center shadow-md">
                            <AlertTriangle className="w-6 h-6 text-fuchsia-700" />
                          </div>
                        </div>
                        <h5 className="text-lg font-bold text-navy mb-3 text-center">5. Hazards at Sea</h5>
                        <p className="text-gray-700 text-sm text-center leading-relaxed">
                          Identify and navigate around the obstacles that typically derail your progress.
                        </p>
                      </div>
                      
                      {/* Level 6: Lifeboat */}
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border-2 border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center shadow-md">
                            <LifeBuoy className="w-6 h-6 text-rose-700" />
                          </div>
                        </div>
                        <h5 className="text-lg font-bold text-navy mb-3 text-center">6. Lifeboat</h5>
                        <p className="text-gray-700 text-sm text-center leading-relaxed">
                          Build emergency protocols for when things go off-track, so you can get back on course quickly.
                        </p>
                      </div>
                      
                      {/* Level 7: Support Systems */}
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border-2 border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center shadow-md">
                            <Users className="w-6 h-6 text-orange-700" />
                          </div>
                        </div>
                        <h5 className="text-lg font-bold text-navy mb-3 text-center">7. Support Systems</h5>
                        <p className="text-gray-700 text-sm text-center leading-relaxed">
                          Strengthen your crew and support network for sustainable long-term success.
                        </p>
                      </div>
                      
                      {/* Level 8: Reflection and Recognition */}
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border-2 border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center shadow-md">
                            <Trophy className="w-6 h-6 text-amber-700" />
                          </div>
                        </div>
                        <h5 className="text-lg font-bold text-navy mb-3 text-center">8. Reflection and Recognition</h5>
                        <p className="text-gray-700 text-sm text-center leading-relaxed">
                          Celebrate your journey, learn from your wins, and chart your next adventure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-white rounded-2xl shadow-2xl p-4">
                    <Image
                      src="/sample_dash.png"
                      alt="Example client dashboard showing North Star goals, weekly priorities, and progress tracking"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-gray-500 text-center mt-2 italic">
                      Example client dashboard. Demo data.
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="text-tealblue font-semibold text-center bg-tealblue/10 rounded-lg py-3 px-4">
                      📝 I handle all the updates — don't think of this as another thing to manage!
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white/90 rounded-2xl p-10 shadow-lg border border-tealblue/20">
                    <h3 className="text-2xl font-bold text-navy mb-4">Your Personal Command Center</h3>
                    <h4 className="text-lg font-semibold text-navy mb-4 mt-2">What You Get:</h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-navy">North Star</p>
                          <p className="text-gray-600 text-sm">Your core why and deepest motivation, always visible</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-4 h-4 bg-indigo-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-navy">Destination</p>
                          <p className="text-gray-600 text-sm">Your big goal and target outcomes</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-4 h-4 bg-teal-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-navy">Anchor</p>
                          <p className="text-gray-600 text-sm">A weekly grounding question to keep you centered</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-4 h-4 bg-cyan-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-navy">Compass</p>
                          <p className="text-gray-600 text-sm">1–3 priorities with checkboxes (no overwhelming lists!)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-4 h-4 bg-indigo-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-navy">Next Check‑In</p>
                          <p className="text-gray-600 text-sm">Date and focus, always visible so you know what's coming</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-4 h-4 bg-pink-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-navy">Starlight</p>
                          <p className="text-gray-600 text-sm">Quick wins and gratitude to build momentum</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-4 bg-gradient-to-r from-freshaqua/10 to-tealblue/10 rounded-lg">
                      <p className="text-sm text-navy font-medium mb-2">
                        ✨ Research‑backed methods for ADHD, executive function, and habits
                      </p>
                      <p className="text-sm text-gray-600 italic mb-2">
                        It's always there when you want it, no pressure to use it — I update everything after our sessions
                      </p>
                      <p className="text-sm text-navy font-medium">
                        🗂️ Your dashboard is yours to keep forever — even if you cancel, you retain full access
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Who It's For Tab */}
            {activeTab === 'who' && (
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-navy mb-4 text-center font-playfair">
                  Built for ADHD brains, helpful for anyone
                </h3>
                <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                  No diagnosis needed. If follow through is hard, you are in the right place.
                </p>
                
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  <span className="px-4 py-2 bg-gradient-to-r from-freshaqua/20 to-tealblue/20 rounded-full text-navy font-medium border border-tealblue/30">
                    Students
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-freshaqua/20 to-tealblue/20 rounded-full text-navy font-medium border border-tealblue/30">
                    Working professionals
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-freshaqua/20 to-tealblue/20 rounded-full text-navy font-medium border border-tealblue/30">
                    Creatives & writers
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-freshaqua/20 to-tealblue/20 rounded-full text-navy font-medium border border-tealblue/30">
                    Healthcare workers
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-freshaqua/20 to-tealblue/20 rounded-full text-navy font-medium border border-tealblue/30">
                    Entrepreneurs
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-freshaqua/20 to-tealblue/20 rounded-full text-navy font-medium border border-tealblue/30">
                    Solopreneurs
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-freshaqua/20 to-tealblue/20 rounded-full text-navy font-medium border border-tealblue/30">
                    Job seekers
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-freshaqua/20 to-tealblue/20 rounded-full text-navy font-medium border border-tealblue/30">
                    Caregivers
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-freshaqua/20 to-tealblue/20 rounded-full text-navy font-medium border border-tealblue/30">
                    Anyone feeling stuck
                  </span>
                </div>
                
                <div className="text-center mb-8">
                  <button
                    onClick={() => setShowExamples(!showExamples)}
                    className="px-6 py-3 bg-tealblue text-white rounded-lg hover:bg-deepteal transition-colors font-medium"
                  >
                    {showExamples ? 'Hide examples' : 'See examples'}
                  </button>
                </div>
                
                {showExamples && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/90 p-6 rounded-xl shadow-soft">
                      <h4 className="font-bold text-navy mb-3">Students</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Studying for a big exam</li>
                        <li>• Staying on top of assignments</li>
                        <li>• Balancing school and life</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/90 p-6 rounded-xl shadow-soft">
                      <h4 className="font-bold text-navy mb-3">Working professionals</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Managing competing deadlines</li>
                        <li>• Keeping up with emails and meetings</li>
                        <li>• Finishing long-term projects</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/90 p-6 rounded-xl shadow-soft">
                      <h4 className="font-bold text-navy mb-3">Creatives & writers</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Writing a book or script</li>
                        <li>• Completing art or design projects</li>
                        <li>• Staying motivated through the messy middle</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/90 p-6 rounded-xl shadow-soft">
                      <h4 className="font-bold text-navy mb-3">Healthcare workers</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Handling long shifts and unpredictable schedules</li>
                        <li>• Managing stress and burnout</li>
                        <li>• Keeping up with continuing education</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/90 p-6 rounded-xl shadow-soft">
                      <h4 className="font-bold text-navy mb-3">Entrepreneurs & solopreneurs</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Launching or growing a business</li>
                        <li>• Wearing every hat without burning out</li>
                        <li>• Turning ideas into action</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/90 p-6 rounded-xl shadow-soft">
                      <h4 className="font-bold text-navy mb-3">Job seekers</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Updating your resume or portfolio</li>
                        <li>• Preparing for interviews</li>
                        <li>• Staying motivated through applications</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/90 p-6 rounded-xl shadow-soft">
                      <h4 className="font-bold text-navy mb-3">Caregivers</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Balancing others' needs with your own</li>
                        <li>• Managing household tasks and schedules</li>
                        <li>• Finding time for self-care</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/90 p-6 rounded-xl shadow-soft">
                      <h4 className="font-bold text-navy mb-3">Anyone feeling stuck</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Starting after procrastination</li>
                        <li>• Regaining momentum after burnout</li>
                        <li>• Building structure that works for you</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                <p className="text-center text-sm text-gray-500 mt-8">
                  Not sure if this fits you? <Link href="/contact" className="text-tealblue hover:underline">Ask me</Link>.
                </p>
              </div>
            )}
            
            {/* What This Is NOT Tab */}
            {activeTab === 'not' && (
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-navy mb-4 text-center font-playfair">
                  Let's Be Clear
                </h3>
                <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                  Here's what you can and can't expect when we work together.
                </p>
                
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* What It's NOT */}
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h4 className="text-xl font-bold text-red-600 mb-4 text-center">❌ This is NOT</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>🩺 <span className="font-semibold">Therapy</span> or medical treatment</li>
                        <li>✨ A <span className="font-semibold">magic fix</span> or overnight transformation</li>
                        <li>📅 <span className="font-semibold">Rigid schedules</span> or harsh accountability</li>
                        <li>📋 <span className="font-semibold">One-size-fits-all</span> productivity tips</li>
                        <li>🎥 <span className="font-semibold">Group coaching</span> or pre-recorded courses</li>
                      </ul>
                    </div>
                    
                    {/* What It IS */}
                    <div className="bg-tealblue/10 p-6 rounded-xl border border-tealblue/30">
                      <h4 className="text-xl font-bold text-tealblue mb-4 text-center">✅ This IS</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>🤝 A <span className="font-semibold">weekly accountability partner</span> who's in your corner</li>
                        <li>🧠 <span className="font-semibold">ADHD-informed, flexible support</span> that adapts to you</li>
                        <li>🛠️ <span className="font-semibold">Practical tools and systems</span> you'll actually use</li>
                        <li>💬 <span className="font-semibold">1-on-1 personalized coaching</span> for your real life</li>
                        <li>🌱 <span className="font-semibold">Gentle, judgment-free guidance</span> so you can make steady progress</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-navy mb-6 text-center font-playfair">
                  Frequently Asked Questions
                </h3>
                
                <div className="max-w-4xl mx-auto">
                  {/* Getting Started */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-tealblue mb-4 flex items-center gap-2"><Play className="h-5 w-5" /> Getting Started</h4>
                    <div className="space-y-4">
                      <div className="bg-white/90 p-5 rounded-xl border border-gray-200">
                        <h5 className="font-bold text-navy mb-2 flex items-center gap-2"><HelpCircle className="h-4 w-4 text-tealblue" />How do I know if this is the right fit for me?</h5>
                        <p className="text-gray-600">If you struggle with follow-through, get overwhelmed by productivity advice, or feel like you're constantly starting over, this could help. The $25 first session is a low-risk way to see if we work well together, or if you're still unsure, send me a message and we can set up a free 10-minute call to talk it through.</p>
                      </div>
                      <div className="bg-white/90 p-5 rounded-xl border border-gray-200">
                        <h5 className="font-bold text-navy mb-2 flex items-center gap-2"><Target className="h-4 w-4 text-tealblue" />What if I don't know my exact goals yet?</h5>
                        <p className="text-gray-600">That's totally normal! Many clients start with just "I want to get my life together." We'll work together in your first session to clarify what matters most to you right now.</p>
                      </div>
                      <div className="bg-white/90 p-5 rounded-xl border border-gray-200">
                        <h5 className="font-bold text-navy mb-2 flex items-center gap-2"><Brain className="h-4 w-4 text-tealblue" />Do I need to have ADHD?</h5>
                        <p className="text-gray-600">Not at all! While I specialize in ADHD-friendly approaches, this works for anyone who struggles with executive function, overwhelm, or just getting things done.</p>
                      </div>
                    </div>
                  </div>

                  {/* How It Works */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-2"><Cog className="h-5 w-5" /> How It Works</h4>
                    <div className="space-y-4">
                      <div className="bg-white/90 p-5 rounded-xl border border-gray-200">
                        <h5 className="font-bold text-navy mb-2 flex items-center gap-2"><Video className="h-4 w-4 text-purple-600" />Do we meet on Zoom or another platform?</h5>
                        <p className="text-gray-600">Zoom, Google Meet, FaceTime, WhatsApp — whatever works best for you! After you sign up, you'll get a questionnaire where you can mark your preference. I want to meet you where you're at in the easiest way possible.</p>
                      </div>
                      <div className="bg-white/90 p-5 rounded-xl border border-gray-200">
                        <h5 className="font-bold text-navy mb-2 flex items-center gap-2"><Camera className="h-4 w-4 text-purple-600" />Do I have to have my camera on?</h5>
                        <p className="text-gray-600">Absolutely not! I just want you to be comfortable. Of course I'd love to see your beautiful face, but I understand sometimes we just want to be in the dark under blankets and that's fine.</p>
                      </div>
                      <div className="bg-white/90 p-5 rounded-xl border border-gray-200">
                        <h5 className="font-bold text-navy mb-2 flex items-center gap-2"><Timer className="h-4 w-4 text-purple-600" />How much time will I need to commit each week?</h5>
                        <p className="text-gray-600">Just 30 minutes for our call, plus whatever time you want to spend on your chosen weekly focus. The whole point is keeping it manageable.</p>
                      </div>
                      <div className="bg-white/90 p-5 rounded-xl border border-gray-200">
                        <h5 className="font-bold text-navy mb-2 flex items-center gap-2"><ClipboardList className="h-4 w-4 text-purple-600" />Is there homework between sessions?</h5>
                        <p className="text-gray-600">No formal homework! We'll agree on 1-3 small experiments or actions each week, but they're designed to fit into your real life, not add pressure. We're collecting data on what works for your brain specifically.</p>
                      </div>
                      <div className="bg-white/90 p-5 rounded-xl border border-gray-200">
                        <h5 className="font-bold text-navy mb-2 flex items-center gap-2"><Wrench className="h-4 w-4 text-purple-600" />What if I get overwhelmed by the tools and dashboard?</h5>
                        <p className="text-gray-600">We start simple and build slowly. If something feels like too much, we'll scale it back. The tools should help, not stress you out.</p>
                      </div>
                    </div>
                  </div>

                  {/* Concerns & Hesitations */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-coral mb-4 flex items-center gap-2"><MessageCircle className="h-5 w-5" /> Concerns & Hesitations</h4>
                    <div className="space-y-4">
                      <div className="bg-white/90 p-5 rounded-xl border border-gray-200">
                        <h5 className="font-bold text-navy mb-2 flex items-center gap-2"><History className="h-4 w-4 text-coral" />What if I've tried coaching before and it didn't work?</h5>
                        <p className="text-gray-600">Most coaching isn't designed for ADHD brains. If past experiences felt rigid, overwhelming, or shame-inducing, this will be different. We focus on what works for YOU specifically.</p>
                      </div>
                      <div className="bg-white/90 p-5 rounded-xl border border-gray-200">
                        <h5 className="font-bold text-navy mb-2 flex items-center gap-2"><TrendingUp className="h-4 w-4 text-coral" />How long will it take to see progress?</h5>
                        <p className="text-gray-600">Many clients feel more grounded after just 2-3 sessions. Bigger changes typically show up around 6-8 weeks as we build sustainable habits together.</p>
                      </div>
                      <div className="bg-white/90 p-5 rounded-xl border border-gray-200">
                        <h5 className="font-bold text-navy mb-2 flex items-center gap-2"><Stethoscope className="h-4 w-4 text-coral" />How is this different from therapy?</h5>
                        <p className="text-gray-600">I'm not a therapist or clinical professional, I provide accountability partnership and practical support, not medical or therapeutic treatment. Think of me as your productivity project manager. If we decide therapy would be very beneficial, I can help you find one.</p>
                      </div>
                    </div>
                  </div>

                  {/* Logistics */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2"><FileText className="h-5 w-5" /> Logistics</h4>
                    <div className="space-y-4">
                      <div className="bg-white/90 p-5 rounded-xl border border-gray-200">
                        <h5 className="font-bold text-navy mb-2 flex items-center gap-2"><CreditCard className="h-4 w-4 text-green-600" />How does payment work?</h5>
                        <p className="text-gray-600">No subscriptions! Buy a session pack when you need it. Sessions are valid for 8-12 weeks depending on the pack. No auto-renewals, no surprise charges.</p>
                      </div>
                      <div className="bg-white/90 p-5 rounded-xl border border-gray-200">
                        <h5 className="font-bold text-navy mb-2 flex items-center gap-2"><CalendarX className="h-4 w-4 text-green-600" />What if I miss a session?</h5>
                        <p className="text-gray-600">Life happens! If you give me 24+ hours' notice, we can reschedule. With session packs, you have 8-12 weeks to use your sessions, so there's no pressure to meet every single week. Your dashboard keeps track of everything.</p>
                      </div>
                      <div className="bg-white/90 p-5 rounded-xl border border-gray-200">
                        <h5 className="font-bold text-navy mb-2 flex items-center gap-2"><UserCheck className="h-4 w-4 text-green-600" />Do you work with teens or only adults?</h5>
                        <p className="text-gray-600">I work with adults 18+, and I'm open to coaching teens as long as a parent or guardian is involved and comfortable with the process. We can work together to make sure the approach supports them in a way that feels safe and effective.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Value Tab */}
            {activeTab === 'value' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-navy mb-3 font-playfair">
                    Community-First Membership
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Join at your comfort level. Upgrade or downgrade anytime. No long-term commitments.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {/* Harbor Access */}
                  <div className="bg-white/95 p-5 rounded-2xl border-2 border-blue-300 shadow-lg flex flex-col">
                    <div className="text-center mb-4">
                      <Anchor className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <h4 className="text-lg font-bold text-navy mb-1">Harbor Access</h4>
                      <div className="text-2xl font-bold text-blue-600 mb-1">$35/mo</div>
                      <div className="text-sm text-blue-600 font-semibold mb-3">First month: $15</div>
                    </div>
                    
                    <div className="space-y-2 text-gray-700 text-sm mb-6 flex-grow">
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>Discord community</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>Body doubling sessions</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>Weekly Compass Calls</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>Shared resources</span>
                      </div>
                    </div>
                    <Link 
                      href="/membership"
                      className="block w-full py-3 px-4 bg-blue-500 text-white text-center font-bold rounded-lg shadow-lg hover:bg-blue-600 transition text-sm mt-auto"
                    >
                      Start with Harbor
                    </Link>
                  </div>
                  
                  {/* Crew Essentials */}
                  <div className="bg-white/95 p-5 rounded-2xl border-2 border-purple-300 shadow-lg flex flex-col">
                    <div className="text-center mb-4">
                      <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                      <h4 className="text-lg font-bold text-navy mb-1">Crew Essentials</h4>
                      <div className="text-2xl font-bold text-purple-600 mb-1">$85/mo</div>
                      <div className="text-sm text-purple-600 font-semibold mb-3">First month: $65</div>
                    </div>
                    
                    <div className="space-y-2 text-gray-700 text-sm mb-6 flex-grow">
                      <div className="flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span>Everything in Harbor</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span>1 × 1:1 coaching call/month</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span>1×/week text nudges</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span>Personal dashboard</span>
                      </div>
                    </div>
                    <Link 
                      href="/membership"
                      className="block w-full py-3 px-4 bg-purple-500 text-white text-center font-bold rounded-lg shadow-lg hover:bg-purple-600 transition text-sm mt-auto"
                    >
                      Join Crew Essentials
                    </Link>
                  </div>
                  
                  {/* First Mate - MOST POPULAR */}
                  <div className="bg-white/95 p-5 rounded-2xl border-2 border-teal-400 relative shadow-xl flex flex-col">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-md">
                      🌟 RECOMMENDED
                    </div>
                    <div className="text-center mb-4">
                      <MessageSquare className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                      <h4 className="text-lg font-bold text-navy mb-1 mt-2">First Mate</h4>
                      <div className="text-2xl font-bold text-teal-600 mb-1">$125/mo</div>
                      <div className="text-sm text-teal-600 font-semibold mb-3">First month: $105</div>
                    </div>
                    
                    <div className="space-y-2 text-gray-700 text-sm mb-6 flex-grow">
                      <div className="flex items-start">
                        <span className="text-teal-500 mr-2">✓</span>
                        <span>Everything in Crew</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-teal-500 mr-2">✓</span>
                        <span>2 × 1:1 coaching calls/month</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-teal-500 mr-2">✓</span>
                        <span>2×/week text nudges</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-teal-500 mr-2">✓</span>
                        <span>Priority support</span>
                      </div>
                    </div>
                    <Link 
                      href="/membership"
                      className="block w-full py-3 px-4 bg-teal-500 text-white text-center font-bold rounded-lg shadow-lg hover:bg-teal-600 transition text-sm mt-auto"
                    >
                      Become First Mate
                    </Link>
                  </div>
                  
                  {/* Captain's Concierge */}
                  <div className="bg-white/95 p-5 rounded-2xl border-2 border-amber-300 shadow-lg flex flex-col">
                    <div className="text-center mb-4">
                      <Crown className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                      <h4 className="text-lg font-bold text-navy mb-1">Concierge</h4>
                      <div className="text-2xl font-bold text-amber-600 mb-1">$185/mo</div>
                      <div className="text-sm text-amber-600 font-semibold mb-3">First month: $165</div>
                    </div>
                    
                    <div className="space-y-2 text-gray-700 text-sm mb-6 flex-grow">
                      <div className="flex items-start">
                        <span className="text-amber-500 mr-2">✓</span>
                        <span>Everything in First Mate</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-amber-500 mr-2">✓</span>
                        <span>4 × 1:1 coaching calls/month</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-amber-500 mr-2">✓</span>
                        <span>3×/week + unlimited texts</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-amber-500 mr-2">✓</span>
                        <span>Custom dashboard</span>
                      </div>
                    </div>
                    <Link 
                      href="/membership"
                      className="block w-full py-3 px-4 bg-amber-500 text-white text-center font-bold rounded-lg shadow-lg hover:bg-amber-600 transition text-sm mt-auto"
                    >
                      Join Concierge
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-xl border-2 border-teal-500 max-w-4xl mx-auto shadow-sm">
                  <p className="text-gray-900 text-base font-medium text-center">
                    🌟 <strong className="text-lg text-gray-900">Founding Member Special</strong><br />
                    <span className="text-gray-800">50% off your first month when you join before August 31st. Upgrade or downgrade anytime - no long-term commitments!</span>
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    All tiers include: Discord community • Body doubling sessions • Weekly Compass Calls
                  </p>
                  <Link href="/membership" className="text-tealblue hover:text-deepteal underline font-medium">
                    View complete feature comparison →
                  </Link>
                </div>
              </div>
            )}
            
            {/* Testimonials Tab */}
            {activeTab === 'testimonials' && (
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-navy mb-8 text-center font-playfair">
                  What People Are Saying
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-gradient-to-br from-softblue/30 to-freshaqua/30 p-8 rounded-2xl border border-tealblue/20">
                    <div className="mb-4">
                      <div className="font-bold text-navy text-lg mb-1">Jeff F. · Graduate Student</div>
                    </div>
                    <p className="text-navy">
                      "Working with Marlie has honestly changed the way I work. I finally have accountability that doesn't make me feel bad about myself. In the last 3 months, I've turned in assignments on time (!!!) and even applied for jobs I'd been putting off for a year."
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
                    <div className="mb-4">
                      <div className="font-bold text-navy text-lg mb-1">Sarah M. · Remote Worker</div>
                    </div>
                    <p className="text-navy">
                      "I used to avoid phone calls for weeks and had a list of half-finished projects stressing me out. Marlie totally gets it. She doesn't make me feel broken, just supported. The dashboard is a game changer for keeping my brain organized."
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-200">
                    <div className="mb-4">
                      <div className="font-bold text-navy text-lg mb-1">Alex L. · Entrepreneur</div>
                    </div>
                    <p className="text-navy">
                      "The Discord body doubling sessions are amazing, I get so much work done. And the shorter calls are actually perfect for my attention span. Finally, something that works for my brain instead of against it."
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-coral/20 p-8 rounded-2xl border border-orange-200">
                    <div className="mb-4">
                      <div className="font-bold text-navy text-lg mb-1">Maria K. · PhD Student</div>
                    </div>
                    <p className="text-navy">
                      "I've bought so many planners and tried every productivity method out there. Marlie's framework is the first one I've stuck with. The North Star thing we set up keeps me from spiraling when deadlines pile up. It's like… actually doable."
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Policy Tab */}
            {activeTab === 'policy' && (
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-navy mb-6 text-center font-playfair">
                  Flexible Scheduling
                </h3>
                
                <div className="max-w-3xl mx-auto">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
                    <p className="text-lg text-navy text-center mb-8 font-medium">
                      Life with ADHD is unpredictable — I get it. Here's how we keep it stress-free:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-white/80 p-5 rounded-xl">
                        <p className="text-navy"><strong>24+ hours' notice:</strong> Free reschedule, no penalty</p>
                      </div>
                      
                      <div className="bg-white/80 p-5 rounded-xl">
                        <p className="text-navy"><strong>Same-day changes:</strong> Just send me a quick message — we'll try to find a new time that week</p>
                      </div>
                      
                      <div className="bg-white/80 p-5 rounded-xl">
                        <p className="text-navy"><strong>Emergencies:</strong> Let me know, and we'll work it out</p>
                      </div>
                      
                      <div className="bg-white/80 p-5 rounded-xl">
                        <p className="text-navy"><strong>Session packs expire?</strong> If you can't use all your sessions within the timeframe, just let me know — we'll extend it</p>
                      </div>
                      
                      <div className="bg-white/80 p-5 rounded-xl">
                        <p className="text-navy"><strong>Need a break?</strong> No problem! Your sessions wait for you — no subscriptions to pause or cancel</p>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-4 bg-emerald-100 rounded-lg text-center">
                      <p className="text-emerald-800 font-semibold">
                        💚 Buy sessions when you need them. Use them at your pace. No subscription guilt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Process Tab */}
            {activeTab === 'process' && (
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-navy mb-8 text-center font-playfair">
                  Getting Started is Simple
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/90 p-8 rounded-2xl shadow-lg text-center border border-coral/20">
                    <div className="w-16 h-16 bg-gradient-to-r from-coral to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">1</span>
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-3">Choose Your Membership Tier</h4>
                    <p className="text-gray-600 leading-relaxed">Start with <strong className="text-coral">Harbor Access for just $15</strong> to try the community, or jump into a higher tier for private coaching support. <strong className="text-coral">Founding member pricing</strong> available through August 31st!</p>
                  </div>
                  
                  <div className="bg-white/90 p-8 rounded-2xl shadow-lg text-center border border-teal-200">
                    <div className="w-16 h-16 bg-gradient-to-r from-tealblue to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">2</span>
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-3">Join the Community</h4>
                    <p className="text-gray-600 leading-relaxed">Get immediate access to Discord, body doubling sessions, and Sunday Compass Calls. If you chose a tier with private calls, you'll receive a scheduling link.</p>
                  </div>
                  
                  <div className="bg-white/90 p-8 rounded-2xl shadow-lg text-center border border-purple-200">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">3</span>
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-3">Start Building Momentum</h4>
                    <p className="text-gray-600 leading-relaxed">Jump into body doubling sessions, participate in Sunday calls, and connect with your crew. <strong className="text-purple-600">Upgrade or downgrade anytime</strong> as your needs change — <strong className="text-tealblue">no long-term commitments</strong>!</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link 
                    href="/membership"
                    className="inline-block btn cta px-8 py-4 bg-gradient-to-r from-coral to-pink-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-lg"
                  >
                    Choose Your Membership →
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-navy mb-8 text-center font-playfair">
                  Free ADHD Resources
                </h3>
                
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full shadow-lg mb-4">
                    <LifeBuoy className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    A growing collection of practical tools, scripts, and strategies to help you get unstuck fast. 
                    No paywall, no login required.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white/90 rounded-xl shadow-lg p-6 border border-red-100">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-red-600" />
                    </div>
                    <h4 className="text-lg font-bold text-navy mb-3">Crisis Scripts</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Word-for-word scripts for explaining ADHD to your boss, partner, or family during tough moments
                    </p>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Coming Soon</span>
                  </div>

                  <div className="bg-white/90 rounded-xl shadow-lg p-6 border border-blue-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold text-navy mb-3">5-Minute Fixes</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Quick strategies to get unstuck when you're paralyzed, overwhelmed, or completely frozen
                    </p>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Coming Soon</span>
                  </div>

                  <div className="bg-white/90 rounded-xl shadow-lg p-6 border border-green-100">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold text-navy mb-3">Body Doubling Guide</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      How to start, host, or join body doubling sessions even when social anxiety kicks in
                    </p>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Coming Soon</span>
                  </div>

                  <div className="bg-white/90 rounded-xl shadow-lg p-6 border border-purple-100">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="text-lg font-bold text-navy mb-3">Templates & Checklists</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Printable Anchor & Compass worksheets, emergency contact lists, and crisis protocols
                    </p>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Coming Soon</span>
                  </div>

                  <div className="bg-white/90 rounded-xl shadow-lg p-6 border border-indigo-100">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h4 className="text-lg font-bold text-navy mb-3">Phone Wallpapers</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Emergency reminder cards you can save to your phone for instant access during tough moments
                    </p>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Coming Soon</span>
                  </div>

                  <div className="bg-white/90 rounded-xl shadow-lg p-6 border border-pink-100">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-pink-600" />
                    </div>
                    <h4 className="text-lg font-bold text-navy mb-3">Action Plans</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Step-by-step guides for common ADHD emergencies: forgotten deadlines, lost motivation
                    </p>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Coming Soon</span>
                  </div>
                </div>

                <div className="bg-navy/10 rounded-xl p-6 text-center">
                  <p className="text-navy font-medium italic mb-4">
                    "These resources are free for everyone. But inside our community, 
                    we take them from helpful guides to real-world change — with live practice, 
                    accountability, and personalization."
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors"
                      onClick={() => alert('Resource library coming soon! Join our community for early access.')}
                    >
                      Get Updates on Release
                    </button>
                    <Link
                      href="/membership"
                      className="px-6 py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Join the Community →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 font-playfair drop-shadow-sm" style={{color: '#d9e4ff'}}>
            Ready to Join the Crew?
          </h2>
          <p className="text-xl mb-8 text-white">
            Community support that actually works. Start with founding member pricing.
          </p>
          
          <Link 
            href="/membership"
            className="inline-block btn cta px-10 py-4 bg-freshaqua text-navy font-bold rounded-lg shadow-lg hover:bg-tealblue hover:text-white transition hover-lift text-lg mb-6"
          >
            Join the Community →
          </Link>
          
          <p className="text-sm text-gray-300 mb-2">
            Founding specials: Harbor $15 • Crew $65 • First Mate $105
          </p>
          
          <p className="text-sm text-gray-300">
            Already a member? <Link href="/signin" className="text-freshaqua underline hover:text-white">Sign in here</Link>
          </p>
        </div>
      </section>

      </div>
    </div>
  );
}