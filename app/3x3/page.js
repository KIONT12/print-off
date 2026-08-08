'use client';

import Link from 'next/link';
import Image from 'next/image';
import SiteNav from '../components/SiteNav';

export default function ThreeOnThreePage() {
  return (
    <div className="min-h-screen relative text-chalk overflow-hidden bg-ink">
      {/* Highlight as full-bleed background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/IMG_1481.jpeg"
          className="h-full w-full object-cover"
        >
          <source src="/3x3-highlight.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(12,12,13,0.55)_80%)]" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <SiteNav active="/3x3" variant="overlay" />

        <main className="flex flex-1 flex-col justify-end px-4 pb-14 pt-28 sm:px-6 sm:pb-16 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <p className="nf-reveal font-display text-sm tracking-[0.35em] text-court sm:text-base">
              HIGHLIGHTS
            </p>
            <h1 className="nf-reveal nf-reveal-delay-1 mt-3 font-display text-[18vw] leading-[0.85] tracking-wide text-chalk sm:text-[12vw] md:text-[9rem]">
              3x3
            </h1>
            <p className="nf-reveal nf-reveal-delay-2 mt-5 max-w-lg text-base leading-relaxed text-chalk/85 sm:text-lg">
              New Force half-court action — the highlight reel is the stage.
            </p>
            <div className="nf-reveal nf-reveal-delay-3 mt-8">
              <Link
                href="/contact"
                className="nf-cta inline-flex items-center justify-center bg-court px-7 py-3.5 font-display text-xl tracking-wide text-ink"
              >
                JOIN 3x3
              </Link>
            </div>
          </div>
        </main>

        <footer className="border-t border-white/10 bg-ink/80 px-4 py-8 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <Image src="/logo-nav.png" width={36} height={36} alt="New Force" className="h-9 w-9 object-contain" />
              <span className="font-display text-2xl tracking-wide text-chalk">NEW FORCE 3x3</span>
            </div>
            <p className="text-sm text-muted">© {new Date().getFullYear()} New Force Basketball.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
