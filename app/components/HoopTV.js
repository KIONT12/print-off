import Image from 'next/image';

export default function HoopTV({ src, poster = '/IMG_1481.jpeg', showBall = true }) {
  return (
    <div className="relative w-full" style={{ aspectRatio: '1014 / 894' }}>
      <div
        className="nf-hoop-well absolute overflow-hidden"
        style={{ top: '7.6%', left: '9.2%', width: '81.6%', height: '54.2%' }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={poster}
          className="h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>

      <Image
        src="/hoop-glass.png"
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 896px) 94vw, 896px"
        className="pointer-events-none object-contain"
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
