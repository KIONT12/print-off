'use client';

import { useState } from 'react';
import { ArrowLeft, Trophy, Users, Clock, MapPin, Target, Calendar, Star, Award, TrendingUp, Activity, Zap } from 'lucide-react';
import Link from 'next/link';

export default function FiveOnFivePage() {
  const [activeTab, setActiveTab] = useState('schedule');

  const gameSchedule = [
    {
      id: 1,
      opponent: 'Thunder Bolts',
      date: 'February 20, 2024',
      time: '7:00 PM',
      venue: 'New Force Arena',
      type: 'League Game',
      status: 'Upcoming'
    },
    {
      id: 2,
      opponent: 'Lightning Strikes',
      date: 'February 27, 2024',
      time: '8:30 PM',
      venue: 'Thunder Court',
      type: 'Away Game',
      status: 'Upcoming'
    },
    {
      id: 3,
      opponent: 'Storm Chasers',
      date: 'March 5, 2024',
      time: '7:30 PM',
      venue: 'New Force Arena',
      type: 'Playoff Game',
      status: 'Important'
    },
    {
      id: 4,
      opponent: 'Power Hawks',
      date: 'February 13, 2024',
      time: '8:00 PM',
      venue: 'Hawks Nest',
      type: 'League Game',
      status: 'Won 89-76'
    },
    {
      id: 5,
      opponent: 'Elite Eagles',
      date: 'February 6, 2024',
      time: '7:00 PM',
      venue: 'New Force Arena',
      type: 'League Game',
      status: 'Won 94-82'
    }
  ];

  const playerStats = [
    {
      name: 'Marcus Thompson',
      position: 'Point Guard',
      number: 7,
      points: 24.8,
      assists: 8.2,
      rebounds: 5.1,
      fieldGoal: '47.3%'
    },
    {
      name: 'David Rodriguez',
      position: 'Shooting Guard',
      number: 23,
      points: 22.1,
      assists: 4.6,
      rebounds: 6.3,
      fieldGoal: '44.8%'
    },
    {
      name: 'James Wilson',
      position: 'Small Forward',
      number: 15,
      points: 18.5,
      assists: 5.8,
      rebounds: 7.9,
      fieldGoal: '48.2%'
    },
    {
      name: 'Carlos Johnson',
      position: 'Power Forward',
      number: 4,
      points: 16.7,
      assists: 2.1,
      rebounds: 11.4,
      fieldGoal: '52.1%'
    },
    {
      name: 'Anthony Davis',
      position: 'Center',
      number: 34,
      points: 19.3,
      assists: 1.8,
      rebounds: 12.6,
      fieldGoal: '56.7%'
    }
  ];

  const teamInfo = [
    {
      title: 'League Position',
      value: '2nd Place',
      description: 'Elite Division Standings'
    },
    {
      title: 'Current Record',
      value: '18-4',
      description: 'Regular Season'
    },
    {
      title: 'Home Record',
      value: '11-1',
      description: 'New Force Arena'
    },
    {
      title: 'Championship Titles',
      value: '3',
      description: 'League Championships'
    }
  ];

  const coachingStaff = [
    {
      name: 'Michael Anderson',
      role: 'Head Coach',
      experience: '12 years coaching experience',
      specialty: 'Offensive strategies and player development'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Assistant Coach',
      experience: '8 years coaching experience',
      specialty: 'Defensive schemes and conditioning'
    },
    {
      name: 'Robert Chen',
      role: 'Skills Coach',
      experience: '6 years professional experience',
      specialty: 'Individual skill development and shooting'
    }
  ];

  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      {/* Logo Pattern Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-15 gap-8 p-6 h-full overflow-hidden">
            {Array.from({ length: 120 }, (_, i) => (
              <div key={i} className="flex items-center justify-center" style={{
                transform: `rotate(${(i % 4) * 15 - 22.5}deg)`,
                animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${(i % 5) * 0.5}s`
              }}>
                <img 
                  src="/logo.png" 
                  alt="New Force Logo" 
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain hover:scale-110 transition-transform duration-300"
                  style={{
                    filter: 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.6)) brightness(1.1) contrast(1.1)'
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
                  <img 
                    src="/logo.png" 
                    alt="New Force Basketball Club Logo" 
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
                <Link href="/roster" className="text-gray-300 hover:text-cyan-400 transition-colors">Roster</Link>
                <Link href="/3x3" className="text-gray-300 hover:text-cyan-400 transition-colors">3x3</Link>
                <a href="#" className="text-blue-400 font-semibold">5x5</a>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
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
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">5x5 BASKETBALL</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto drop-shadow-lg" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
              Traditional full-court basketball. Where strategy meets athleticism.
            </p>
          </div>
        </section>

        {/* Team Record Banner */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {teamInfo.map((info, index) => (
                  <div key={index}>
                    <div className="text-2xl md:text-3xl font-bold text-white">{info.value}</div>
                    <div className="text-blue-100 font-semibold">{info.title}</div>
                    <div className="text-blue-200 text-sm">{info.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="bg-black/30 rounded-lg p-1">
                {['schedule', 'stats', 'coaching'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all capitalize ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tab === 'stats' ? 'Player Stats' : tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Schedule Tab */}
            {activeTab === 'schedule' && (
              <div>
                <h3 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg">Game Schedule</h3>
                <div className="space-y-6">
                  {gameSchedule.map((game) => (
                    <div key={game.id} className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30 hover:border-blue-400/70 transition-all">
                      <div className="grid md:grid-cols-5 gap-4 items-center">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-1">vs {game.opponent}</h4>
                          <p className="text-blue-400 text-sm">{game.type}</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2 text-gray-300 mb-1">
                            <Calendar className="w-4 h-4" />
                            <span>{game.date}</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2 text-gray-300">
                            <Clock className="w-4 h-4" />
                            <span>{game.time}</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2 text-gray-300">
                            <MapPin className="w-4 h-4" />
                            <span>{game.venue}</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            game.status === 'Upcoming' ? 'bg-blue-500/20 text-blue-400' :
                            game.status === 'Important' ? 'bg-purple-500/20 text-purple-400' :
                            game.status.startsWith('Won') ? 'bg-green-500/20 text-green-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {game.status}
                          </span>
                        </div>
                        <div className="text-center">
                          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-2 rounded text-sm font-semibold transition-colors">
                            {game.status === 'Upcoming' || game.status === 'Important' ? 'Get Tickets' : 'Game Recap'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Player Stats Tab */}
            {activeTab === 'stats' && (
              <div>
                <h3 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg">Player Statistics</h3>
                <div className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden border border-blue-400/30">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-blue-600 to-purple-600">
                        <tr>
                          <th className="px-6 py-4 text-left text-white font-semibold">#</th>
                          <th className="px-6 py-4 text-left text-white font-semibold">Player</th>
                          <th className="px-6 py-4 text-left text-white font-semibold">Position</th>
                          <th className="px-6 py-4 text-center text-white font-semibold">PPG</th>
                          <th className="px-6 py-4 text-center text-white font-semibold">APG</th>
                          <th className="px-6 py-4 text-center text-white font-semibold">RPG</th>
                          <th className="px-6 py-4 text-center text-white font-semibold">FG%</th>
                        </tr>
                      </thead>
                      <tbody>
                        {playerStats.map((player, index) => (
                          <tr key={index} className="border-b border-gray-700 hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 text-blue-400 font-semibold">#{player.number}</td>
                            <td className="px-6 py-4 text-white font-medium">{player.name}</td>
                            <td className="px-6 py-4 text-gray-300">{player.position}</td>
                            <td className="px-6 py-4 text-center text-white font-semibold">{player.points}</td>
                            <td className="px-6 py-4 text-center text-white">{player.assists}</td>
                            <td className="px-6 py-4 text-center text-white">{player.rebounds}</td>
                            <td className="px-6 py-4 text-center text-green-400 font-semibold">{player.fieldGoal}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Team Stats */}
                <div className="mt-12 bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-blue-400/30">
                  <h4 className="text-2xl font-bold text-white mb-6 text-center">Team Statistics (2023-24 Season)</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-blue-400">95.2</div>
                      <div className="text-gray-300">Points Per Game</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-400">87.1</div>
                      <div className="text-gray-300">Opp Points Per Game</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-400">48.7%</div>
                      <div className="text-gray-300">Field Goal %</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-400">36.2%</div>
                      <div className="text-gray-300">Three Point %</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Coaching Tab */}
            {activeTab === 'coaching' && (
              <div>
                <h3 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg">Coaching Staff</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {coachingStaff.map((coach, index) => (
                    <div key={index} className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30 text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">{coach.name}</h4>
                      <p className="text-blue-400 font-medium mb-3">{coach.role}</p>
                      <p className="text-gray-300 text-sm mb-3">{coach.experience}</p>
                      <p className="text-gray-400 text-sm">{coach.specialty}</p>
                    </div>
                  ))}
                </div>

                {/* Team Philosophy */}
                <div className="mt-12 bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-blue-400/30">
                  <h4 className="text-2xl font-bold text-white mb-6 text-center">Team Philosophy</h4>
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                      <h5 className="font-semibold text-white mb-2">Continuous Improvement</h5>
                      <p className="text-gray-300 text-sm">Every practice, every game is an opportunity to get better</p>
                    </div>
                    <div>
                      <Activity className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                      <h5 className="font-semibold text-white mb-2">Team First Mentality</h5>
                      <p className="text-gray-300 text-sm">Individual success comes through team success</p>
                    </div>
                    <div>
                      <Zap className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                      <h5 className="font-semibold text-white mb-2">High Energy Play</h5>
                      <p className="text-gray-300 text-sm">Relentless effort on both ends of the court</p>
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
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-white mb-4">Join the New Force Family</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Experience championship-level basketball. Support your team at the next home game.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Season Tickets
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Team Store
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
                  <img 
                    src="/logo.png" 
                    alt="New Force Basketball Club Logo" 
                    className="w-10 h-10 object-contain"
                  />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    New Force Basketball
                  </h3>
                </div>
                <p className="text-gray-400">
                  Championship basketball with heart, passion, and determination. Join us for an incredible season!
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/roster" className="hover:text-white transition-colors">Team Roster</Link></li>
                  <li><Link href="/3x3" className="hover:text-white transition-colors">3x3 Basketball</Link></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">5x5 Basketball</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Game Schedule</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Player Stats</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Season Tickets</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Team Store</a></li>
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