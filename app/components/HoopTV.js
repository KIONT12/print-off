'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HoopTV({ src, poster, showBall = true }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const play = () => {
      const attempt = video.play();
      if (attempt) attempt.catch(() => {});
    };

    play();
    video.addEventListener('canplay', play);
    video.addEventListener('loadeddata', play);
    document.addEventListener('visibilitychange', play);

    return () => {
      video.removeEventListener('canplay', play);
      video.removeEventListener('loadeddata', play);
      document.removeEventListener('visibilitychange', play);
    };
  }, [src]);

  return (
    <div className="relative w-full" style={{ aspectRatio: '1014 / 894' }}>
      <div
        className="nf-hoop-well absolute overflow-hidden"
        style={{ top: '7.6%', left: '9.2%', width: '81.6%', height: '54.2%' }}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={poster}
          disablePictureInPicture
          controls={false}
          className="nf-hoop-video h-full w-full bg-ink object-cover object-center"
          {...{ 'webkit-playsinline': 'true' }}
        />
      </div>

      <Image
        src="/hoop-glass.png"
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 896px) 94vw, 896px"
        className="nf-hoop-frame pointer-events-none object-contain"
      />

      {showBall && (
        <Image
          src="/basketball.jpg"
          alt=""
          width={120}
          height={120}
          className="absolute bottom-[2%] right-[18%] z-10 h-[11%] w-auto rounded-full object-cover shadow-[0_10px_20px_rgba(0,0,0,0.45)] sm:h-[13%]"
        />
      )}
    </div>
  );
}
