'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface Category {
  id: string;
  name: string;
  description: string;
  brands: string[];
  image: string;
  alt: string;
  span?: string;
}

const CATEGORIES: Category[] = [
{
  id: 'handbags',
  name: 'Designer Handbags',
  description: 'Iconic styles from the world\'s leading fashion houses',
  brands: ['Gucci'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fe19c47f-1773498409593.png",
  alt: 'Luxury designer handbag in premium leather with gold hardware',
  span: 'lg:col-span-2 lg:row-span-2'
},
{
  id: 'sunglasses',
  name: 'Designer Sunglasses',
  description: 'Iconic eyewear from the world\'s leading fashion houses',
  brands: ['Balenciaga', 'Gucci', 'Saint Laurent', 'Valentino'],
  image: "https://images.unsplash.com/photo-1734449527003-5da733a0087c",
  alt: 'Designer luxury sunglasses with gold frame on dark background'
},
{
  id: 'scarves',
  name: 'Designer Scarves',
  description: 'Iconic silk and wool scarves from iconic fashion houses',
  brands: ['Burberry', 'Gucci', 'Balenciaga', 'Givenchy'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1449ef3ad-1772499688518.png",
  alt: 'Luxury silk designer scarf with elegant pattern in vibrant colors'
},
{
  id: 'timepieces',
  name: 'Designer Timepieces',
  description: 'Iconic timepieces from the world\'s leading fashion houses',
  brands: ['Gucci', 'Versace', 'Ferragamo', 'Philipp Plein'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19c9770ef-1764868460587.png",
  alt: 'Luxury designer watch with gold case and elegant dial'
},
{
  id: 'jewelry',
  name: 'Designer Jewelry',
  description: 'Curated fashion jewelry from the world\'s premium makers',
  brands: ['Precious Metals', 'Certified Gemstones'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11ff1b62e-1767551856912.png",
  alt: 'Luxury jewelry piece with precious gemstones and gold setting'
}];


const CategorySection: React.FC = () => {
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
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="reveal-on-scroll stagger-1">
            <p className="text-[9px] font-black uppercase tracking-widest2 text-gold mb-4">
              The Collection
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight leading-none text-luxury-fg">
              Five Categories.
              <br />
              <em className="text-gold not-italic">One Standard.</em>
            </h2>
          </div>
          <div className="reveal-on-scroll stagger-2 max-w-xs">
            <p className="text-sm text-luxury-muted font-sans leading-relaxed">
              Every item factory authorized, brand new, and delivered in premium packaging — the only luxury rewards worthy of your highest-tier players.
            </p>
          </div>
        </div>
        <div className="gold-divider mt-12" />
      </div>

      {/* Bento grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-3">
        {CATEGORIES.map((cat, i) =>
        <Link
          href="/products"
          key={cat.id}
          className={`category-card relative overflow-hidden rounded-2xl border border-luxury-border group cursor-pointer reveal-on-scroll stagger-${Math.min(i + 1, 6)} ${cat.span || ''}`}>
          
            {/* Background image */}
            <AppImage
            src={cat.image}
            alt={cat.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105" />
          

            {/* Overlay */}
            <div className="category-overlay absolute inset-0 z-10" />

            {/* Content */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
              {/* Brand tags */}
              <div className="flex flex-wrap gap-1.5 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                {cat.brands.slice(0, 3).map((brand) =>
              <span key={brand} className="text-[7px] font-black uppercase tracking-widest px-2 py-1 bg-gold/20 border border-gold/30 rounded text-gold">
                    {brand}
                  </span>
              )}
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-luxury-fg tracking-tight leading-tight mb-2">
                {cat.name}
              </h3>
              <p className="text-[11px] text-luxury-muted font-sans leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {cat.description}
              </p>
              {/* Arrow */}
              <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                <span className="text-[9px] font-black uppercase tracking-widest text-gold">View Products</span>
                <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-4 right-4 z-20">
              <div className="w-5 h-5 border-t border-r border-gold/30 group-hover:border-gold/70 transition-colors duration-300" />
            </div>
          </Link>
        )}
      </div>
    </section>);

};

export default CategorySection;