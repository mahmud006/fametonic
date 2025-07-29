'use client';
import SaleBanner from '../components/SaleBanner';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <SaleBanner />
      <Navigation />
      <HeroSection />
    </div>
  );
}
