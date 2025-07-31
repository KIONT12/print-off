'use client';

import { useState } from 'react';
import { ArrowLeft, User, Plus, Calendar, MapPin, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function RosterPage() {
  const [oldPlayers, setOldPlayers] = useState([
    {
      id: 1,
      name: 'Marcus Johnson',
      position: 'Point Guard',
      number: 23,
      height: '6\'2"',
      years: '2020-2023',
      achievements: 'MVP 2023, Team Captain'
    },
    {
      id: 2,
      name: 'Derek Williams',
      position: 'Shooting Guard',
      number: 10,
      height: '6\'4"',
      years: '2019-2022',
      achievements: 'Top Scorer 2022'
    }
  ]);

  const [currentPlayers, setCurrentPlayers] = useState([
    {
      id: 3,
      name: 'Andre Thompson',
      position: 'Small Forward',
      number: 7,
      height: '6\'7"',
      joinedYear: '2023',
      status: 'Active'
    },
    {
      id: 4,
      name: 'James Mitchell',
      position: 'Power Forward',
      number: 44,
      height: '6\'9"',
      joinedYear: '2024',
      status: 'Active'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [playerType, setPlayerType] = useState('current'); // 'current' or 'old'
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    position: '',
    number: '',
    height: '',
    joinedYear: '',
    years: '',
    achievements: '',
    status: 'Active'
  });

  const handleAddPlayer = (e) => {
    e.preventDefault();
    
    const player = {
      id: Date.now(),
      ...newPlayer
    };

    if (playerType === 'current') {
      setCurrentPlayers([...currentPlayers, player]);
    } else {
      setOldPlayers([...oldPlayers, player]);
    }

    // Reset form
    setNewPlayer({
      name: '',
      position: '',
      number: '',
      height: '',
      joinedYear: '',
      years: '',
      achievements: '',
      status: 'Active'
    });
    setShowAddForm(false);
  };

  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      {/* Mini Logo Pattern Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black"></div>
        <div className="absolute inset-0 opacity-60">
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
                    filter: 'drop-shadow(0 0 12px rgba(6, 182, 212, 0.6)) brightness(1.2) contrast(1.1)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Lighter overlay for content readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Add floating animation keyframe */}
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
                 <a href="#" className="text-cyan-400 font-semibold">Roster</a>
                 <a href="/3x3" className="text-gray-300 hover:text-cyan-400 transition-colors">3x3</a>
                 <a href="/5x5" className="text-gray-300 hover:text-cyan-400 transition-colors">5x5</a>
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
               <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">NEW FORCE PLAYERS</span>
             </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto drop-shadow-lg" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
              Meet our current players and honor our basketball legacy
            </p>
          </div>
        </section>

        {/* Add Player Button */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 mx-auto"
            >
              <Plus className="w-5 h-5" />
              <span>Add New Player</span>
            </button>
          </div>
        </section>

        {/* Current Players Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg">Current Players</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPlayers.map((player) => (
                <div key={player.id} className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/70 transition-all">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">#{player.number}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-1">{player.name}</h4>
                    <p className="text-cyan-400 font-medium">{player.position}</p>
                    <p className="text-gray-300 text-sm">{player.height}</p>
                  </div>
                  <div className="space-y-2 text-center">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span>Joined: {player.joinedYear}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      {player.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Old Players / Alumni Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg">Team Alumni</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {oldPlayers.map((player) => (
                <div key={player.id} className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-orange-400/30 hover:border-orange-400/70 transition-all">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">#{player.number}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-1">{player.name}</h4>
                    <p className="text-orange-400 font-medium">{player.position}</p>
                    <p className="text-gray-300 text-sm">{player.height}</p>
                  </div>
                  <div className="space-y-2 text-center">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span>{player.years}</span>
                    </div>
                    {player.achievements && (
                      <div className="flex items-center justify-center space-x-2 text-sm text-yellow-400">
                        <Trophy className="w-4 h-4" />
                        <span>{player.achievements}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add Player Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-black/80 backdrop-blur-sm rounded-lg p-8 max-w-md w-full border border-cyan-400/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Add New Player</h3>
              
              {/* Player Type Selection */}
              <div className="mb-6">
                <label className="block text-white mb-2">Player Type</label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setPlayerType('current')}
                    className={`px-4 py-2 rounded ${playerType === 'current' ? 'bg-cyan-500 text-white' : 'bg-gray-600 text-gray-300'}`}
                  >
                    Current Player
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlayerType('old')}
                    className={`px-4 py-2 rounded ${playerType === 'old' ? 'bg-orange-500 text-white' : 'bg-gray-600 text-gray-300'}`}
                  >
                    Alumni
                  </button>
                </div>
              </div>

              <form onSubmit={handleAddPlayer} className="space-y-4">
                <div>
                  <label className="block text-white mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={newPlayer.name}
                    onChange={(e) => setNewPlayer({...newPlayer, name: e.target.value})}
                    className="w-full px-3 py-2 bg-black/50 border border-gray-600 rounded text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-1">Position</label>
                  <select
                    required
                    value={newPlayer.position}
                    onChange={(e) => setNewPlayer({...newPlayer, position: e.target.value})}
                    className="w-full px-3 py-2 bg-black/50 border border-gray-600 rounded text-white"
                  >
                    <option value="">Select Position</option>
                    <option value="Point Guard">Point Guard</option>
                    <option value="Shooting Guard">Shooting Guard</option>
                    <option value="Small Forward">Small Forward</option>
                    <option value="Power Forward">Power Forward</option>
                    <option value="Center">Center</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-1">Jersey #</label>
                    <input
                      type="number"
                      required
                      value={newPlayer.number}
                      onChange={(e) => setNewPlayer({...newPlayer, number: e.target.value})}
                      className="w-full px-3 py-2 bg-black/50 border border-gray-600 rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-1">Height</label>
                    <input
                      type="text"
                      placeholder="6'2&quot;"
                      required
                      value={newPlayer.height}
                      onChange={(e) => setNewPlayer({...newPlayer, height: e.target.value})}
                      className="w-full px-3 py-2 bg-black/50 border border-gray-600 rounded text-white"
                    />
                  </div>
                </div>

                {playerType === 'current' ? (
                  <div>
                    <label className="block text-white mb-1">Joined Year</label>
                    <input
                      type="number"
                      required
                      value={newPlayer.joinedYear}
                      onChange={(e) => setNewPlayer({...newPlayer, joinedYear: e.target.value})}
                      className="w-full px-3 py-2 bg-black/50 border border-gray-600 rounded text-white"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-white mb-1">Years Played</label>
                    <input
                      type="text"
                      placeholder="2020-2023"
                      required
                      value={newPlayer.years}
                      onChange={(e) => setNewPlayer({...newPlayer, years: e.target.value})}
                      className="w-full px-3 py-2 bg-black/50 border border-gray-600 rounded text-white"
                    />
                  </div>
                )}

                {playerType === 'old' && (
                  <div>
                    <label className="block text-white mb-1">Achievements</label>
                    <input
                      type="text"
                      placeholder="MVP 2023, Team Captain"
                      value={newPlayer.achievements}
                      onChange={(e) => setNewPlayer({...newPlayer, achievements: e.target.value})}
                      className="w-full px-3 py-2 bg-black/50 border border-gray-600 rounded text-white"
                    />
                  </div>
                )}

                <div className="flex space-x-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded hover:from-cyan-600 hover:to-blue-700 transition-colors"
                  >
                    Add Player
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

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
                  Striking like lightning with skill, passion, and determination. Join us for an electrifying season!
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><a href="#" className="hover:text-white transition-colors">Team Roster</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Season Stats</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Fan Zone</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Buy Tickets</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Merchandise</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Season Pass</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Fan Club</a></li>
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