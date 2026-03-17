import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-luxury-border py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo + brand */}
        <Link href="/homepage" className="flex items-center gap-3">
          <AppLogo size={28} />
          <span className="font-display text-sm font-bold tracking-widest text-gold uppercase">
            BlackCard Collection
          </span>
        </Link>

        {/* Links */}
        <nav className="flex items-center gap-8">
          <Link href="/homepage" className="text-[13px] font-medium text-luxury-muted hover:text-gold transition-colors">
            Collection
          </Link>
          <Link href="/products" className="text-[13px] font-medium text-luxury-muted hover:text-gold transition-colors">
            Products
          </Link>
          <a href="mailto:sales@blackcardcollections.com" className="text-[13px] font-medium text-luxury-muted hover:text-gold transition-colors">
            Contact
          </a>
          <a href="#" className="text-[13px] font-medium text-luxury-muted hover:text-gold transition-colors">
            Privacy
          </a>
          <a href="#" className="text-[13px] font-medium text-luxury-muted hover:text-gold transition-colors">
            Terms
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-[12px] font-medium text-luxury-dim">
          © 2026 BlackCard Collections
        </p>
      </div>
    </footer>
  );
};

export default Footer;