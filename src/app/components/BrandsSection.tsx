'use client';

import React, { useEffect, useRef } from 'react';

const BRANDS_ROW1 = [
  'Gucci', 'Versace', 'Balenciaga', 'Burberry', 'Givenchy',
];
const BRANDS_ROW2 = [
  'Ferragamo', 'Saint Laurent', 'Valentino', 'Bottega Veneta', 'Philipp Plein',
];
const BRANDS_ROW3 = [
  'Alexander McQueen', 'Montblanc', 'Dunhill', 'Chloé', 'Bvlgari',
];

const BrandsSection: React.FC = () => {
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
    <section ref={sectionRef} className="py-32 px-6 border-y border-luxury-border bg-luxury-surface/30 overflow-hidden relative">
      {/* Ghost text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-display font-black text-[20vw] text-gold/[0.02] uppercase tracking-tighter leading-none whitespace-nowrap select-none">
          ICONIC
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20">
          <div className="reveal-on-scroll stagger-1">
            <p className="text-[9px] font-black uppercase tracking-widest2 text-gold mb-4">
              Fashion Houses
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight leading-none text-luxury-fg">
              The World's Most
              <br />
              <em className="text-gold not-italic">Iconic Brands.</em>
            </h2>
          </div>
          <div className="reveal-on-scroll stagger-2 max-w-sm">
            <p className="text-sm text-luxury-muted font-sans leading-relaxed border-l border-gold/30 pl-5">
              Every item in the Black Card Collection represents the pinnacle of design from the most coveted fashion houses on the planet.
            </p>
          </div>
        </div>

        {/* Brand rows */}
        <div className="space-y-1">
          {[BRANDS_ROW1, BRANDS_ROW2, BRANDS_ROW3].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`reveal-on-scroll stagger-${rowIndex + 2} flex flex-wrap border-t border-luxury-border`}
            >
              {row.map((brand, brandIndex) => (
                <div
                  key={brand}
                  className={`group flex-1 min-w-[140px] py-8 px-6 border-r border-luxury-border last:border-r-0 flex items-center justify-center transition-all duration-400 hover:bg-luxury-card cursor-default ${
                    brandIndex === 0 ? 'border-l border-luxury-border' : ''
                  }`}
                >
                  <span className="font-display text-sm md:text-base font-bold tracking-widest text-luxury-dim group-hover:text-gold transition-colors duration-400 uppercase whitespace-nowrap">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          ))}
          <div className="border-t border-luxury-border" />
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex items-center justify-center gap-3 reveal-on-scroll stagger-5">
          <div className="h-px flex-1 max-w-[80px] bg-gold/20" />
          <p className="text-[9px] font-bold uppercase tracking-widest2 text-luxury-dim text-center">
            All items brand new · Factory authorized · Premium packaging
          </p>
          <div className="h-px flex-1 max-w-[80px] bg-gold/20" />
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;