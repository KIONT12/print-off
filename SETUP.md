# Live Stream Setup Guide

This guide will help you set up the YouTube API integration for automatic live stream detection from the BTL OFFICIAL channel.

## YouTube API Configuration

### 1. Get a YouTube Data API Key

1. Go to the [Google Developers Console](https://console.developers.google.com/)
2. Create a new project or select an existing one
3. Enable the "YouTube Data API v3"
4. Create credentials (API Key)
5. Restrict the API key to YouTube Data API v3 for security

### 2. Get the Channel ID

The channel URL is `https://www.youtube.com/@BTLOFFICIAL2023`

To convert this to a channel ID:

**Option A: Using YouTube Data API**
```bash
curl "https://www.googleapis.com/youtube/v3/search?part=snippet&q=BTLOFFICIAL2023&type=channel&key=YOUR_API_KEY"
```

**Option B: Using online tools**
- Use websites like `commentpicker.com/youtube-channel-id.php`
- Paste the channel URL to get the channel ID

**Option C: Manual inspection**
- Visit the channel page
- View page source and search for `"channelId"`

### 3. Environment Variables

Create a `.env.local` file in your project root with:

```env
# YouTube API Configuration
NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key_here
NEXT_PUBLIC_BTL_CHANNEL_ID=your_channel_id_here
```

### 4. Restart Your Development Server

After adding the environment variables, restart your Next.js development server:

```bash
npm run dev
```

## Features

Once configured, the live stream page will:

- ✅ Automatically detect when BTL OFFICIAL goes live
- ✅ Auto-play live streams (can be toggled by users)
- ✅ Show upcoming scheduled streams
- ✅ Display live viewer counts and stream metadata
- ✅ Refresh stream status every 30 seconds
- ✅ Provide fallback mode when API is not configured

## Testing

- Visit `/live` to see the live stream page
- The page will show if the API is configured correctly
- Use the refresh button to manually check for streams
- If the API is not configured, a test button will be available for demo purposes

## API Rate Limits

YouTube Data API has the following quotas:
- 10,000 units per day (default)
- Each search request costs 100 units
- Each video details request costs 1 unit

With checks every 30 seconds, you'll use approximately:
- 2,880 search requests per day = 288,000 units
- You may need to request additional quota from Google

## Troubleshooting

### Common Issues

1. **"API not configured" message**
   - Check that environment variables are set correctly
   - Restart the development server
   - Ensure the API key has YouTube Data API v3 enabled

2. **"API Error: quotaExceeded"**
   - You've hit the daily quota limit
   - Request additional quota from Google Cloud Console
   - Reduce check frequency if needed

3. **"API Error: keyInvalid"**
   - Double-check your API key
   - Ensure the API key has proper restrictions
   - Make sure YouTube Data API v3 is enabled

4. **Channel not found**
   - Verify the channel ID is correct
   - Check that the channel is public
   - Try using the channel URL directly in a browser

### Support

For additional help, check:
- [YouTube Data API Documentation](https://developers.google.com/youtube/v3)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables) 