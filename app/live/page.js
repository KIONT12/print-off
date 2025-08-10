'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Radio, Users, Calendar, Clock, AlertCircle, RefreshCw, Star, MapPin } from 'lucide-react';
import { 
  checkLiveStream, 
  checkSpecificVideoLive,
  getUpcomingStreams, 
  formatStreamDate, 
  createEmbedUrl, 
  BTL_CONFIG, 
  isApiConfigured 
} from '../utils/youtube';

export default function LiveStream() {
  const [isLive, setIsLive] = useState(false);
  const [liveVideoId, setLiveVideoId] = useState(null);
  const [liveStreamData, setLiveStreamData] = useState(null);
  const [upcomingStreams, setUpcomingStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastChecked, setLastChecked] = useState(null);
  const [autoPlay, setAutoPlay] = useState(false);

  // API configuration
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = BTL_CONFIG.channelId;

  // New Force Full Schedule Data
  const newForceSchedule = [
    { home: 'Raw Camp', away: 'New Force', date: 'Oct.3', time: 'TBD', venue: 'Raw Camp Court', highlight: true },
    { home: 'New Force', away: 'Bangkok Warriors', date: 'Oct.10', time: 'TBD', venue: 'New Force Arena', highlight: true },
    { home: 'New Force', away: 'CNX Orion', date: 'Oct.17', time: 'TBD', venue: 'New Force Arena', highlight: true },
    { home: 'Fully Feared', away: 'New Force', date: 'Oct.24', time: 'TBD', venue: 'Fully Feared Court', highlight: true },
    { home: 'New Force', away: 'Krabi Bears', date: 'Oct.31', time: 'TBD', venue: 'New Force Arena', highlight: true },
    { home: 'Naga Hunters', away: 'New Force', date: 'Nov.7', time: 'TBD', venue: 'Naga Hunters Court', highlight: true },
    { home: 'New Force', away: 'Shoot it Dragons', date: 'Nov.14', time: 'TBD', venue: 'New Force Arena', highlight: true },
    { home: 'ST Grizzlies', away: 'New Force', date: 'Nov.21', time: 'TBD', venue: 'ST Grizzlies Arena', highlight: true },
    { home: 'New Force', away: 'Thai Gorillas', date: 'Nov.28', time: 'TBD', venue: 'New Force Arena', highlight: true },
    { home: 'New Force', away: 'Raw Camp', date: 'Dec.5', time: 'TBD', venue: 'New Force Arena', highlight: true },
    { home: 'Bangkok Warriors', away: 'New Force', date: 'Dec.12', time: 'TBD', venue: 'Bangkok Warriors Arena', highlight: true },
    { home: 'CNX Orion', away: 'New Force', date: 'Dec.19', time: 'TBD', venue: 'CNX Orion Arena', highlight: true },
    { home: 'New Force', away: 'Fully Feared', date: 'Dec.26', time: 'TBD', venue: 'New Force Arena', highlight: true },
    { home: 'Krabi Bears', away: 'New Force', date: 'Jan.2', time: 'TBD', venue: 'Krabi Sports Complex', highlight: true },
    { home: 'New Force', away: 'Naga Hunters', date: 'Jan.9', time: 'TBD', venue: 'New Force Arena', highlight: true },
    { home: 'Shoot it Dragons', away: 'New Force', date: 'Jan.16', time: 'TBD', venue: 'Shoot it Dragons Court', highlight: true },
    { home: 'New Force', away: 'ST Grizzlies', date: 'Jan.23', time: 'TBD', venue: 'New Force Arena', highlight: true },
    { home: 'Thai Gorillas', away: 'New Force', date: 'Jan.30', time: 'TBD', venue: 'Thai Gorillas Arena', highlight: true }
  ];

  // Check for live streams
  const checkLiveStreams = useCallback(async (showLoading = true) => {
    try {
      if (showLoading) setLoading(true);
      setError(null);
      
      if (!isApiConfigured()) {
        // Fallback mode without API
        console.log('YouTube API not configured, using fallback mode');
        setLoading(false);
        setIsLive(false);
        setLiveVideoId(null);
        setLastChecked(new Date());
        return;
      }

      // Check for the specific game video
      const result = await checkSpecificVideoLive(BTL_CONFIG.specificGameVideoId, API_KEY);
      
      if (result.error) {
        setError(`API Error: ${result.error.message || 'Unknown error'}`);
      } else {
        setIsLive(result.isLive);
        setLiveVideoId(result.videoId);
        setLiveStreamData(result.streamData);
        

      }
      
      // Also get upcoming streams
      const upcoming = await getUpcomingStreams(CHANNEL_ID, API_KEY);
      setUpcomingStreams(upcoming);
      
      setLastChecked(new Date());
      setLoading(false);
      
    } catch (err) {
      console.error('Error checking live streams:', err);
      setError('Failed to check live streams: ' + err.message);
      setLoading(false);
    }
  }, [API_KEY, CHANNEL_ID]);

  useEffect(() => {
    checkLiveStreams();
    // Check every 30 seconds for live streams
    const interval = setInterval(() => checkLiveStreams(false), 30000);
    return () => clearInterval(interval);
  }, [checkLiveStreams]);

  // Manual refresh
  const handleRefresh = () => {
    checkLiveStreams(true);
  };

  // Manual override for testing (only when API is not configured)
  const handleManualLiveTest = () => {
    setIsLive(true);
    // Use the specific game video ID
    setLiveVideoId(BTL_CONFIG.specificGameVideoId);
    setLiveStreamData({
      title: 'New Force Basketball Game - LIVE',
      description: 'Live basketball game stream from BTL OFFICIAL',
      viewers: '1,234'
    });
  };



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
          <source src="/kj.mov" type="video/mp4" />
          <source src="/kj.mov" type="video/quicktime" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image 
                    src="/logo.png" 
                    alt="New Force Basketball Club Logo" 
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div className="flex-shrink-0">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    New Force
                  </h1>
                  <p className="text-sm text-gray-300 mt-1">Live Stream</p>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
                <Link href="/tgbl" className="text-gray-300 hover:text-cyan-400 transition-colors">TGBL</Link>
                <Link href="/live" className="text-cyan-400 font-semibold">Live Stream</Link>
                <Link href="/3x3" className="text-gray-300 hover:text-cyan-400 transition-colors">3x3</Link>
                <Link href="/roster" className="text-gray-300 hover:text-cyan-400 transition-colors">Roster</Link>
              </nav>
                             <div className="flex items-center space-x-4">
                 <div className="flex items-center space-x-2">
                   <Radio className={`w-5 h-5 ${isLive ? 'text-red-500 animate-pulse' : 'text-gray-400'}`} />
                   <span className={`text-sm font-semibold ${isLive ? 'text-red-500' : 'text-gray-400'}`}>
                     {isLive ? 'LIVE' : 'OFFLINE'}
                   </span>
                 </div>
                 {lastChecked && (
                   <span className="text-xs text-gray-500">
                     Last checked: {lastChecked.toLocaleTimeString()}
                   </span>
                 )}
                 <button 
                   onClick={handleRefresh}
                   className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                   disabled={loading}
                 >
                   <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                 </button>
               </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Live Stream Header */}
            <div className="text-center mb-8">
              <h2 className="text-5xl font-black text-white mb-4 drop-shadow-lg" 
                  style={{fontFamily: 'Impact, "Arial Black", sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  LIVE STREAM
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Monitoring specific New Force Basketball game
              </p>
              <p className="text-sm text-gray-400">
                Video: <span className="text-cyan-400 font-mono">{BTL_CONFIG.specificGameVideoId}</span> from{' '}
                <a 
                  href={`https://www.youtube.com/watch?v=${BTL_CONFIG.specificGameVideoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  BTL OFFICIAL
                </a>
              </p>
            </div>

            {/* Stream Status */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Basketball TV Screen */}
              <div className="lg:col-span-2">
                {/* TV Outer Frame */}
                <div className="relative p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl">
                  
                  {/* TV Frame Decorations */}
                  <div className="absolute inset-4 rounded-2xl border-4 border-gray-700"></div>
                  <div className="absolute inset-6 rounded-xl border-2 border-gray-600"></div>
                  
                  {/* Basketball Corner Decorations */}
                  <div className="absolute top-2 left-2 w-6 h-6 bg-orange-500 rounded-full border-2 border-orange-600">
                    <div className="absolute inset-0 rounded-full">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-orange-700"></div>
                      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-0.5 bg-orange-700"></div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 w-6 h-6 bg-orange-500 rounded-full border-2 border-orange-600">
                    <div className="absolute inset-0 rounded-full">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-orange-700"></div>
                      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-0.5 bg-orange-700"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 bg-orange-500 rounded-full border-2 border-orange-600">
                    <div className="absolute inset-0 rounded-full">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-orange-700"></div>
                      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-0.5 bg-orange-700"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-orange-500 rounded-full border-2 border-orange-600">
                    <div className="absolute inset-0 rounded-full">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-orange-700"></div>
                      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-0.5 bg-orange-700"></div>
                    </div>
                  </div>
                  
                  {/* Brand Label */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-3 py-1 rounded-full border border-gray-600">
                    <span className="text-cyan-400 text-xs font-bold tracking-wider">NEW FORCE TV</span>
                  </div>
                  
                  {/* Power Button */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-3 h-3 rounded-full border-2 ${isLive ? 'bg-red-500 border-red-400 shadow-lg shadow-red-500/50' : 'bg-gray-700 border-gray-600'}`}>
                      {isLive && <div className="w-full h-full rounded-full bg-red-400 animate-pulse"></div>}
                    </div>
                  </div>
                  
                  {/* Main Screen */}
                  <div className="relative bg-black rounded-xl overflow-hidden border-4 border-gray-800 shadow-inner">
                    
                    {/* Screen Reflection Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-10"></div>
                    
                    {/* API Status Banner */}
                    {!isApiConfigured() && (
                      <div className="bg-orange-500/20 border-b border-orange-400/20 p-3 relative z-20">
                        <div className="flex items-center space-x-2 text-orange-300">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-sm">
                            YouTube API not configured. Monitoring specific game video in demo mode.
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {/* Error Banner */}
                    {error && (
                      <div className="bg-red-500/20 border-b border-red-400/20 p-3 relative z-20">
                        <div className="flex items-center space-x-2 text-red-300">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-sm">{error}</span>
                        </div>
                      </div>
                    )}
                    
                    {loading ? (
                      <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                        {/* TV Static Effect */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                        </div>
                        <div className="text-center relative z-10">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
                          <p className="text-gray-300">Checking for New Force game...</p>
                        </div>
                      </div>
                    ) : isLive && liveVideoId ? (
                      <div className="aspect-video relative">
                        {/* Live Border Effect */}
                        <div className="absolute inset-0 border-2 border-red-500 rounded animate-pulse z-10 pointer-events-none"></div>
                        <iframe
                          src={createEmbedUrl(liveVideoId, false)}
                          title="Live Stream"
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        {/* Live Indicator */}
                        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold z-20 animate-pulse">
                          ● LIVE
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative">
                        {/* Basketball Court Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-orange-400 rounded-full"></div>
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-400"></div>
                          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-1 bg-orange-400"></div>
                        </div>
                        
                        <div className="text-center p-8 relative z-10">
                          <div className="relative mb-6">
                            <Play className="w-16 h-16 text-gray-500 mx-auto" />
                            <div className="absolute inset-0 w-16 h-16 mx-auto border-2 border-gray-600 rounded-full animate-ping"></div>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">GAME NOT LIVE</h3>
                          <p className="text-gray-400 mb-6">
                            Monitoring for New Force game broadcast...
                          </p>
                          <p className="text-xs text-gray-500 mb-4">
                            Video ID: {BTL_CONFIG.specificGameVideoId}
                          </p>
                          
                          {/* Manual Test Button - Only show when API is not configured */}
                          {!isApiConfigured() && (
                            <button
                              onClick={handleManualLiveTest}
                              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-3 rounded-lg font-semibold transition-all mb-4 shadow-lg"
                            >
                              📺 Test Broadcast
                            </button>
                          )}
                          
                          <div className="mt-6">
                            <a 
                              href={`https://www.youtube.com/watch?v=${BTL_CONFIG.specificGameVideoId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <span>View game on YouTube</span>
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* TV Stand */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl border-x-4 border-b-4 border-gray-600"></div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-800 rounded-full border-2 border-gray-600"></div>
                </div>
                
                {/* Stream Info Panel */}
                {isLive && liveStreamData && (
                  <div className="mt-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-4 border border-orange-400/30">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-red-400 font-bold text-sm">LIVE BROADCAST</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{liveStreamData.title}</h3>
                    <p className="text-gray-300 mb-3 line-clamp-2">{liveStreamData.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{liveStreamData.viewers} watching</span>
                        </div>
                      </div>
                      <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        ON AIR
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                
                {/* Next Game */}
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-cyan-400" />
                    Next Game
                  </h3>
                  <div className="space-y-3">
                    <div className="text-white">
                      <p className="font-semibold">New Force vs Ice Wolves</p>
                      <p className="text-gray-400 text-sm">Away Game</p>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>Jan 25, 7:00 PM</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-4 py-2 rounded-lg font-semibold transition-colors">
                      Set Reminder
                    </button>
                  </div>
                </div>

                {/* Stream Schedule */}
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
                  <h3 className="text-xl font-bold text-white mb-4">Stream Schedule</h3>
                  <div className="space-y-3">
                    {upcomingStreams.length > 0 ? (
                      upcomingStreams.map((stream, index) => (
                        <div key={stream.videoId} className={`border-l-4 ${index === 0 ? 'border-cyan-400' : 'border-gray-600'} pl-3`}>
                          <p className="text-white font-semibold truncate">{stream.title}</p>
                          <p className="text-gray-400 text-sm">
                            {formatStreamDate(stream.scheduledStartTime)}
                          </p>
                        </div>
                      ))
                    ) : isApiConfigured() ? (
                      <div className="border-l-4 border-gray-600 pl-3">
                        <p className="text-white font-semibold">No upcoming streams</p>
                        <p className="text-gray-400 text-sm">Check back later for scheduled games</p>
                      </div>
                    ) : (
                      <>
                        <div className="border-l-4 border-cyan-400 pl-3">
                          <p className="text-white font-semibold">Today</p>
                          <p className="text-gray-400 text-sm">No scheduled streams</p>
                        </div>
                        <div className="border-l-4 border-gray-600 pl-3">
                          <p className="text-white font-semibold">Jan 25</p>
                          <p className="text-gray-400 text-sm">Game vs Ice Wolves - 7:00 PM</p>
                        </div>
                        <div className="border-l-4 border-gray-600 pl-3">
                          <p className="text-white font-semibold">Jan 29</p>
                          <p className="text-gray-400 text-sm">Game vs Golden Bears - 8:00 PM</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>


              </div>
            </div>
            
            {/* New Force Full Schedule Section */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-black text-white mb-4 drop-shadow-lg" 
                    style={{fontFamily: 'Impact, "Arial Black", sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                  <span className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                    NEW FORCE FULL SCHEDULE
                  </span>
                </h3>
                <p className="text-xl text-gray-300 mb-6">
                  Complete TGBL 2025 Season Schedule for New Force Basketball Club
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <div className="flex items-center space-x-2 text-orange-400">
                    <Star className="w-5 h-5" />
                    <span className="font-semibold">All New Force Games</span>
                  </div>
                  <div className="w-px h-6 bg-gray-600"></div>
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">TGBL 2025 Season</span>
                  </div>
                </div>
              </div>

              {/* Schedule Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {newForceSchedule.map((game, index) => (
                  <div 
                    key={index} 
                    className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r from-orange-500/20 via-red-500/20 to-yellow-500/20 border-orange-400/50 shadow-lg shadow-orange-500/25"
                  >
                    {/* Game Date & Time */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-orange-400" />
                        <span className="text-orange-300 font-bold">{game.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-300 text-sm">{game.time}</span>
                      </div>
                    </div>

                    {/* Teams */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">Away</span>
                        <span className="text-cyan-300 font-bold">{game.away}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">Home</span>
                        <span className="text-cyan-300 font-bold">{game.home}</span>
                      </div>
                    </div>

                    {/* Venue */}
                    <div className="flex items-center space-x-2 mb-4">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{game.venue}</span>
                    </div>

                    {/* New Force Game Badge */}
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 py-2 rounded-full border border-orange-400/50">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-orange-300 font-bold">New Force Game</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Schedule Info */}
              <div className="mt-12 text-center">
                <div className="inline-block bg-gradient-to-r from-orange-500/20 via-red-500/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 shadow-2xl">
                  <h4 className="text-2xl font-bold text-white mb-4">TGBL 2025 Season</h4>
                  <p className="text-gray-300 mb-4">
                    New Force Basketball Club will play <span className="text-orange-300 font-bold">{newForceSchedule.length} games</span> in the 2025 TGBL season
                  </p>
                  <div className="grid grid-cols-2 gap-6 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400">{newForceSchedule.filter(g => g.home === 'New Force').length}</div>
                      <div className="text-gray-400">Home Games</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{newForceSchedule.filter(g => g.away === 'New Force').length}</div>
                      <div className="text-gray-400">Away Games</div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link 
                      href="/tgbl" 
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                    >
                      <span>View Full TGBL Schedule</span>
                      <Calendar className="w-5 h-5" />
                    </Link>
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