import Image from 'next/image';

export default function HeroSection() {
  return (
    <main className='max-w-7xl mx-auto px-4 md:px-8 lg:px-[10%] xl:px-[15%] 2xl:px-[211px] relative'>
      <div className='relative z-10 md:py-12'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start md:gap-8 lg:gap-12'>
          <div className='w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2'>
            <Image
              src='/assets/mobile-mockup.svg'
              alt='Fametonic Mobile App'
              width={666}
              height={679}
              style={{
                width: '100%',
                maxWidth: '666px',
                height: 'auto',
                opacity: 1,
                transform: 'rotate(0deg)',
              }}
              className='object-contain w-[300px] md:w-[400px] lg:w-[500px] xl:w-[666px]'
              priority
            />
          </div>

          <div className='w-full lg:w-1/2 text-center lg:text-left px-5 lg:pr-8 order-2 lg:order-1'>
            <h2 className='text-[25px] md:text-[35px] font-extrabold md:font-bold mb-6 leading-none tracking-normal text-center lg:text-left font-urbanist'>
              Want to Turn Social Media Into a Profitable Career?
            </h2>

            <h3 className='text-xl md:text-2xl lg:text-3xl text-[#00BCD4] font-bold mb-8 leading-tight font-urbanist'>
              Discover your way to success with Fametonic:
            </h3>

            <div className='space-y-4 mb-8 text-left max-w-lg mx-auto lg:mx-0'>
              <div className='flex items-center gap-[10px] justify-center'>
                <p className='text-gray-300 text-base h-[20px] w-[20px]'>✨</p>
                <p className='text-gray-300 text-base'>
                  Start growing your influence right away—no waiting required!
                </p>
              </div>
              <div className='flex items-center gap-[10px] justify-center'>
                <p className='text-gray-300 text-base h-[20px] w-[20px]'>✨</p>
                <p className='text-gray-300 text-base'>
                  Create viral TikToks and Reels step by step with
                  easy-to-follow lessons
                </p>
              </div>
              <div className='flex items-center gap-[10px] justify-center'>
                <p className='text-gray-300 text-base h-[20px] w-[20px]'>✨</p>
                <p className='text-gray-300 text-base'>
                  Use a Personal AI Worker to boost your content
                </p>
              </div>
              <div className='flex items-center gap-[10px] justify-center'>
                <p className='text-gray-300 text-base h-[20px] w-[20px]'>✨</p>
                <p className='text-gray-300 text-base'>
                  Learn from expert-led courses designed for aspiring
                  influencers
                </p>
              </div>
            </div>

            <div className='text-xs text-gray-500 mb-6 max-w-lg mx-auto lg:mx-0'>
              <p>
                By clicking &ldquo;Get Started&rdquo;, you agree with Terms and
                Conditions, Privacy Policy, Subscription Terms
              </p>
              <p className='mt-2'>Fametonic 2024 All Rights Reserved.</p>
            </div>

            <button
              className='font-urbanist text-white font-bold text-lg transition-colors mb-4 w-full flex items-center justify-center'
              style={{
                height: '40px',
                padding: '8px 40px',
                gap: '10px',
                borderRadius: '10px',
                background: '#FC004E',
                boxShadow: '2px 2px 10px 0px #00E7F9',
              }}
            >
              <span className='text-white font-bold'>GET STARTED</span>
              <Image
                src='/assets/ic_gt.svg'
                alt='arrow-right'
                width={6}
                height={11}
              />
            </button>

            <p className='text-xs text-gray-500 mb-6'>
              1-minute quiz for personalized insights
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
