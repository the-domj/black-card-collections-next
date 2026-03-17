'use client';

import React, { useEffect, useRef } from 'react';

const PILLARS = [
  {
    number: '01',
    title: 'Factory Authorized',
    description:
      'Every single item in the Black Card Collection is brand new and factory authorized directly from the manufacturer. No grey market, no replicas — only genuine luxury.',
    detail: 'Direct from fashion house',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Premium Packaging',
    description:
      'Designer eyewear and select timepieces arrive in original factory packaging. The unboxing experience matches the prestige your VIP players expect.',
    detail: 'Original packaging included',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Gaming Industry Exclusive',
    description:
      'The Black Card Collection is exclusively available to select gaming industry partners. These rewards cannot be purchased anywhere else — only earned by your most elite players.',
    detail: 'Select partners only',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

const AuthenticitySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.reveal-on-scroll');
            reveals.forEach((el) => el.classList.add('revealed'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Radial gold glow background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 reveal-on-scroll">
          <p className="text-[9px] font-black uppercase tracking-widest2 text-gold mb-5">
            Our Guarantees
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight leading-none text-luxury-fg mb-6">
            Three Pillars of
            <br />
            <em className="text-gold not-italic">Uncompromising Quality.</em>
          </h2>
          <p className="max-w-lg mx-auto text-sm text-luxury-muted font-sans leading-relaxed">
            The Black Card Collection sets a new standard for casino loyalty rewards — authentic, exclusive, and worthy of your highest-tier players.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-3 gap-3">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.number}
              className={`pillar-card rounded-2xl p-10 reveal-on-scroll stagger-${i + 2}`}
            >
              {/* Number + icon */}
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-5xl font-black text-gold/10 leading-none">
                  {pillar.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                  {pillar.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-luxury-fg mb-4 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-sm text-luxury-muted font-sans leading-relaxed mb-6">
                {pillar.description}
              </p>

              {/* Detail tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/5 border border-gold/15 rounded-full">
                <span className="w-1 h-1 rounded-full bg-gold" />
                <span className="text-[8px] font-black uppercase tracking-widest text-gold">
                  {pillar.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom testimonial strip */}
        <div className="mt-16 bg-gold px-12 py-10 rounded-2xl reveal-on-scroll stagger-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <p className="font-display text-xl md:text-2xl font-bold text-luxury-bg italic leading-snug max-w-2xl">
                "The most sophisticated loyalty reward program we've ever offered. Our high-limit players consistently rate the Black Card Collection above any other incentive."
              </p>
            </div>
            <div className="shrink-0 text-center md:text-right">
              <p className="font-display text-base font-bold text-luxury-bg tracking-wide">
                James R.
              </p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-luxury-bg/60 mt-1">
                VP Player Development · MGM Resorts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticitySection;