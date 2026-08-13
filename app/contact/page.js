'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SiteNav from '../components/SiteNav';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fieldClass =
    'w-full border border-white/20 bg-ink/50 px-4 py-3 text-chalk placeholder:text-muted focus:border-court focus:outline-none';

  return (
    <div className="min-h-screen relative text-chalk overflow-hidden bg-ink">
      <div className="fixed inset-0 z-0 bg-ink">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/logo-tile.png')",
            backgroundSize: '88px 88px',
            backgroundRepeat: 'repeat',
          }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-ink/75 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <SiteNav active="/contact" />

        <section className="flex min-h-[70svh] flex-col justify-end px-4 pb-10 pt-24 sm:px-6 sm:pb-12 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <p className="nf-reveal nf-on-video font-label text-sm text-flash sm:text-base">
              GET IN TOUCH
            </p>
            <h1 className="nf-reveal nf-reveal-delay-1 nf-on-video nf-wordmark mt-2 font-display text-5xl text-chalk sm:text-8xl md:text-9xl">
              CONTACT
            </h1>
            <p className="nf-reveal nf-reveal-delay-2 nf-on-video mt-4 max-w-lg text-base leading-relaxed text-chalk sm:text-lg">
              Tryouts, partnerships, sponsorships — reach the New Force staff.
            </p>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <div className="border border-white/15 bg-ink/55 p-8 ">
              <h2 className="font-display text-4xl text-chalk">SEND A MESSAGE</h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block font-label text-xs text-muted">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-label text-xs text-muted">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block font-label text-xs text-muted">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block font-label text-xs text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${fieldClass} resize-none`}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="nf-cta inline-flex w-full items-center justify-center bg-court px-7 py-3.5 font-label text-lg tracking-[0.14em] text-white"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="border border-white/15 bg-ink/55 p-8 ">
                <h2 className="font-display text-4xl text-chalk">GET IN TOUCH</h2>
                <div className="mt-6 space-y-5">
                  {[
                    { icon: Mail, title: 'Email', copy: 'info@newforcebasketball.com' },
                    { icon: Phone, title: 'Phone', copy: '+1 (555) 123-4567' },
                    { icon: MapPin, title: 'Location', copy: 'Bangkok, Thailand' },
                    { icon: Clock, title: 'Office Hours', copy: 'Mon-Fri: 9:00 AM - 6:00 PM' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center bg-heat text-ink">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-label text-sm text-chalk">{item.title}</h3>
                        <p className="text-muted">{item.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-white/15 bg-ink/55 p-6 ">
                <p className="font-label text-sm text-flash">STRATEGIC PARTNERSHIP</p>
                <p className="mt-2 text-sm text-muted">Proud to partner with exceptional organizations</p>
                <div className="relative mt-4 overflow-hidden">
                  <Image
                    src="/IMG_1165.jpeg"
                    alt="Sponsorship Partnership"
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-heat px-3 py-1 font-label text-xs text-ink">
                    SPONSOR
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted">
                  <span>Brand Visibility</span>
                  <span>Community Impact</span>
                  <span>Sports Excellence</span>
                  <span>Growth Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-4xl overflow-hidden border border-white/15">
            <div className="relative aspect-video">
              <Image
                src="/IMG_1165.jpeg"
                alt="Javan Smith success story"
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
              <h3 className="absolute bottom-5 left-5 font-display text-2xl text-chalk nf-on-video sm:text-3xl">
                JAVAN SMITH SUCCESS STORY
              </h3>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-ink/35 px-4 py-6 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <Image src="/logo-nav.png" width={36} height={36} alt="New Force" className="h-9 w-9 object-contain" />
              <span className="font-display text-2xl text-chalk">NEW FORCE</span>
            </div>
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} New Force Basketball. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
