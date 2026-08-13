import Image from 'next/image';
import SiteNav from '../components/SiteNav';

const players = [
  '/IMG_1481.jpeg',
  '/IMG_1478.jpeg',
  '/IMG_1479.jpeg',
  '/IMG_2057.jpeg',
  '/IMG_2056.jpeg',
  '/IMG_2054.jpeg',
  '/unnamed (1).jpg',
];

export default function RosterPage() {
  return (
    <div className="min-h-screen bg-ink text-chalk">
      <section className="relative min-h-[70svh] overflow-hidden sm:min-h-[80svh]">
        <div className="absolute inset-0">
          <Image
            src="/IMG_1478.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-ink/80 to-transparent" />
        </div>

        <SiteNav active="/roster" />

        <div className="relative z-10 flex min-h-[70svh] flex-col justify-end px-4 pb-10 pt-24 sm:min-h-[80svh] sm:px-6 sm:pb-12 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <p className="nf-on-video font-label text-sm text-flash">THE SQUAD</p>
            <h1 className="nf-on-video nf-wordmark mt-2 font-display text-5xl text-chalk sm:text-8xl md:text-9xl">
              ROSTER
            </h1>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {players.map((src, index) => (
            <article key={src} className="group relative overflow-hidden bg-asphalt">
              <div className="relative aspect-[3/4]">
                <Image
                  src={src}
                  alt={`New Force player ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-ink/65 to-transparent" />
                <p className="absolute bottom-4 left-4 font-display text-xl text-chalk nf-on-video">
                  {String(index + 1).padStart(2, '0')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <span className="font-display text-2xl text-chalk">NEW FORCE</span>
          <p className="text-sm text-muted">© {new Date().getFullYear()} New Force Basketball.</p>
        </div>
      </footer>
    </div>
  );
}
