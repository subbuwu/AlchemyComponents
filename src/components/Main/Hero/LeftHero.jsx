import React from 'react'
import SecondaryButton from '../../Buttons/SecondaryButton'
import PrimaryButton from '../../Buttons/PrimaryButton'

const LeftHero = () => {
  return (
          <div className='max-w-[670px] relative flex w-full flex-col gap-6 lg:w-1/2'>
            <h1 className='lg:text-[64px] md:text-[50px] text-[40px] font-primary font-black leading-[1.1] tracking-normal'>
              <span className='text-[#020617] '>
              The most reliable way to build web3 apps
              </span>
            </h1>
            <p className='font-primary text-[16px] md:text-[20px] font-normal leading-[1.5] lg:text-[22px] text-gray-700'>
                Powerful APIs, SDKs, and tools to build and scale your web3 app with ease.
              </p>
            <div className='flex w-full flex-col gap-4 sm:w-fit sm:flex-row sm:gap-2'>
                <a href='' className='w-full sm:w-fit'>
                    <SecondaryButton title="Get your API key" />
                </a>
                <a className='w-full sm:w-fit'>
                    <PrimaryButton title="View docs" />
                </a>
            </div>
          </div>
  )
}

export default LeftHero