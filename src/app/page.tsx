import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import BrandsSection from './components/BrandsSection';
import AuthenticitySection from './components/AuthenticitySection';
import CTASection from './components/CTASection';

export default function HomepagePage() {
  return (
    <main className="bg-luxury-bg min-h-screen">
      <Header />
      <HeroSection />
      <CategorySection />
      <BrandsSection />
      <AuthenticitySection />
      <CTASection />
      <Footer />
    </main>
  );
}
