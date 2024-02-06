import Footer from '../Footer/footer'
import CardSection from './CardSection/MainCardsSection'
import EnterpriseSection from './EnterpriseSection/EnterpriseSection'
import Hero from './Hero/Hero'
import HorizontalScrollerCardsSection from './HorizontalScrollerCardsSection/HorizontalScrollerCardsSection'
import InfiniteSlider from "./InfiniteSlider/InfiniteSlider"
import Last from './LastComponent/last'

const Main = () => {
  return (
    <>
    <img src='https://www.alchemy.com/_next/image?url=%2Fimages%2Fhero-bg.webp&w=3840&q=75' className='absolute z-[-1] hidden h-full max-h-[1600px] w-full object-contain object-center md:block md:object-cover lg:max-h-[1000px] 2xl:max-h-[875px]'/>
    <img src='https://www.alchemy.com/_next/image?url=%2Fimages%2Fhome-mobile.webp&w=828&q=75' className='absolute z-[-1] h-full max-h-[1000px] w-full object-cover object-top sm:max-h-[1200px] md:hidden' />
    <div className='pt-16 lg:pt-20'></div>
    <Hero/>
    <InfiniteSlider/>
    <CardSection/>
    <HorizontalScrollerCardsSection/>
    <EnterpriseSection/>
    <Footer/>
    <Last/>
    </>
  )
}

export default Main