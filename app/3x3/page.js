'use client';

import { useState } from 'react';
import { ArrowLeft, Trophy, Users, Clock, MapPin, Target, Calendar, Star, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ThreeOnThreePage() {
  const [activeTab, setActiveTab] = useState('tournaments');

  const tournaments = [
    {
      id: 1,
      name: 'Lightning Cup 3x3',
      date: 'February 15, 2024',
      location: 'Thunder Arena',
      teams: 16,
      status: 'Registration Open',
      prize: '$5,000'
    },
    {
      id: 2,
      name: 'Spring Thunder 3x3',
      date: 'March 22, 2024',
      location: 'Force Court',
      teams: 24,
      status: 'Coming Soon',
      prize: '$7,500'
    },
    {
      id: 3,
      name: 'Elite Force Championship',
      date: 'April 18, 2024',
      location: 'New Force Arena',
      teams: 32,
      status: 'Premium Event',
      prize: '$10,000'
    }
  ];

  const rules = [
    {
      title: 'Team Composition',
      description: '3 players on court + 1 substitute per team'
    },
    {
      title: 'Game Duration', 
      description: '10 minutes or first team to reach 21 points'
    },
    {
      title: 'Scoring System',
      description: '1 point inside arc, 2 points beyond arc'
    },
    {
      title: 'Shot Clock',
      description: '12 seconds per possession'
    },
    {
      title: 'Court & Equipment',
      description: 'Half court, one basket, Size 6 basketball'
    },
    {
      title: 'Overtime Rules',
      description: 'First team to score 2 points wins in untimed period'
    },
    {
      title: 'Possession Changes',
      description: 'Defense must clear the ball beyond the arc after rebounds'
    },
    {
      title: 'Fouls & Free Throws',
      description: '1 FT inside arc, 2 FT beyond arc. Team fouls 7+ = 2 FT'
    }
  ];

  const achievements = [
    {
      title: '2023 Regional Champions',
      description: 'New Force Lightning dominated the regional 3x3 circuit',
      icon: Trophy
    },
    {
      title: 'Undefeated Season',
      description: '15-0 record in elite division play',
      icon: Star
    },
    {
      title: 'Best Defense Award',
      description: 'Lowest points allowed per game in league',
      icon: Award
    }
  ];

  const globalFacts = [
    {
      title: 'Olympic Sport',
      description: 'Official Olympic sport since Tokyo 2020'
    },
    {
      title: 'Global Reach',
      description: 'Played in over 180 countries worldwide'
    },
    {
      title: 'FIBA Recognition',
      description: 'Governed by FIBA with official World Championships'
    },
    {
      title: 'Professional Leagues',
      description: 'Big3 League and FIBA 3x3 World Tour'
    }
  ];

  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      {/* Logo Pattern Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-black"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-15 gap-8 p-6 h-full overflow-hidden">
            {Array.from({ length: 120 }, (_, i) => (
              <div key={i} className="flex items-center justify-center" style={{
                transform: `rotate(${(i % 4) * 15 - 22.5}deg)`,
                animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${(i % 5) * 0.5}s`
              }}>
                <Image 
                  src="/logo.png" 
                  alt="New Force Logo" 
                  width={128}
                  height={128}
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain hover:scale-110 transition-transform duration-300"
                  style={{
                    filter: 'drop-shadow(0 0 12px rgba(251, 146, 60, 0.6)) brightness(1.1) contrast(1.1)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(var(--rotation)); }
            50% { transform: translateY(-10px) rotate(var(--rotation)); }
          }
        `}</style>
      </div>
      
      {/* All content with relative positioning */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Image 
                    src="/logo.png" 
                    alt="New Force Basketball Club Logo" 
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                {/* Team Name */}
                <div className="flex-shrink-0">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    New Force
                  </h1>
                  <p className="text-sm text-gray-300 mt-1">Basketball Club</p>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
                <Link href="/tgbl" className="text-gray-300 hover:text-cyan-400 transition-colors">TGBL</Link>
                <Link href="/live" className="text-gray-300 hover:text-cyan-400 transition-colors">Live</Link>
                <a href="#" className="text-orange-400 font-semibold">3x3</a>
                <Link href="/roster" className="text-gray-300 hover:text-cyan-400 transition-colors">Roster</Link>
              </nav>
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Page Title */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-4 tracking-wider drop-shadow-2xl" style={{fontFamily: 'Impact, "Arial Black", sans-serif', textShadow: '3px 3px 6px rgba(0,0,0,0.8)'}}>
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">3x3 BASKETBALL</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto drop-shadow-lg" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
              The number one urban team sport in the world. Simple, fast, and electrifying.
            </p>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="bg-black/30 rounded-lg p-1">
                {['tournaments', 'rules', 'achievements'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all capitalize ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tournaments Tab */}
            {activeTab === 'tournaments' && (
              <div>
                <h3 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg">Upcoming Tournaments</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tournaments.map((tournament) => (
                    <div key={tournament.id} className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-orange-400/30 hover:border-orange-400/70 transition-all">
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2">{tournament.name}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2 text-gray-300">
                            <Calendar className="w-4 h-4" />
                            <span>{tournament.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-300">
                            <MapPin className="w-4 h-4" />
                            <span>{tournament.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-300">
                            <Users className="w-4 h-4" />
                            <span>{tournament.teams} Teams</span>
                          </div>
                          <div className="flex items-center space-x-2 text-yellow-400">
                            <Trophy className="w-4 h-4" />
                            <span>{tournament.prize} Prize Pool</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          tournament.status === 'Registration Open' ? 'bg-green-500/20 text-green-400' :
                          tournament.status === 'Coming Soon' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {tournament.status}
                        </span>
                        <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-4 py-2 rounded text-sm font-semibold transition-colors">
                          {tournament.status === 'Registration Open' ? 'Register Now' : 'Learn More'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rules Tab */}
            {activeTab === 'rules' && (
              <div>
                <h3 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg">3x3 Basketball Rules</h3>
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-6">
                    {rules.map((rule, index) => (
                      <div key={index} className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-orange-400/30">
                        <h4 className="text-lg font-semibold text-orange-400 mb-3">{rule.title}</h4>
                        <p className="text-gray-300">{rule.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* What is 3x3 Basketball */}
                  <div className="mt-12 bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-orange-400/30">
                    <h4 className="text-2xl font-bold text-white mb-6 text-center">What is 3x3 Basketball?</h4>
                    <div className="max-w-4xl mx-auto">
                      <p className="text-gray-300 text-lg mb-6 text-center">
                        3x3 (pronounced &quot;three-ex-three&quot;) is considered the number one urban team sport in the world. 
                        From street courts to the Olympics, it&apos;s basketball at its purest form.
                      </p>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h5 className="text-orange-400 font-semibold text-lg mb-3">Origins & History</h5>
                          <p className="text-gray-300 text-sm mb-4">
                                                         Born from streetball culture in neighborhoods like Harlem&apos;s Rucker Park, 3x3 has evolved from 
                            playground pickup games to an official Olympic sport since Tokyo 2020.
                          </p>
                          <p className="text-gray-300 text-sm">
                            FIBA first tested 3x3 at the 2007 Asian Indoor Games and launched it globally at the 
                            2010 Youth Olympics in Singapore.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-orange-400 font-semibold text-lg mb-3">Why It&apos;s Special</h5>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• More ball touches per player</li>
                            <li>• Constant action with 12-second shot clock</li>
                            <li>• Can be played anywhere with just one hoop</li>
                            <li>• Emphasis on individual skills and creativity</li>
                            <li>• Perfect for urban environments and limited space</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div>
                <h3 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg">3x3 Achievements</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={index} className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-orange-400/30 text-center">
                        <IconComponent className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-white mb-2">{achievement.title}</h4>
                        <p className="text-gray-300">{achievement.description}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Global 3x3 Facts */}
                <div className="mt-12 bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-orange-400/30">
                  <h4 className="text-2xl font-bold text-white mb-6 text-center">3x3 Basketball Worldwide</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {globalFacts.map((fact, index) => (
                      <div key={index} className="bg-black/20 rounded-lg p-4">
                        <h5 className="text-orange-400 font-semibold mb-2">{fact.title}</h5>
                        <p className="text-gray-300 text-sm">{fact.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team Stats Section */}
                <div className="mt-8 bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-orange-400/30">
                  <h4 className="text-2xl font-bold text-white mb-6 text-center">New Force 2023 Season Stats</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-orange-400">15-0</div>
                      <div className="text-gray-300">Win Record</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-400">21.3</div>
                      <div className="text-gray-300">Avg Points</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-400">14.7</div>
                      <div className="text-gray-300">Opp Avg</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-400">3</div>
                      <div className="text-gray-300">Championships</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Join the Action?</h3>
              <p className="text-orange-100 mb-6 text-lg">
                Experience the thrill of 3x3 basketball with New Force. Fast games, intense competition, and unforgettable moments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                  Register for Tournament
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Image 
                    src="/logo.png" 
                    alt="New Force Basketball Club Logo" 
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    New Force Basketball
                  </h3>
                </div>
                <p className="text-gray-400">
                  Striking like lightning with skill, passion, and determination. Join us for an electrifying season!
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/roster" className="hover:text-white transition-colors">Team Roster</Link></li>
                  <li><a href="#" className="hover:text-white transition-colors">3x3 Basketball</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">3x3 Events</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Tournaments</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Training Camps</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">League Play</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Special Events</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 New Force Basketball Club. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 