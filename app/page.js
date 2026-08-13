'use client';

import Link from 'next/link';
import Image from 'next/image';
import SiteNav from './components/SiteNav';
import HoopTV from './components/HoopTV';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-ink text-chalk overflow-hidden">
      <div className="nf-logo-wall fixed inset-0 z-0 overflow-hidden">
        <div className="nf-logo-wall__tiles" aria-hidden="true" />
        <div className="nf-logo-wall__glow" />
      </div>

      <div className="relative z-10">
      <section className="relative overflow-hidden">
        <SiteNav active="/" />

        <div className="mx-auto w-full max-w-4xl px-3 pt-20 sm:px-6 sm:pt-24 lg:px-10">
          <HoopTV src="/hero.mp4" />
        </div>

        <div className="px-4 pb-12 pt-3 sm:px-6 sm:pb-16 sm:pt-4 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <p className="nf-reveal nf-on-video font-label text-xs text-flash sm:text-base">
              FIBA BASKETBALL CLUB
            </p>

            <h1 className="nf-reveal nf-reveal-delay-1 nf-on-video nf-wordmark mt-2 font-display text-5xl text-chalk sm:text-8xl md:text-9xl lg:text-[10rem]">
              NEW
              <br />
              <span className="text-court">FORCE</span>
            </h1>

            <div className="nf-reveal nf-reveal-delay-2 mt-6 flex max-w-xl flex-col gap-6 sm:mt-8">
              <p className="nf-on-video text-base leading-relaxed text-chalk sm:text-lg">
                Training, competition, and international exposure for athletes who play with purpose.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/roster"
                  className="nf-cta inline-flex items-center justify-center bg-court px-7 py-3.5 font-label text-lg tracking-[0.14em] text-white"
                >
                  JOIN THE FORCE
                </Link>
                <Link
                  href="/3x3"
                  className="nf-cta inline-flex items-center justify-center border border-chalk/40 px-7 py-3.5 font-label text-lg tracking-[0.14em] text-chalk hover:border-court hover:text-court"
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
            <p className="font-label text-sm text-flash">THE MISSION</p>
            <h2 className="nf-wordmark mt-3 font-display text-4xl text-chalk sm:text-7xl">
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
          <p className="font-label text-sm text-flash">ENTER THE GAME</p>
          <h2 className="nf-wordmark mt-3 font-display text-4xl text-chalk sm:text-7xl">
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
                <h3 className="font-display text-4xl text-chalk transition-colors group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted transition-colors group-hover:text-white/80">
                  {item.copy}
                </p>
                <span className="mt-8 inline-block font-label text-base tracking-[0.14em] text-court transition-colors group-hover:text-flash">
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
            <span className="font-display text-2xl text-chalk">NEW FORCE</span>
          </div>
          <p className="text-sm text-muted">© {new Date().getFullYear()} New Force Basketball. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  );
}
