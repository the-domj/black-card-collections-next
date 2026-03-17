'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const STATS = [
{ value: '5', suffix: '', label: 'Luxury Categories' },
{ value: '10', suffix: '+', label: 'Iconic Brands' },
{ value: '100', suffix: '%', label: 'Factory Authorized' }];


const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // Parallax on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !imageRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xRatio = (clientX / innerWidth - 0.5) * 2;
      const yRatio = (clientY / innerHeight - 0.5) * 2;
      imageRef.current.style.transform = `translate(${xRatio * -8}px, ${yRatio * -6}px) scale(1.02)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 grid-luxury overflow-hidden animated-gradient">
      
      {/* Ghost watermark */}
      <div className="ghost-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap select-none pointer-events-none z-0">
        LUXURY
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 xl:gap-24 items-center py-20">
        {/* Left Column */}
        <div
          className="space-y-10"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s ease, transform 1s cubic-bezier(0.16,1,0.3,1)'
          }}>
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-luxury-border rounded-full bg-luxury-surface/50">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-widest2 text-gold">
              VIP Black Card — 2026 Collection
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[0.88] text-luxury-fg">
              Luxury Rewards
              <br />
              <em className="text-gold-gradient not-italic">Reserved</em>
              <br />
              for the Elite.
            </h1>
            <p className="max-w-md text-sm md:text-base text-luxury-muted font-sans font-light leading-relaxed">
              Factory-authorized designer accessories from the world's most iconic fashion houses — curated exclusively for high-limit casino players.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-10">
            {STATS.map((stat, i) =>
            <React.Fragment key={stat.label}>
                {i > 0 && <div className="h-8 w-px bg-luxury-border" />}
                <div>
                  <p className="font-display text-3xl font-black text-gold tracking-tight">
                    {stat.value}<span className="text-gold-light">{stat.suffix}</span>
                  </p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-luxury-muted mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </React.Fragment>
            )}
          </div>

          {/* Brand names inline */}
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {['Gucci', 'Versace', 'Balenciaga', 'Burberry', 'Givenchy'].map((brand) =>
            <span key={brand} className="text-[9px] font-bold uppercase tracking-widest text-luxury-dim">
                {brand}
              </span>
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-5">
            <Link
              href="/products"
              className="btn-gold px-10 py-4 rounded-sm text-[10px] font-bold uppercase tracking-widest inline-block">
              
              Explore Collection
            </Link>
            <a
              href="mailto:sales@blackcardcollections.com"
              className="border border-luxury-border px-10 py-4 rounded-sm text-[10px] font-bold uppercase tracking-widest text-luxury-muted hover:border-gold hover:text-gold transition-all duration-300">
              
              Request Access
            </a>
          </div>
        </div>

        {/* Right Column — Hero Image */}
        <div
          className="relative group"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1.2s ease 0.2s, transform 1.2s cubic-bezier(0.16,1,0.3,1) 0.2s'
          }}>
          
          {/* Corner markers */}
          <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-gold/40 z-20 pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-gold/40 z-20 pointer-events-none" />

          {/* Gold shimmer scan overlay */}
          <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none z-20">
            <div className="shimmer-scan w-full h-40 absolute top-0 left-0" />
            <div className="absolute inset-0 border border-luxury-border rounded-[32px]" />
          </div>

          {/* Image */}
          <div ref={imageRef} className="transition-transform duration-700 ease-out will-change-transform">
            <AppImage
              src="https://images.unsplash.com/photo-1691480288782-142b953cf664"
              alt="Luxury designer handbag — premium leather accessory from iconic fashion house"
              width={700}
              height={800}
              priority
              className="w-full h-[480px] md:h-[640px] object-cover rounded-[32px] border border-luxury-border img-luxury" />
            
          </div>

          {/* Floating Badge — Top Right */}
          <div className="float-badge absolute -top-5 -right-5 md:-top-8 md:-right-8 z-30 bg-luxury-bg border border-luxury-border p-4 rounded-2xl shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[7px] font-black uppercase tracking-widest text-luxury-muted text-center leading-tight">
                Factory<br />Authorized
              </p>
            </div>
          </div>

          {/* Floating Badge — Bottom Left */}
          <div className="absolute -bottom-5 -left-5 md:-bottom-8 md:-left-8 z-30 bg-luxury-bg/90 backdrop-blur-xl border border-luxury-border p-5 rounded-2xl shadow-2xl hidden md:flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <div className="h-0.5 w-10 bg-gold rounded-full" />
              <div className="h-0.5 w-7 bg-gold/30 rounded-full" />
              <div className="h-0.5 w-5 bg-gold/15 rounded-full" />
            </div>
            <div>
              <p className="text-[8px] font-black uppercase tracking-widest text-luxury-muted">Gaming Industry</p>
              <p className="text-[8px] font-black uppercase tracking-widest text-gold">Exclusive Access</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-bounce z-10">
        <span className="text-[8px] font-bold uppercase tracking-widest2 text-luxury-dim">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
      </div>
    </section>);

};

export default HeroSection;