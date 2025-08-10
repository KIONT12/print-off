'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Trophy, Users, Target, Phone, Mail, MapPin, Star, Clock, Award, Menu, X } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('achievements');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <source src="/pp.mov" type="video/mp4" />
          <source src="/pp.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better content readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* All content with relative positioning */}
      <div className="relative z-10">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-6">
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="New Force Basketball Club Logo" 
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-16 sm:h-16 object-contain"
                />
              </div>
              {/* Team Name */}
              <div className="flex-shrink-0">
                <h1 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  New Force
                </h1>
                <p className="text-xs sm:text-sm text-gray-300 mt-0.5 sm:mt-1">Basketball Club</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
              <Link href="/tgbl" className="text-gray-300 hover:text-cyan-400 transition-colors">TGBL</Link>
              <Link href="/live" className="text-gray-300 hover:text-cyan-400 transition-colors">Live Stream</Link>
              <Link href="/3x3" className="text-gray-300 hover:text-cyan-400 transition-colors">3x3</Link>
              <Link href="/roster" className="text-gray-300 hover:text-cyan-400 transition-colors">Roster</Link>
              <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-black/20 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-sm rounded-lg mt-2">
                <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-black/20 rounded-md transition-colors">Home</a>
                <Link href="/tgbl" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-black/20 rounded-md transition-colors">TGBL</Link>
                <Link href="/live" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-black/20 rounded-md transition-colors">Live Stream</Link>
                <Link href="/3x3" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-black/20 rounded-md transition-colors">3x3</Link>
                <Link href="/roster" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-black/20 rounded-md transition-colors">Roster</Link>
                <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-black/20 rounded-md transition-colors">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-10 sm:py-20 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 sm:mb-8 tracking-wider drop-shadow-2xl" style={{fontFamily: 'Impact, "Arial Black", "Franklin Gothic Bold", Charcoal, sans-serif', textShadow: '3px 3px 6px rgba(0,0,0,0.8)'}}>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">NEW FORCE</span>
            <br />
            <span className="text-orange-400 text-3xl sm:text-5xl md:text-6xl">BASKETBALL</span>
          </h2>
          
          {/* Mission Statement - Basketball Format */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-4 sm:p-6 shadow-2xl border-3 border-black">
              {/* Basketball texture lines */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-black"></div>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-0.5 bg-black"></div>
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-black rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4 drop-shadow-lg" style={{fontFamily: 'Impact, "Arial Black", sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                  MISSION STATEMENT
                </h3>
                <div className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-semibold max-w-3xl mx-auto" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                  <p className="mb-3 sm:mb-4">
                    New Force Basketball Club is dedicated to <span className="text-cyan-200 font-bold">empowering athletes</span> through comprehensive training, strategic development, and international exposure.
                  </p>
                  <p className="mb-3 sm:mb-4">
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

      

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-cyan-400/20 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6 md:mb-0">
              <Image src="/logo.png" width={40} height={40} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2024 Print Off Basketball. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
} 