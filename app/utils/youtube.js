// YouTube API utility functions

// Get the YouTube channel ID from the channel URL
export const getChannelIdFromUrl = async (channelUrl) => {
  try {
    // Extract handle from URL like https://www.youtube.com/@BTLOFFICIAL2023
    const handle = channelUrl.split('@')[1];
    if (!handle) return null;
    
    // You would need to use YouTube Data API to convert handle to channel ID
    // For now, return a placeholder - you'll need to implement this with your API key
    return 'UCYourActualChannelId';
  } catch (error) {
    console.error('Error extracting channel ID:', error);
    return null;
  }
};

// Check if a specific video is currently live streaming
export const checkSpecificVideoLive = async (videoId, apiKey) => {
  try {
    if (!apiKey) {
      console.warn('YouTube API key not provided');
      return { isLive: false, videoId: null, streamData: null };
    }

    // Get video details to check if it's live
    const videoDetailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&id=${videoId}&key=${apiKey}`;
    const response = await fetch(videoDetailsUrl);
    const data = await response.json();
    
    if (data.error) {
      console.error('YouTube API error:', data.error);
      return { isLive: false, videoId: null, streamData: null, error: data.error };
    }
    
    if (data.items && data.items.length > 0) {
      const video = data.items[0];
      const isLive = video.snippet.liveBroadcastContent === 'live';
      
      if (isLive) {
        return {
          isLive: true,
          videoId: videoId,
          streamData: {
            title: video.snippet.title,
            description: video.snippet.description,
            thumbnail: video.snippet.thumbnails.high?.url,
            publishedAt: video.snippet.publishedAt,
            viewers: video.liveStreamingDetails?.concurrentViewers || 'N/A',
            scheduledStartTime: video.liveStreamingDetails?.scheduledStartTime
          }
        };
      }
    }
    
    return { isLive: false, videoId: null, streamData: null };
  } catch (error) {
    console.error('Error checking specific video live status:', error);
    return { isLive: false, videoId: null, streamData: null, error: error.message };
  }
};

// Check if a channel is currently live streaming
export const checkLiveStream = async (channelId, apiKey) => {
  try {
    if (!apiKey) {
      console.warn('YouTube API key not provided');
      return { isLive: false, videoId: null, streamData: null };
    }

    // Search for live videos from the specific channel
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;
    
    const response = await fetch(searchUrl);
    const data = await response.json();
    
    if (data.error) {
      console.error('YouTube API error:', data.error);
      return { isLive: false, videoId: null, streamData: null, error: data.error };
    }
    
    if (data.items && data.items.length > 0) {
      const liveStream = data.items[0];
      
      // Get additional stream details
      const videoDetailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails,statistics&id=${liveStream.id.videoId}&key=${apiKey}`;
      const detailsResponse = await fetch(videoDetailsUrl);
      const detailsData = await detailsResponse.json();
      
      if (detailsData.items && detailsData.items.length > 0) {
        const videoDetails = detailsData.items[0];
        
        return {
          isLive: true,
          videoId: liveStream.id.videoId,
          streamData: {
            title: videoDetails.snippet.title,
            description: videoDetails.snippet.description,
            thumbnail: videoDetails.snippet.thumbnails.high?.url,
            publishedAt: videoDetails.snippet.publishedAt,
            viewers: videoDetails.liveStreamingDetails?.concurrentViewers || 'N/A',
            scheduledStartTime: videoDetails.liveStreamingDetails?.scheduledStartTime
          }
        };
      }
    }
    
    return { isLive: false, videoId: null, streamData: null };
  } catch (error) {
    console.error('Error checking live stream:', error);
    return { isLive: false, videoId: null, streamData: null, error: error.message };
  }
};

// Get upcoming live streams from a channel
export const getUpcomingStreams = async (channelId, apiKey) => {
  try {
    if (!apiKey) {
      console.warn('YouTube API key not provided');
      return [];
    }

    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=upcoming&type=video&key=${apiKey}&maxResults=5`;
    
    const response = await fetch(searchUrl);
    const data = await response.json();
    
    if (data.error) {
      console.error('YouTube API error:', data.error);
      return [];
    }
    
    if (data.items && data.items.length > 0) {
      // Get detailed information for each upcoming stream
      const videoIds = data.items.map(item => item.id.videoId).join(',');
      const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&id=${videoIds}&key=${apiKey}`;
      
      const detailsResponse = await fetch(detailsUrl);
      const detailsData = await detailsResponse.json();
      
      return detailsData.items.map(video => ({
        videoId: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.medium?.url,
        scheduledStartTime: video.liveStreamingDetails?.scheduledStartTime,
        publishedAt: video.snippet.publishedAt
      }));
    }
    
    return [];
  } catch (error) {
    console.error('Error getting upcoming streams:', error);
    return [];
  }
};

// Format date for display
export const formatStreamDate = (dateString) => {
  if (!dateString) return 'TBD';
  
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = date.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) {
    return `Today at ${date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    })}`;
  } else if (diffDays === 1) {
    return `Tomorrow at ${date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    })}`;
  } else {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    });
  }
};

// Create YouTube embed URL with auto-play
export const createEmbedUrl = (videoId, autoplay = true) => {
  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    mute: '0',
    controls: '1',
    rel: '0',
    showinfo: '0',
    modestbranding: '1',
    iv_load_policy: '3'
  });
  
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
};

// Configuration for BTL OFFICIAL channel
export const BTL_CONFIG = {
  channelUrl: 'https://www.youtube.com/@BTLOFFICIAL2023',
  channelHandle: 'BTLOFFICIAL2023',
  // You'll need to get the actual channel ID using YouTube Data API
  channelId: process.env.NEXT_PUBLIC_BTL_CHANNEL_ID || 'UCYourActualChannelId',
  // Specific game to monitor
  specificGameVideoId: 'KfWyTFCpi-4'
};

// Environment check
export const isApiConfigured = () => {
  return !!(process.env.NEXT_PUBLIC_YOUTUBE_API_KEY && process.env.NEXT_PUBLIC_BTL_CHANNEL_ID);
}; 