'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className='bg-black pt-6 md:py-6 px-4 md:px-8'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 lg:px-[10%] xl:px-[15%] 2xl:px-[211px] relative'>
        <div className='text-white flex-1 md:flex-none flex justify-center md:justify-start'>
          <Image
            src='/assets/brand-name.svg'
            alt='Fametonic'
            width={100}
            height={100}
          />
        </div>

        <div className='hidden md:flex space-x-8'>
          <button className='text-white hover:text-gray-300 transition-colors text-base'>
            About us
          </button>
          <button className='text-white hover:text-gray-300 transition-colors text-base'>
            Contact
          </button>
        </div>

        <button
          className='md:hidden text-white absolute right-4 text-xl'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label='Toggle menu'
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className='md:hidden mt-4 pt-4 border-t border-gray-800'>
          <div className='flex flex-col space-y-4'>
            <button className='text-white text-left'>About us</button>
            <button className='text-white text-left'>Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}
