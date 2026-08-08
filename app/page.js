'use client';

import Link from 'next/link';
import Image from 'next/image';
import SiteNav from './components/SiteNav';

export default function Home() {
  return (
    <div className="min-h-screen bg-ink text-chalk">
      {/* Full-bleed hero plane */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/IMG_1481.jpeg"
            className="h-full w-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(12,12,13,0.55)_75%)]" />
        </div>

        <SiteNav active="/" />

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-4 pb-14 pt-28 sm:px-6 sm:pb-16 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <p className="nf-reveal font-display text-sm tracking-[0.35em] text-court sm:text-base">
              FIBA BASKETBALL CLUB
            </p>

            <h1 className="nf-reveal nf-reveal-delay-1 nf-brand-glow mt-3 font-display text-[22vw] leading-[0.85] tracking-wide text-chalk sm:text-[18vw] md:text-[14vw] lg:text-[11rem]">
              NEW
              <br />
              FORCE
            </h1>

            <div className="nf-reveal nf-reveal-delay-2 mt-6 flex max-w-xl flex-col gap-6 sm:mt-8">
              <p className="text-base leading-relaxed text-chalk/85 sm:text-lg">
                Training, competition, and international exposure for athletes who play with purpose.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/roster"
                  className="nf-cta inline-flex items-center justify-center bg-court px-7 py-3.5 font-display text-xl tracking-wide text-ink"
                >
                  JOIN THE FORCE
                </Link>
                <Link
                  href="/3x3"
                  className="nf-cta inline-flex items-center justify-center border border-chalk/40 px-7 py-3.5 font-display text-xl tracking-wide text-chalk hover:border-court hover:text-court"
                >
                  SEE 3x3
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One-job mission section */}
      <section className="bg-court-field relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="font-display text-sm tracking-[0.3em] text-court">THE MISSION</p>
            <h2 className="mt-3 font-display text-5xl leading-none tracking-wide text-chalk sm:text-7xl">
              BUILD ATHLETES.
              <br />
              <span className="text-heat">RAISE THE STANDARD.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
            New Force develops players through hard training, real competition, and pathways beyond the local court — sportsmanship and excellence first.
          </p>
        </div>
      </section>

      {/* Pathways */}
      <section className="border-t border-white/10 bg-asphalt px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="font-display text-sm tracking-[0.3em] text-court">ENTER THE GAME</p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-chalk sm:text-6xl">
            WHERE TO GO NEXT
          </h2>

          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-3">
            {[
              {
                href: '/roster',
                title: 'ROSTER',
                copy: 'Meet the players representing New Force on the court.',
              },
              {
                href: '/3x3',
                title: '3x3',
                copy: 'Street-speed basketball. Tournaments and team action.',
              },
              {
                href: '/contact',
                title: 'CONTACT',
                copy: 'Tryouts, partnerships, and sponsorship inquiries.',
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-ink p-8 transition-colors hover:bg-court"
              >
                <h3 className="font-display text-4xl tracking-wide text-chalk transition-colors group-hover:text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted transition-colors group-hover:text-ink/80">
                  {item.copy}
                </p>
                <span className="mt-8 inline-block font-display text-lg tracking-wide text-court transition-colors group-hover:text-ink">
                  OPEN →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-ink px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Image src="/logo-nav.png" width={36} height={36} alt="New Force" className="h-9 w-9 object-contain" />
            <span className="font-display text-2xl tracking-wide text-chalk">NEW FORCE</span>
          </div>
          <p className="text-sm text-muted">© {new Date().getFullYear()} New Force Basketball. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
