export default function HeroSection() {
  return (
    <div className='w-full bg-black text-white flex flex-col relative'>
      <div className='px-4 md:px-8 lg:px-[10%] xl:px-[15%] 2xl:px-[211px] z-20 relative pt-[400px] sm:pt-[550px] md:pt-[450px] lg:pt-[0px]'>
        <div className='w-full'>
          <div className='w-full lg:max-w-[516px] 2xl:max-w-[100%] text-center lg:text-left order-2 lg:order-1 flex flex-col gap-2'>
            <h1
              className='font-urbanist text-center lg:text-left text-[25px] md:text-[35px] px-2 md:px-0'
              style={{
                fontFamily: 'Urbanist',
                fontWeight: 700,
                lineHeight: '100%',
                letterSpacing: '0%',
                verticalAlign: 'middle',
              }}
            >
              Want to Turn Social Media Into a Profitable Career?
            </h1>
            <h2
              className='font-urbanist text-center lg:text-left text-[25px] md:text-[35px]'
              style={{
                fontFamily: 'Urbanist',
                fontWeight: 700,
                lineHeight: '100%',
                letterSpacing: '0%',
                verticalAlign: 'middle',
                color: '#00E7F9',
                textShadow: '0px 4px 4px #FC004E',
              }}
            >
              Discover your way to success with Fametonic:
            </h2>
            <div className='flex flex-col gap-3 lg:gap-4 2xl:gap-6 text-left px-8 md:px-12 lg:px-0 py-4 lg:py-7 2xl:py-10'>
              <div className='flex items-start gap-3 lg:gap-4'>
                <span className='text-yellow-400 text-sm lg:text-base mt-0.5'>
                  ✨
                </span>
                <p className='text-gray-300 text-sm lg:text-base leading-[1.3] lg:leading-[1.4]'>
                  Start growing your influence right away—no waiting required!
                </p>
              </div>
              <div className='flex items-start gap-3 lg:gap-4'>
                <span className='text-yellow-400 text-sm lg:text-base mt-0.5'>
                  ✨
                </span>
                <p className='text-gray-300 text-sm lg:text-base leading-[1.3] lg:leading-[1.4]'>
                  Create viral TikToks and Reels step by step with
                  easy-to-follow lessons
                </p>
              </div>
              <div className='flex items-start gap-3 lg:gap-4'>
                <span className='text-yellow-400 text-sm lg:text-base mt-0.5'>
                  ✨
                </span>
                <p className='text-gray-300 text-sm lg:text-base leading-[1.3] lg:leading-[1.4]'>
                  Use a Personal AI Worker to boost your content
                </p>
              </div>
              <div className='flex items-start gap-3 lg:gap-4'>
                <span className='text-yellow-400 text-sm lg:text-base mt-0.5'>
                  ✨
                </span>
                <p className='text-gray-300 text-sm lg:text-base leading-[1.3] lg:leading-[1.4]'>
                  Learn from expert-led courses designed for aspiring
                  influencers
                </p>
              </div>
            </div>

            <div className='md:hidden py-4 flex flex-col gap-2 px-8'>
              <p
                style={{
                  fontFamily: 'Figtree',
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: '#9CA3AF', // text-gray-500 equivalent
                }}
                className='text-center'
              >
                By clicking &quot;Get Started&quot;, you agree with Terms and
                Conditions, Privacy Policy, Subscription Terms
              </p>
              <p
                style={{
                  fontFamily: 'Figtree',
                  fontWeight: 500,
                  fontSize: '10px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: '#9CA3AF', // text-gray-500 equivalent
                }}
                className='text-center'
              >
                Fametonic 2024 All Rights Reserved.
              </p>
            </div>

            <div className='flex flex-col items-center lg:items-start justify-center lg:justify-start gap-2 lg:gap-3'>
              <button
                className='font-urbanist text-white font-bold text-base lg:text-lg transition-colors flex items-center justify-center gap-2 w-full md:w-[300px] h-[40px] md:h-[50px]'
                style={{
                  padding: '12px 40px',
                  borderRadius: '10px',
                  background: '#FC004E',
                  boxShadow: '2px 2px 10px 0px #00E7F9',
                }}
              >
                <span className='text-white font-bold'>GET STARTED</span>
                <span className='text-white'>&gt;</span>
              </button>

              <p className='text-xs lg:text-sm text-gray-500 text-center md:text-center lg:text-left w-[300px]'>
                1-minute quiz for personalized insights
              </p>

              <div className='hidden md:flex py-4 lg:py-6 flex-col gap-2 lg:gap-3 w-[300px]'>
                <p
                  style={{
                    fontFamily: 'Figtree',
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    color: '#9CA3AF',
                  }}
                  className='text-center lg:text-left'
                >
                  By clicking &quot;Get Started&quot;, you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
                </p>
                <p
                  style={{
                    fontFamily: 'Figtree',
                    fontWeight: 500,
                    fontSize: '10px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    color: '#9CA3AF',
                  }}
                  className='text-center lg:text-left'
                >
                  Fametonic 2024 All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
