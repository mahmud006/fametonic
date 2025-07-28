'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='min-h-screen bg-black text-white'>
      <div className='bg-gradient-to-r from-[#E91E63] to-[#00BCD4] py-3 px-4 text-center'>
        <p className='text-sm font-medium'>
          <span className='text-[#00BCD4] font-bold'>
            FRESH BEGINNINGS SALE:
          </span>{' '}
          <span className='text-white'>
            Extra 25% OFF, Limited Spots - start your journey today!
          </span>
        </p>
      </div>

      <nav className='bg-black py-6 px-4 md:px-8'>
        <div className='max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 lg:px-[10%] xl:px-[15%] 2xl:px-[211px]'>
          {/* Logo */}
          <div className='text-white'>
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
            className='md:hidden text-white'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className='w-6 h-5 flex flex-col justify-between'>
              <span className='block h-0.5 bg-white'></span>
              <span className='block h-0.5 bg-white'></span>
              <span className='block h-0.5 bg-white'></span>
            </div>
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

      <main className='max-w-7xl mx-auto px-4 md:px-8 lg:px-[10%] xl:px-[15%] 2xl:px-[211px] relative'>
        <div className='absolute top-0 right-0 pointer-events-none'>
          <Image
            src='/assets/mobile-mockup.svg'
            alt='Fametonic Mobile App'
            width={666}
            height={679}
            style={{
              width: '666px',
              height: '679px',
              opacity: 1,
              transform: 'rotate(0deg)',
              zIndex: 1,
            }}
            className='object-contain'
            priority
          />
        </div>

        <div className='relative z-10 py-8 md:py-12'>
          <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12'>
            <div className='lg:w-1/2 text-center lg:text-left'>
              <h2 className='text-[25px] md:text-[35px] font-extrabold md:font-bold mb-6 leading-none tracking-normal text-center lg:text-left font-urbanist'>
                Want to Turn Social Media Into a Profitable Career?
              </h2>

              <h3 className='text-xl md:text-2xl lg:text-3xl text-[#00BCD4] font-bold mb-8 leading-tight font-urbanist'>
                Discover your way to success with Fametonic:
              </h3>

              <div className='space-y-4 mb-8 text-left max-w-lg'>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0'></div>
                  <p className='text-gray-300 text-base'>
                    Start growing your influence right away—no waiting required!
                  </p>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0'></div>
                  <p className='text-gray-300 text-base'>
                    Create viral TikToks and Reels step by step with
                    easy-to-follow lessons
                  </p>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0'></div>
                  <p className='text-gray-300 text-base'>
                    Use a Personal AI Worker to boost your content
                  </p>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0'></div>
                  <p className='text-gray-300 text-base'>
                    Learn from expert-led courses designed for aspiring
                    influencers
                  </p>
                </div>
              </div>

              <button className='bg-[#E91E63] hover:bg-[#C2185B] text-white font-bold py-4 px-8 rounded-md text-lg transition-colors mb-4 shadow-lg'>
                GET STARTED &gt;
              </button>

              <p className='text-xs text-gray-500 mb-6'>
                1-minute quiz for personalized insights
              </p>

              <div className='text-xs text-gray-500 max-w-lg'>
                <p>
                  By clicking &ldquo;Get Started&rdquo;, you agree with Terms
                  and Conditions, Privacy Policy, Subscription Terms
                </p>
                <p className='mt-2'>Fametonic 2024 All Rights Reserved.</p>
              </div>
            </div>

            <div className='lg:w-1/2'></div>
          </div>
        </div>
      </main>
    </div>
  );
}
