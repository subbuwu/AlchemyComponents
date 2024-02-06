import "../../../index.css"
import ScrollbarItem from "./ScrollbarItem"
const InfiniteSlider = () => {
    
    const n = 28;
    const scrollbarItemsArray = Array.from({ length: n }, (_, index) => index);

  return (
    <section className='z-10 flex items-center justify-center overflow-hidden' >
        <div className="flex w-full items-center justify-center">
            <div className='relative flex flex-col gap-8 overflow-hidden py-16 w-full md:px-6 xl:px-0'>
                <div className='relative m-auto flex select-none flex-col gap-4 overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] lg:gap-6'>
                    <ul className='flex w-[calc(2000px*2)] animate-infinite-slider-horizontal flex-row gap-16 py-2'>
                        {
                            scrollbarItemsArray.map((item)=>(
                                <ScrollbarItem/>
                            ))
                        }
                    </ul>
                    <ul className="-ml-[1000px] flex w-[calc(2000px*2)] animate-infinite-slider-horizontal flex-row gap-16 py-2">
                    {
                            scrollbarItemsArray.map((item)=>(
                                <ScrollbarItem/>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </section >
  )
}

export default InfiniteSlider