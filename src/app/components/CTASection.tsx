'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const CTASection: React.FC = () => {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden border-t border-luxury-border">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1685351978134-67654a2278b1"
          alt="Luxury fashion boutique interior with designer accessories display"
          fill
          sizes="100vw"
          className="object-cover opacity-10" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-bg via-luxury-bg/90 to-luxury-bg/80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="reveal-on-scroll stagger-1">
            <p className="text-[9px] font-black uppercase tracking-widest2 text-gold mb-6">
              Gaming Industry Partners
            </p>
            <h2 className="font-display text-4xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[0.88] text-luxury-fg mb-8">
              Ready to Elevate
              <br />
              Your Rewards
              <br />
              <em className="text-gold not-italic">Program?</em>
            </h2>
            <p className="text-base text-luxury-muted font-sans leading-relaxed max-w-md mb-10">
              The Black Card Collection is exclusively available to select gaming industry partners. Contact our team to explore how luxury designer rewards can transform your VIP player experience.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="mailto:sales@blackcardcollections.com"
                className="btn-gold px-10 py-4 rounded-sm text-[10px] font-bold uppercase tracking-widest inline-block">
                
                Contact Sales Team
              </a>
              <Link
                href="/products"
                className="border border-luxury-border px-10 py-4 rounded-sm text-[10px] font-bold uppercase tracking-widest text-luxury-muted hover:border-gold hover:text-gold transition-all duration-300 inline-block">
                
                View Full Collection
              </Link>
            </div>

            {/* Contact details */}
            <div className="mt-10 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a
                  href="mailto:sales@blackcardcollections.com"
                  className="text-[12px] font-medium text-luxury-muted hover:text-gold transition-colors">
                  
                  sales@blackcardcollections.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <a
                  href="https://blackcardcollections.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] font-medium text-luxury-muted hover:text-gold transition-colors">
                  
                  blackcardcollections.com
                </a>
              </div>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-3 reveal-on-scroll stagger-2">
            {[
            { value: '5', label: 'Product Categories', suffix: '' },
            { value: '10', label: 'Fashion Houses', suffix: '+' },
            { value: '100', label: 'Factory Authorized', suffix: '%' },
            { value: '2026', label: 'Current Collection', suffix: '' }].
            map((stat) =>
            <div
              key={stat.label}
              className="luxury-card rounded-2xl p-8 flex flex-col justify-between min-h-[140px]">
              
                <p className="font-display text-4xl md:text-5xl font-black text-gold tracking-tight">
                  {stat.value}
                  <span className="text-gold-light text-2xl">{stat.suffix}</span>
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-luxury-muted mt-2">
                  {stat.label}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default CTASection;