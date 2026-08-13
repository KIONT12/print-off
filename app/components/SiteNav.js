'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/3x3', label: '3x3' },
  { href: '/roster', label: 'Roster' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteNav({ active = '/', variant = 'overlay' }) {
  const [open, setOpen] = useState(false);
  const shell =
    variant === 'solid'
      ? 'relative z-40 border-b border-white/10 bg-ink/95'
      : 'absolute inset-x-0 top-0 z-40';

  return (
    <header className={shell}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/logo-nav.png"
            alt="New Force"
            width={44}
            height={44}
            className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105 sm:h-11 sm:w-11"
            priority
          />
          <span className={`nf-wordmark font-display text-2xl text-chalk sm:text-3xl md:text-4xl ${variant === 'overlay' ? 'nf-on-video' : ''}`}>
            NEW FORCE
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label text-sm transition-colors ${
                  isActive ? 'text-flash' : 'text-chalk/70 hover:text-court'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-chalk md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => {
              const isActive = active === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-label px-2 py-3 text-base ${
                    isActive ? 'text-flash' : 'text-chalk/80'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
