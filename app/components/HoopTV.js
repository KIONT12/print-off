'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';

export default function HoopTV({ src, poster, showBall = true }) {
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const arm = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      video.playsInline = true;
      video.setAttribute('muted', '');
      video.setAttribute('autoplay', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', 'true');
    };

    const play = () => {
      arm();
      if (!video.paused) return;
      const attempt = video.play();
      if (attempt) attempt.catch(() => {});
    };

    arm();
    play();

    const events = ['canplay', 'canplaythrough', 'loadeddata', 'loadedmetadata', 'playing'];
    events.forEach((name) => video.addEventListener(name, play));
    document.addEventListener('visibilitychange', play);
    window.addEventListener('pointerdown', play);
    window.addEventListener('touchstart', play, { passive: true });

    const retry = window.setInterval(play, 300);
    const stopRetry = window.setTimeout(() => window.clearInterval(retry), 8000);

    return () => {
      events.forEach((name) => video.removeEventListener(name, play));
      document.removeEventListener('visibilitychange', play);
      window.removeEventListener('pointerdown', play);
      window.removeEventListener('touchstart', play);
      window.clearInterval(retry);
      window.clearTimeout(stopRetry);
    };
  }, [src]);

  return (
    <div className="relative w-full" style={{ aspectRatio: '1014 / 894' }}>
      <div
        className="nf-hoop-well absolute overflow-hidden"
        style={{ top: '7.6%', left: '9.2%', width: '81.6%', height: '54.2%' }}
      >
        <video
          ref={(node) => {
            videoRef.current = node;
            if (!node) return;
            node.muted = true;
            node.defaultMuted = true;
            node.volume = 0;
          }}
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
          className="pointer-events-none absolute bottom-[2%] right-[18%] z-10 h-[11%] w-auto rounded-full object-cover shadow-[0_10px_20px_rgba(0,0,0,0.45)] sm:h-[13%]"
        />
      )}
    </div>
  );
}
