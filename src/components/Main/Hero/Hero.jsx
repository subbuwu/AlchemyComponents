import React from 'react'
import LeftHero from './LeftHero'
import RightHero from './RightHero'

const Hero = () => {
  return (
    <section className='overflow-hidden p-6 xl:pt-6 relative'>
        <div className='relative mx-auto flex max-w-[1170px] flex-col items-center justify-between gap-10 lg:flex-row lg:gap-8'>
          <LeftHero/>
          <RightHero/>
        </div>
    </section>
  )
}

export default Hero