export default function SaleBanner() {
  const textParts = [
    { text: '🚀FRESH BEGINNINGS SALE:', color: '#10CBE0' },
    { text: 'Extra 25% OFF,', color: '#FFFFFF' },
    { text: 'Limited Spots - start your journey today!', color: '#FFFFFF' },
  ];
  return (
    <div
      className='h-[76px] lg:h-[46px] px-5 md:px-[20px] text-center flex items-center justify-center md:w-full mx-auto'
      style={{
        background:
          'linear-gradient(89.63deg, #FC004E -2.16%, #10CBE0 115.27%)',
      }}
    >
      <div className='flex flex-col items-center gap-1 sm:hidden'>
        <div className='flex flex-row items-center gap-1'>
          <span className='text-[#10CBE0] font-extrabold text-[16px] leading-[100%] text-center'>
            {textParts[0].text}
          </span>
          <span className='text-white font-extrabold text-[16px] leading-[100%] text-center'>
            {textParts[1].text}
          </span>
        </div>
        <span className='text-white font-semibold text-[16px] leading-[100%] text-center'>
          {textParts[2].text}
        </span>
      </div>

      <div className='hidden sm:block'>
        <span className='text-[#10CBE0] font-extrabold text-[22px] leading-[26px]'>
          {textParts[0].text}
        </span>
        <span className='text-white font-semibold text-[22px] leading-[26px] ml-2'>
          {textParts[1].text}
        </span>
        <span className='text-white font-semibold text-[22px] leading-[26px] ml-2'>
          {textParts[2].text}
        </span>
      </div>
    </div>
  );
}
