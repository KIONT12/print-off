'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Radio, Users, Calendar, Clock, AlertCircle, RefreshCw } from 'lucide-react';
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
  const [autoPlay, setAutoPlay] = useState(true);

  // API configuration
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = BTL_CONFIG.channelId;

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
        
        // If the specific game is live and auto-play is enabled, it will auto-play
        if (result.isLive && autoPlay) {
          console.log('Specific game detected live, auto-playing...');
        }
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
  }, [API_KEY, autoPlay, CHANNEL_ID]);

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

  // Toggle auto-play setting
  const handleAutoPlayToggle = (checked) => {
    setAutoPlay(checked);
    localStorage.setItem('autoPlayStreams', checked.toString());
  };

  // Load auto-play preference on mount
  useEffect(() => {
    const savedAutoPlay = localStorage.getItem('autoPlayStreams');
    if (savedAutoPlay !== null) {
      setAutoPlay(savedAutoPlay === 'true');
    }
  }, []);

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
                <Link href="/roster" className="text-gray-300 hover:text-cyan-400 transition-colors">Roster</Link>
                <Link href="/3x3" className="text-gray-300 hover:text-cyan-400 transition-colors">3x3</Link>
                <Link href="/5x5" className="text-gray-300 hover:text-cyan-400 transition-colors">5x5</Link>
                <Link href="/live" className="text-cyan-400 font-semibold">Live Stream</Link>
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
                          src={createEmbedUrl(liveVideoId, autoPlay)}
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

                {/* Stream Settings */}
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
                  <h3 className="text-xl font-bold text-white mb-4">Stream Settings</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="rounded mr-2" 
                        checked={autoPlay}
                        onChange={(e) => handleAutoPlayToggle(e.target.checked)}
                      />
                      <span className="text-gray-300">Auto-play live streams</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded mr-2" defaultChecked />
                      <span className="text-gray-300">Notifications</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded mr-2" />
                      <span className="text-gray-300">High quality (uses more data)</span>
                    </label>
                  </div>
                  
                  {/* API Status */}
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">API Status:</span>
                      <span className={`font-semibold ${isApiConfigured() ? 'text-green-400' : 'text-orange-400'}`}>
                        {isApiConfigured() ? 'Connected' : 'Not Configured'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-gray-400">Monitoring:</span>
                      <span className="text-cyan-400">Specific Game</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-gray-400">Video ID:</span>
                      <span className="text-gray-300 text-xs font-mono">{BTL_CONFIG.specificGameVideoId}</span>
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