import React from 'react'

const Cards = ({CardTitle,CardSubTitle,CardDescription}) => {
  return (
    <div className='h-full min-w-[300px] min-h-[506px] animate-card-perspective snap-start overflow-hidden pt-3 pb-6 [perspective:1200px] lg:min-w-[370px] lg:pb-10 lg:pt-12'>
      <div className='relative mx-auto h-full min-h-[470px] w-full min-w-[300px] transition-all duration-700 ease-in-out [transform-style:preserve-3d] lg:min-w-[370px] lg:min-h-[510px] lg:max-w-[370px]'>
        <div className='relative mx-auto h-full min-h-[470px] w-full min-w-[300px] transition-all duration-700 ease-in-out [transform-style:preserve-3d] lg:min-w-[370px] lg:min-h-[510px] lg:max-w-[370px]'>
          <div className='group absolute flex h-full min-h-[470px] w-full min-w-[300px] flex-col justify-between rounded-xl border p-6 shadow-blue-2xl transition-all [backface-visibility:hidden] hover:shadow-blue-3xl lg:rounded-2xl lg:min-h-[510px] lg:min-w-[370px] lg:max-w-[370px] border-gray-200 bg-white-950 text-[#020617] active:bg-gray-50'>
            <a href="" className='absolute inset-0'></a>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-row items-center justify-between gap-2'>
                <div className='flex flex-row items-center gap-3'>
                <div class="h-8 w-8 rounded-full">
                  <img alt="account kit logo" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" style={{color:"transparent"}} src="https://www.datocms-assets.com/105223/1699253178-kit-logo.svg"/>
                </div>
                <span className='font-heading-size-100-bold text-gray-900'>
                  {CardTitle}
                </span>
                </div>
                <button className='relative rounded-lg border p-1.5 transition-colors focus:outline-none border-gray-200 bg-gray-100 text-gray-500 hover:bg-gray-200 focus:border-gray-300 active:text-gray-700'>
                  <svg className="h-5 w-5" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.94472 12.5564L2.38916 9.00087L5.94472 5.44531M13.0558 5.44531L16.6114 9.00087L13.0558 12.5564" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
              </div>
              <div className='group pointer-events-none max-h-[140px] w-full overflow-hidden rounded-md object-cover sm:max-h-[200px] lg:object-contain'>
                <img src='https://www.alchemy.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F105223%2F1705562507-account-kit.jpg&w=3840&q=75' className='transition-transform duration-300 group-hover:scale-105' />
              </div>
              <div className='flex flex-col gap-3 lg:gap-6'>
                <h3 className='font-primary leading-[1.1] font-medium text-[24px] line-clamp-2 text-[#020617] group-hover:text-gray-700'>
                  {CardSubTitle}
                </h3>
                <p className='font-primary font-normal leading-[1.5] lg:text-[18px] text-[16px] text-gray-500'>
                  {CardDescription}
                </p>
              </div>

            </div>
            <div className='flex h-full items-end justify-end transition-all text-gray-400 group-hover:text-[#020617]'>
            <svg className="pointer-events-none h-7 w-7 transition-transform group-hover:translate-x-1 lg:h-8 lg:w-8" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" d="M12.8333 7.625L17 12M17 12L12.8333 16.375M17 12L7 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards

