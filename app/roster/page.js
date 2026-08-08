import Image from 'next/image';
import SiteNav from '../components/SiteNav';

const players = [
  { src: '/IMG_1481.jpeg', accent: 'border-court/40' },
  { src: '/IMG_1478.jpeg', accent: 'border-heat/40' },
  { src: '/IMG_1479.jpeg', accent: 'border-chalk/30' },
  { src: '/IMG_2057.jpeg', accent: 'border-court/40' },
  { src: '/IMG_2056.jpeg', accent: 'border-heat/40' },
  { src: '/IMG_2054.jpeg', accent: 'border-chalk/30' },
  { src: '/unnamed (1).jpg', accent: 'border-court/40' },
];

export default function RosterPage() {
  return (
    <div className="min-h-screen relative text-chalk overflow-hidden bg-court-field">
      <div className="relative z-10">
        <SiteNav active="/roster" variant="solid" />

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="font-display text-sm tracking-[0.3em] text-court">THE SQUAD</p>
            <h1 className="mt-3 font-display text-5xl tracking-wide text-chalk sm:text-7xl">
              ROSTER
            </h1>
            <p className="mt-3 max-w-xl text-muted">
              New Force players on the floor.
            </p>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {players.map((player, index) => (
              <div
                key={player.src}
                className={`group relative overflow-hidden border bg-ink/60 ${player.accent}`}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={player.src}
                    alt={`New Force player ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={70}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    className="object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 font-display text-2xl tracking-wide text-chalk">
                    #{index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 bg-ink/80 px-4 py-8 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <span className="font-display text-xl tracking-wide text-chalk">NEW FORCE</span>
            <p className="text-sm text-muted">© {new Date().getFullYear()} New Force Basketball.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
