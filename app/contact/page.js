'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, Star, Trophy, Users } from 'lucide-react';
import SiteNav from '../components/SiteNav';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative text-chalk overflow-hidden bg-ink">
      {/* Dense logo wallpaper — CSS tile (fast; no 100 separate image loads) */}
      <div className="fixed inset-0 z-0 bg-ink">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: "url('/logo-tile.png')",
            backgroundSize: '96px 96px',
            backgroundRepeat: 'repeat',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/45" />
      </div>
      
      <div className="relative z-10">
        <SiteNav active="/contact" variant="solid" />

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="font-display text-sm tracking-[0.3em] text-court">GET IN TOUCH</p>
            <h2 className="mt-3 font-display text-6xl tracking-wide text-chalk sm:text-8xl">
              CONTACT
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Tryouts, partnerships, sponsorships — reach the New Force staff.
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-black/80 rounded-2xl p-8 border border-cyan-400/20">
                <h3 className="text-3xl font-bold text-white mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information & Sponsorship */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="bg-black/80 rounded-2xl p-8 border border-cyan-400/20">
                  <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Email</h4>
                        <p className="text-gray-300">info@newforcebasketball.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Phone</h4>
                        <p className="text-gray-300">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Location</h4>
                        <p className="text-gray-300">Bangkok, Thailand</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Office Hours</h4>
                        <p className="text-gray-300">Mon-Fri: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sponsorship Section */}
                <div className="bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20  rounded-2xl p-6 border border-orange-400/30 shadow-xl">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-white mb-2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                        Strategic Partnership
                      </span>
                    </h4>
                    <p className="text-sm text-gray-200">
                      Proud to partner with exceptional organizations
                    </p>
                  </div>
                  
                  {/* Sponsorship Image */}
                  <div className="relative group mb-4">
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src="/IMG_1165.jpeg"
                        alt="Sponsorship Partnership"
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Overlay with sponsor badge */}
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full font-bold text-xs shadow-lg">
                        SPONSOR
                      </div>
                    </div>
                  </div>
                  
                  {/* Partnership Benefits */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-xs text-gray-200">Brand Visibility</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-xs text-gray-200">Community Impact</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-xs text-gray-200">Sports Excellence</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-xs text-gray-200">Growth Opportunities</span>
                    </div>
                  </div>
                  
                  {/* Call to Action */}
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                    Learn More About Partnership
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlight — static media (no autoplay / debug test videos) */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/80 rounded-2xl overflow-hidden shadow-2xl border-2 border-orange-400/60">
              <div className="relative aspect-video">
                <Image
                  src="/IMG_1165.jpeg"
                  alt="Javan Smith success story"
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="text-2xl font-bold text-orange-400">
                    JAVAN SMITH SUCCESS STORY
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/80 border-t border-cyan-400/20 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-6 md:mb-0">
                <Image src="/logo-nav.png" width={40} height={40} alt="Logo" className="w-10 h-10" />
              </div>
              <div className="text-gray-400 text-sm">
                © 2024 Print Off Basketball. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
