'use client';
import SaleBanner from '../../components/SaleBanner';
import Navigation from '../../components/Navigation';
import HeroSection from '../../components/HeroSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='min-h-screen bg-black text-white relative'>
      <SaleBanner />
      <div className='md:h-[35px] lg:h-[35px]'></div>
      <Navigation />
      <div className=' md:h-[0px] lg:h-[57px]'></div>
      <HeroSection />
      <div className='sm:hidden absolute top-[76px] left-1/2 -translate-x-1/2 z-0'>
        <Image
          src='/assets/mobile-mockup-xs.svg'
          alt='Fametonic Mobile App'
          width={390}
          height={426}
          style={{
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
          className='object-contain w-[390px] max-w-[426px] h-auto'
          priority
          loading="eager"
          onLoad={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onError={(e) => {
            console.error('Image failed to load:', e);
          }}
        />
      </div>
      <div className='hidden sm:block absolute top-[156px] left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:top-[126px] lg:right-[20px] xl:right-[60px] 2xl:right-[101px]'>
        <Image
          src='/assets/mobile-mockup.svg'
          alt='Fametonic Mobile App'
          width={666}
          height={679}
          style={{
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
          className='object-contain w-[500px] min-w-[500px] lg:w-[666px] h-auto'
          priority
          loading="eager"
          onLoad={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onError={(e) => {
            console.error('Image failed to load:', e);
          }}
        />
      </div>
    </div>
  );
}
