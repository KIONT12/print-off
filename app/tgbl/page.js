'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Trophy, Users, Clock, ExternalLink, MapPin, Star, Zap, Flame, Droplets } from 'lucide-react';

export default function TGBL() {
  const [activeTab, setActiveTab] = useState('schedule');

  // TGBL Teams Data from Asia-basket.com
  const fireDivision = [
    { name: 'Bangkok W.', fullName: 'Bangkok Warriors', record: '0-0', city: 'Bangkok' },
    { name: 'CNX Orion', fullName: 'Chiang Mai Orion', record: '0-0', city: 'Chiang Mai' },
    { name: 'Fully Feared', fullName: 'Fully Feared', record: '0-0', city: 'Bangkok' },
    { name: 'Krabi Bears', fullName: 'Krabi Bears', record: '0-0', city: 'Krabi' },
    { name: 'Naga Hunters', fullName: 'Naga Hunters', record: '0-0', city: 'Bangkok' },
    { name: 'New Force', fullName: 'New Force', record: '0-0', highlight: true, city: 'Bangkok' },
    { name: 'Raw Camp', fullName: 'Raw Camp', record: '0-0', city: 'Bangkok' },
    { name: 'Shoot it Dragons', fullName: 'Shoot it Dragons', record: '0-0', city: 'Bangkok' },
    { name: 'ST Grizzlies', fullName: 'ST Grizzlies', record: '0-0', city: 'Bangkok' },
    { name: 'Th.Gorillas', fullName: 'Thai Gorillas', record: '0-0', city: 'Bangkok' }
  ];

  const waterDivision = [
    { name: 'Bangkok G.', fullName: 'Bangkok Giants', record: '0-0', city: 'Bangkok' },
    { name: 'Central C.', fullName: 'Central Crusaders', record: '0-0', city: 'Central' },
    { name: 'Coastal C.', fullName: 'Coastal Crushers', record: '0-0', city: 'Coastal' },
    { name: 'Dynasty D.', fullName: 'Dynasty Defenders', record: '0-0', city: 'Bangkok' },
    { name: 'New Era E.', fullName: 'New Era Eagles', record: '0-0', city: 'Bangkok' },
    { name: 'New Height S.', fullName: 'New Height Storm', record: '0-0', city: 'Bangkok' },
    { name: 'Overseas S.', fullName: 'Overseas Stallions', record: '0-0', city: 'International' },
    { name: 'Redwood H.', fullName: 'Redwood Hawks', record: '0-0', city: 'Bangkok' },
    { name: 'Th.Goblins', fullName: 'Thai Goblins', record: '0-0', city: 'Bangkok' },
    { name: 'Urban R.', fullName: 'Urban Rebels', record: '0-0', city: 'Bangkok' }
  ];

  // TGBL Schedule from Asia-basket.com
  const schedule = [
    { home: 'Thai Gorillas', away: 'Fully Feared', date: 'Oct.3', time: 'TBD', venue: 'Bangkok Arena' },
    { home: 'Raw Camp', away: 'New Force', date: 'Oct.3', time: 'TBD', venue: 'Raw Camp Court', highlight: true },
    { home: 'Krabi Bears', away: 'Naga Hunters', date: 'Oct.3', time: 'TBD', venue: 'Krabi Sports Complex' },
    { home: 'Thai Goblins', away: 'Redwood Hawks', date: 'Oct.3', time: 'TBD', venue: 'Bangkok Arena' },
    { home: 'Urban Rebels', away: 'Overseas Stallions', date: 'Oct.3', time: 'TBD', venue: 'Urban Court' },
    { home: 'New Era Eagles', away: 'Bangkok Giants', date: 'Oct.3', time: 'TBD', venue: 'Eagles Nest' },
    { home: 'Dynasty Defenders', away: 'Central Crusaders', date: 'Oct.3', time: 'TBD', venue: 'Dynasty Arena' },
    { home: 'New Height Storm', away: 'Coastal Crushers', date: 'Oct.3', time: 'TBD', venue: 'Storm Center' }
  ];

  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/pp.mov" type="video/mp4" />
          <source src="/pp.mov" type="video/quicktime" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-xl border-b border-cyan-400/30 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl"></div>
                  <Image 
                    src="/logo.png" 
                    alt="New Force Basketball Club Logo" 
                    width={64}
                    height={64}
                    className="object-contain relative z-10"
                  />
                </div>
                <div className="flex-shrink-0">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    New Force
                  </h1>
                  <p className="text-sm text-gray-300 mt-1 font-medium">TGBL Schedule</p>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Home</Link>
                                  <Link href="/tgbl" className="text-cyan-400 font-semibold relative">
                    TGBL
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                  </Link>
                  <Link href="/live" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Live Stream</Link>
                  <Link href="/3x3" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">3x3</Link>
                  <Link href="/roster" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Roster</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* TGBL Header */}
            <div className="text-center mb-16">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-3xl rounded-full"></div>
                <h2 className="relative text-7xl font-black text-white mb-6 drop-shadow-2xl tracking-wider" 
                    style={{fontFamily: 'Impact, "Arial Black", sans-serif', textShadow: '4px 4px 8px rgba(0,0,0,0.9)'}}>
                  <span className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
                    TGBL 2025
                  </span>
                </h2>
              </div>
              <p className="text-2xl text-gray-300 mb-6 font-medium tracking-wide">
                Thai Global Basketball League
              </p>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2 text-orange-400">
                  <Flame className="w-5 h-5" />
                  <span className="font-semibold">Fire Division</span>
                </div>
                <div className="w-px h-6 bg-gray-600"></div>
                <div className="flex items-center space-x-2 text-blue-400">
                  <Droplets className="w-5 h-5" />
                  <span className="font-semibold">Water Division</span>
                </div>
              </div>
              <a 
                href="https://www.asia-basket.com/Thailand/basketball-League-TGBL.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <span>Official TGBL Page</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-2 border border-cyan-400/30 shadow-2xl">
                <div className="flex space-x-1">
                  <button
                    onClick={() => setActiveTab('schedule')}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                      activeTab === 'schedule'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                    }`}
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Schedule</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('standings')}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                      activeTab === 'standings'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                    }`}
                  >
                    <Trophy className="w-5 h-5" />
                    <span>Standings</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('teams')}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                      activeTab === 'teams'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                    }`}
                  >
                    <Users className="w-5 h-5" />
                    <span>Teams</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            {activeTab === 'schedule' && (
              <div className="bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/30 shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <div className="w-8 h-8 mr-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  First Round Schedule
                </h3>
                <div className="grid gap-6">
                  {schedule.map((game, index) => (
                    <div 
                      key={index} 
                      className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                        game.highlight 
                          ? 'bg-gradient-to-r from-orange-500/20 via-red-500/20 to-yellow-500/20 border-orange-400/50 shadow-lg shadow-orange-500/25' 
                          : 'bg-gray-800/50 border-gray-600/30 hover:border-gray-500/50'
                      }`}
                    >
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                              <Clock className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-cyan-400 font-bold text-lg">{game.date}</div>
                              <div className="text-gray-400 text-sm">{game.time}</div>
                            </div>
                          </div>
                          <div className="text-white text-center sm:text-left">
                            <div className="text-lg font-semibold">
                              <span className={game.highlight ? 'text-cyan-300 font-bold' : 'text-white'}>{game.away}</span>
                              <span className="text-gray-400 mx-3 text-xl">@</span>
                              <span className={game.highlight ? 'text-cyan-300 font-bold' : 'text-white'}>{game.home}</span>
                            </div>
                            <div className="text-gray-400 text-sm mt-1">{game.venue}</div>
                          </div>
                        </div>
                        {game.highlight && (
                          <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 py-2 rounded-full border border-orange-400/50">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="text-orange-300 font-bold">New Force Game</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'standings' && (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Fire Division */}
                <div className="bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-orange-400/30 shadow-2xl">
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <div className="w-8 h-8 mr-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <Flame className="w-5 h-5 text-white" />
                    </div>
                    Fire Division
                  </h3>
                  <div className="space-y-3">
                    {fireDivision.map((team, index) => (
                      <div 
                        key={index} 
                        className={`p-4 rounded-xl flex justify-between items-center transition-all duration-300 hover:scale-[1.02] ${
                          team.highlight 
                            ? 'bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 border border-cyan-400/50 shadow-lg shadow-cyan-500/25' 
                            : 'bg-gray-800/30 hover:bg-gray-700/40 border border-transparent hover:border-gray-600/30'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                            index < 3 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black' : 'bg-gray-600 text-white'
                          }`}>
                            {index + 1}
                          </div>
                          <div>
                            <span className={`font-bold text-lg ${team.highlight ? 'text-cyan-300' : 'text-white'}`}>
                              {team.fullName}
                            </span>
                            <div className="text-gray-400 text-sm">{team.city}</div>
                          </div>
                          {team.highlight && (
                            <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-3 py-1 rounded-full">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-cyan-300 text-sm font-semibold">Our Team</span>
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="text-gray-400 font-mono text-lg">{team.record}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Water Division */}
                <div className="bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-blue-400/30 shadow-2xl">
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <div className="w-8 h-8 mr-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Droplets className="w-5 h-5 text-white" />
                    </div>
                    Water Division
                  </h3>
                  <div className="space-y-3">
                    {waterDivision.map((team, index) => (
                      <div 
                        key={index} 
                        className="p-4 rounded-xl flex justify-between items-center bg-gray-800/30 hover:bg-gray-700/40 border border-transparent hover:border-gray-600/30 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center font-bold text-sm text-white">
                            {index + 11}
                          </div>
                          <div>
                            <span className="font-bold text-lg text-white">{team.fullName}</span>
                            <div className="text-gray-400 text-sm">{team.city}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-gray-400 font-mono text-lg">{team.record}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'teams' && (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Fire Division Teams */}
                <div className="bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-orange-400/30 shadow-2xl">
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <div className="w-8 h-8 mr-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <Flame className="w-5 h-5 text-white" />
                    </div>
                    Fire Division Teams
                  </h3>
                  <div className="grid gap-4">
                    {fireDivision.map((team, index) => (
                      <div 
                        key={index} 
                        className={`p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                          team.highlight 
                            ? 'bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-400/50 shadow-lg shadow-cyan-500/25' 
                            : 'bg-gray-800/50 border border-gray-600/30 hover:border-gray-500/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className={`font-bold text-xl mb-2 ${team.highlight ? 'text-cyan-300' : 'text-white'}`}>
                              {team.fullName}
                            </h4>
                            <div className="flex items-center space-x-4 text-sm">
                              <span className="text-gray-400">{team.name}</span>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-400">{team.city}</span>
                            </div>
                          </div>
                          {team.highlight && (
                            <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-cyan-400/50">
                              <Users className="w-5 h-5 text-cyan-400" />
                              <span className="text-cyan-300 font-semibold">Our Team</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Water Division Teams */}
                <div className="bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-blue-400/30 shadow-2xl">
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <div className="w-8 h-8 mr-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Droplets className="w-5 h-5 text-white" />
                    </div>
                    Water Division Teams
                  </h3>
                  <div className="grid gap-4">
                    {waterDivision.map((team, index) => (
                      <div 
                        key={index} 
                        className="p-6 rounded-xl bg-gray-800/50 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-bold text-xl mb-2 text-white">{team.fullName}</h4>
                            <div className="flex items-center space-x-4 text-sm">
                              <span className="text-gray-400">{team.name}</span>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-400">{team.city}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* League Info */}
            <div className="mt-16 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-yellow-500/20 backdrop-blur-xl rounded-2xl p-8 border border-orange-400/30 shadow-2xl">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-6">About TGBL 2025</h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-4xl mx-auto">
                  The Thai Global Basketball League features 20 elite teams divided into Fire and Water divisions. 
                  New Force proudly competes in the Fire Division alongside 9 other talented teams, representing 
                  the pinnacle of basketball competition in Thailand.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Thailand</div>
                      <div className="text-gray-400 text-sm">Host Nation</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">20 Teams</div>
                      <div className="text-gray-400 text-sm">Elite Competition</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">2 Divisions</div>
                      <div className="text-gray-400 text-sm">Fire & Water</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}