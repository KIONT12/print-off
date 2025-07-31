'use client';

import { useState } from 'react';
import { Calendar, Trophy, Users, Target, Phone, Mail, MapPin, Star, Clock, Award } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('achievements');

  const players = [
    { 
      name: 'Marcus Johnson', 
      position: 'Point Guard', 
      number: 23, 
      height: '6\'2"', 
      stats: { ppg: 18.5, apg: 8.2, rpg: 4.1 },
      image: '/api/placeholder/200/250'
    },
    { 
      name: 'Derek Williams', 
      position: 'Shooting Guard', 
      number: 10, 
      height: '6\'4"', 
      stats: { ppg: 22.1, apg: 3.5, rpg: 5.3 },
      image: '/api/placeholder/200/250'
    },
    { 
      name: 'Andre Thompson', 
      position: 'Small Forward', 
      number: 7, 
      height: '6\'7"', 
      stats: { ppg: 16.8, apg: 4.7, rpg: 7.2 },
      image: '/api/placeholder/200/250'
    },
    { 
      name: 'James Mitchell', 
      position: 'Power Forward', 
      number: 44, 
      height: '6\'9"', 
      stats: { ppg: 14.3, apg: 2.1, rpg: 9.8 },
      image: '/api/placeholder/200/250'
    },
    { 
      name: 'Kevin Davis', 
      position: 'Center', 
      number: 33, 
      height: '7\'0"', 
      stats: { ppg: 19.7, apg: 1.8, rpg: 11.5 },
      image: '/api/placeholder/200/250'
    }
  ];

  const schedule = [
    { date: 'Jan 15', opponent: 'Lightning Bolts', time: '7:00 PM', home: true, result: 'W 98-87' },
    { date: 'Jan 18', opponent: 'Fire Hawks', time: '8:00 PM', home: false, result: 'L 92-95' },
    { date: 'Jan 22', opponent: 'Storm Eagles', time: '7:30 PM', home: true, result: 'W 105-89' },
    { date: 'Jan 25', opponent: 'Ice Wolves', time: '7:00 PM', home: false, result: null },
    { date: 'Jan 29', opponent: 'Golden Bears', time: '8:00 PM', home: true, result: null },
    { date: 'Feb 2', opponent: 'Steel Panthers', time: '7:30 PM', home: false, result: null }
  ];

  const teamStats = {
    wins: 18,
    losses: 4,
    ppg: 108.2,
    oppPpg: 98.7,
    rank: 2
  };

  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      {/* Full Page Video Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/kj.mov" type="video/mp4" />
          <source src="/kj.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better content readability */}
        <div className="absolute inset-0 bg-black/50"></div>
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
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
              <a href="/roster" className="text-gray-300 hover:text-cyan-400 transition-colors">Roster</a>
              <a href="/3x3" className="text-gray-300 hover:text-cyan-400 transition-colors">3x3</a>
              <a href="/5x5" className="text-gray-300 hover:text-cyan-400 transition-colors">5x5</a>
              <a href="/live" className="text-gray-300 hover:text-cyan-400 transition-colors">Live Stream</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-4 py-2 rounded-lg font-semibold transition-colors">
                Get Tickets
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-wider drop-shadow-2xl" style={{fontFamily: 'Impact, "Arial Black", "Franklin Gothic Bold", Charcoal, sans-serif', textShadow: '3px 3px 6px rgba(0,0,0,0.8)'}}>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">NEW FORCE</span>
            <br />
            <span className="text-orange-400 text-5xl md:text-6xl">BASKETBALL</span>
          </h2>
          
          {/* Mission Statement - Basketball Format */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-6 shadow-2xl border-3 border-black">
              {/* Basketball texture lines */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-black"></div>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-0.5 bg-black"></div>
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-black rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 drop-shadow-lg" style={{fontFamily: 'Impact, "Arial Black", sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                  MISSION STATEMENT
                </h3>
                <div className="text-white text-base md:text-lg leading-relaxed font-semibold max-w-3xl mx-auto" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                  <p className="mb-4">
                    New Force Basketball Club is dedicated to <span className="text-cyan-200 font-bold">empowering athletes</span> through comprehensive training, strategic development, and international exposure.
                  </p>
                  <p className="mb-4">
                    Our mission extends to inspiring communities by promoting <span className="text-cyan-200 font-bold">sportsmanship, teamwork, and excellence</span> both on and off the court.
                  </p>
                  <p>
                    We are committed to creating a platform where <span className="text-cyan-200 font-bold">talent meets opportunity</span>, driving the growth of professional basketball and fostering a culture of success and integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






      {/* New Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-8 drop-shadow-lg" style={{fontFamily: 'Impact, "Arial Black", sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              YOUR CONTENT HERE
            </h3>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-cyan-400/20">
              <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-lg" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                This is your new section! Let me know what content you&apos;d like to add here - whether it&apos;s team information, programs, events, or anything else you have in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
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
                <li><a href="#roster" className="hover:text-white transition-colors">Team Roster</a></li>
                <li><a href="#schedule" className="hover:text-white transition-colors">Game Schedule</a></li>
                <li><a href="#stats" className="hover:text-white transition-colors">Season Stats</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
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