'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Trophy, Users, Target, Phone, Mail, MapPin, Star, Clock, Award, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('achievements');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rightNavOpen, setRightNavOpen] = useState(false);

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
          poster="/logo.png"
        >
          <source src="/pp.mov" type="video/mp4" />
          <source src="/pp.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
        
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
        
        {/* Animated particles overlay - Reduced on mobile for performance */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: window.innerWidth < 768 ? 10 : 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 sm:w-2 h-1 sm:h-2 bg-cyan-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* All content with relative positioning */}
      <div className="relative z-10">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-cyan-400/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-6">
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Logo */}
              <div className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/logo.png" 
                  alt="New Force Basketball Club Logo" 
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-16 sm:h-16 object-contain drop-shadow-lg"
                />
              </div>
              {/* Team Name */}
              <div className="flex-shrink-0">
                <h1 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  New Force
                </h1>
                <p className="text-xs sm:text-sm text-cyan-200 mt-0.5 sm:mt-1 font-medium">Basketball Club</p>
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
      <section id="home" className="py-6 sm:py-10 md:py-20 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Animated Title with Glow Effect */}
          <div className="relative mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-wider animate-pulse leading-tight" style={{fontFamily: 'Impact, "Arial Black", "Franklin Gothic Bold", Charcoal, sans-serif'}}>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse block mb-2" style={{
                textShadow: '0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(34, 211, 238, 0.4), 0 0 60px rgba(34, 211, 238, 0.2)',
                animation: 'glow 2s ease-in-out infinite alternate'
              }}>
                NEW FORCE
              </span>
              <span className="text-orange-400 text-2xl sm:text-3xl md:text-5xl lg:text-6xl animate-bounce block" style={{
                textShadow: '0 0 20px rgba(251, 146, 60, 0.8), 0 0 40px rgba(251, 146, 60, 0.4), 0 0 60px rgba(251, 146, 60, 0.2)',
                animation: 'bounce 2s infinite'
              }}>
                BASKETBALL
              </span>
            </h2>
            
            {/* Floating Basketball Icons - Hidden on mobile for better spacing */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-8 h-8 animate-bounce" style={{animationDelay: '0.5s'}}>
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-2 border-orange-300 shadow-lg flex items-center justify-center">
                <div className="w-0.5 h-full bg-orange-300 rounded-full"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-300 rounded-full"></div>
              </div>
            </div>
            <div className="hidden sm:block absolute -top-4 -right-4 w-8 h-8 animate-bounce" style={{animationDelay: '1s'}}>
              <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full border-2 border-cyan-300 shadow-lg flex items-center justify-center">
                <div className="w-0.5 h-full bg-cyan-300 rounded-full"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-cyan-300 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Animated Mission Statement */}
          <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
            <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl sm:rounded-full p-4 sm:p-6 shadow-2xl border-2 sm:border-4 border-orange-300 transform hover:scale-105 transition-all duration-500 hover:shadow-orange-500/50">
              {/* Animated Basketball texture lines - Simplified on mobile */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-full">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-full bg-orange-300 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-0.5 sm:h-1 bg-orange-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="hidden sm:block absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-orange-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center px-2 sm:px-0">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-3 sm:mb-4 drop-shadow-lg animate-pulse" style={{fontFamily: 'Impact, "Arial Black", sans-serif', animationDelay: '1.5s'}}>
                  ⚡ MISSION STATEMENT ⚡
                </h3>
                <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-semibold max-w-3xl mx-auto" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                  <p className="mb-2 sm:mb-3 md:mb-4 transform hover:scale-105 transition-transform duration-300">
                    New Force Basketball Club is dedicated to <span className="text-cyan-200 font-bold animate-pulse">empowering athletes</span> through comprehensive training, strategic development, and international exposure.
                  </p>
                  <p className="mb-2 sm:mb-3 md:mb-4 transform hover:scale-105 transition-transform duration-300">
                    Our mission extends to inspiring communities by promoting <span className="text-cyan-200 font-bold animate-pulse">sportsmanship, teamwork, and excellence</span> both on and off the court.
                  </p>
                  <p className="transform hover:scale-105 transition-transform duration-300">
                    We are committed to creating a platform where <span className="text-cyan-200 font-bold animate-pulse">talent meets opportunity</span>, driving the growth of professional basketball and fostering a culture of success and integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>



          {/* Call to Action Button */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Link href="/roster" className="inline-block bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 hover:from-cyan-600 hover:via-blue-700 hover:to-cyan-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 border-2 border-cyan-300/50 animate-pulse w-full sm:w-auto max-w-xs sm:max-w-none">
              🏀 JOIN THE FORCE 🏀
            </Link>
          </div>
        </div>
      </section>

      {/* Right Side Navigation Tab */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        {/* Navigation Toggle Button */}
        <button
          onClick={() => setRightNavOpen(!rightNavOpen)}
          className="bg-gradient-to-l from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-3 rounded-l-lg shadow-lg transition-all duration-300 hover:scale-105 border-r-0"
          aria-label="Toggle navigation menu"
        >
          {rightNavOpen ? (
            <ChevronRight className="w-6 h-6" />
          ) : (
            <ChevronLeft className="w-6 h-6" />
          )}
        </button>

        {/* Navigation Panel */}
        <div className={`absolute right-0 top-0 transform transition-all duration-300 ease-in-out ${
          rightNavOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="bg-black/90 backdrop-blur-md border-l border-cyan-400/30 rounded-l-lg shadow-2xl p-4 sm:p-6 min-w-[250px] sm:min-w-[280px] max-w-[90vw] sm:max-w-none">
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2">Navigation</h3>
              <p className="text-xs sm:text-sm text-gray-300">Quick access to all pages</p>
            </div>
            
            <nav className="space-y-2 sm:space-y-3">
              <Link 
                href="/" 
                className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-cyan-600/20 hover:to-blue-600/20 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-200 group"
                onClick={() => setRightNavOpen(false)}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors text-sm sm:text-base">Home</div>
                  <div className="text-xs text-gray-400">Main page</div>
                </div>
              </Link>

              <Link 
                href="/tgbl" 
                className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-cyan-600/20 hover:to-blue-600/20 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-200 group"
                onClick={() => setRightNavOpen(false)}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors text-sm sm:text-base">TGBL</div>
                  <div className="text-xs text-gray-400">Tournament info</div>
                </div>
              </Link>

              <Link 
                href="/live" 
                className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-cyan-600/20 hover:to-blue-600/20 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-200 group"
                onClick={() => setRightNavOpen(false)}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors text-sm sm:text-base">Live Stream</div>
                  <div className="text-xs text-gray-400">Watch games</div>
                </div>
              </Link>

              <Link 
                href="/3x3" 
                className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-cyan-600/20 hover:to-blue-600/20 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-200 group"
                onClick={() => setRightNavOpen(false)}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full text-white flex items-center justify-center flex-shrink-0">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors text-sm sm:text-base">3x3</div>
                  <div className="text-xs text-gray-400">3-on-3 basketball</div>
                </div>
              </Link>

              <Link 
                href="/roster" 
                className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-cyan-600/20 hover:to-blue-600/20 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-200 group"
                onClick={() => setRightNavOpen(false)}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors text-sm sm:text-base">Roster</div>
                  <div className="text-xs text-gray-400">Team players</div>
                </div>
              </Link>

              <Link 
                href="/contact" 
                className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-cyan-600/20 hover:to-blue-600/20 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-200 group"
                onClick={() => setRightNavOpen(false)}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors text-sm sm:text-base">Contact</div>
                  <div className="text-xs text-gray-400">Get in touch</div>
                </div>
              </Link>
            </nav>

            {/* Mobile-friendly close button */}
            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-600/30">
              <button
                onClick={() => setRightNavOpen(false)}
                className="w-full bg-gradient-to-r from-gray-600/50 to-gray-500/50 hover:from-gray-500/70 hover:to-gray-400/70 text-white py-3 sm:py-2 px-4 rounded-lg transition-all duration-200 text-sm font-medium touch-manipulation"
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      </div>

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
      
      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes glow {
          0% { text-shadow: 0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(34, 211, 238, 0.4), 0 0 60px rgba(34, 211, 238, 0.2); }
          100% { text-shadow: 0 0 30px rgba(34, 211, 238, 1), 0 0 60px rgba(34, 211, 238, 0.6), 0 0 90px rgba(34, 211, 238, 0.4); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.8), 0 0 60px rgba(34, 211, 238, 0.4); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          .animate-pulse {
            animation-duration: 3s;
          }
          
          .animate-bounce {
            animation-duration: 3s;
          }
        }
        
        /* Touch-friendly improvements */
        button, a {
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        
        /* Smooth scrolling for mobile */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
} 