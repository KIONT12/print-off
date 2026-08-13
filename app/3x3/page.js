'use client';

import Link from 'next/link';
import Image from 'next/image';
import SiteNav from '../components/SiteNav';
import HoopTV from '../components/HoopTV';

export default function ThreeOnThreePage() {
  return (
    <div className="min-h-screen relative text-chalk overflow-hidden bg-ink">
      <div className="nf-logo-wall fixed inset-0 z-0 overflow-hidden">
        <div className="nf-logo-wall__tiles" aria-hidden="true" />
        <div className="nf-logo-wall__glow" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-ink/80 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <SiteNav active="/3x3" variant="overlay" />

        <main className="flex flex-1 flex-col items-center justify-center px-3 pb-10 pt-20 sm:px-6 sm:pt-24 lg:px-10">
          <p className="nf-on-video font-label text-xs text-flash sm:text-sm">HIGHLIGHTS</p>
          <h1 className="nf-on-video nf-wordmark mt-1 font-display text-5xl text-chalk sm:text-7xl">
            3x3
          </h1>

          <div className="relative mt-2 w-full max-w-4xl">
            <HoopTV src="/3x3-highlight.mp4" />
          </div>

          <Link
            href="/contact"
            className="nf-cta mt-6 inline-flex items-center justify-center bg-court px-7 py-3.5 font-label text-lg tracking-[0.14em] text-white"
          >
            JOIN 3x3
          </Link>
        </main>

        <footer className="border-t border-white/10 bg-ink/35 px-4 py-6 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <Image src="/logo-nav.png" width={36} height={36} alt="New Force" className="h-9 w-9 object-contain" />
              <span className="font-display text-2xl text-chalk">NEW FORCE 3x3</span>
            </div>
            <p className="text-sm text-muted">© {new Date().getFullYear()} New Force Basketball.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
