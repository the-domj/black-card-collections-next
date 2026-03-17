'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/homepage', label: 'Collection' },
    { href: '/products', label: 'Products' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-luxury-bg/90 backdrop-blur-xl border-b border-luxury-border py-4' :'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/homepage" className="flex items-center gap-3 group">
          <AppLogo size={32} />
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-widest text-gold uppercase">
              BlackCard
            </span>
            <span className="text-[8px] font-sans font-semibold tracking-widest2 text-luxury-muted uppercase">
              Collection
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[10px] font-sans font-bold uppercase tracking-widest2 transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-gold' :'text-luxury-muted hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-[8px] font-sans font-bold uppercase tracking-widest text-gold/60 animate-pulse">
            ◆ VIP Access Only
          </span>
          <Link
            href="/products"
            className="btn-gold px-6 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-widest"
          >
            Explore Collection
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-[1px] bg-gold transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`w-5 h-[1px] bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-[1px] bg-gold transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="bg-luxury-bg/95 backdrop-blur-xl border-t border-luxury-border px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[10px] font-bold uppercase tracking-widest2 transition-colors ${
                pathname === link.href ? 'text-gold' : 'text-luxury-muted hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className="btn-gold px-6 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest text-center"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;