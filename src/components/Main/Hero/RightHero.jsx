import React from 'react'

const RightHero = () => {
  return (
    //  {/* https://www.alchemy.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F105223%2F1705014085-product-test.png&w=3840&q=75 */}
    <div className='min-h-lg flex h-fit w-full max-w-xl items-center rounded-lg lg:w-1/2 bg-transparent'>
        <img src='https://www.alchemy.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F105223%2F1705014085-product-test.png&w=3840&q=75' className='mx-auto h-full w-full rounded-lg max-w-4xl hidden lg:block' />
        <img src='https://www.alchemy.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F105223%2F1705014085-product-test.png&w=3840&q=75' className='mx-auto h-full w-full rounded-lg lg:hidden' />
    </div>
  )
}

export default RightHero