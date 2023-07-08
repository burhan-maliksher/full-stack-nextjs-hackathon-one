import Image from 'next/image'
import React from 'react'

export default function PromotionSec2() {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2 mt-6 lg:h-full lg:mt-0 space-y-6 md:space-y-0 md:space-x-6 h-min  '>
        <div className='flex flex-col  justify-between  h-full w-auto bg-orange-100'>
            <div className='flex flex-col    '>
                <h2 className='font-medium  text-left pt-4 pl-4'>Flex Sweatshirt
                    <br className='text-3xl lg:text-4xl xl:text-5xl '/>
                    <span className='line-through font-normal'>$100.00</span>
                    <span className='font-extrabold text-xl'> $75.00</span> 
                </h2>
            </div>
            <div className='flex justify-center'>
                <Image src={'/event2.png'} alt={"logo"} width={150} height={0} className="w-48 md:w-72"/>
            </div>
        </div>
        <div className='flex flex-col  justify-between pt-4 h-full w-auto   bg-gray-300'>
            <div className='flex flex-col    '>
                <h2 className='font-medium  text-left pl-4'>Flex Push Button Bomber
                    <br className='text-3xl lg:text-4xl xl:text-5xl '/>
                    <span className='line-through font-normal'>$225.00</span>
                    <span className='font-extrabold text-xl'> $190.00</span> 
                </h2>
            </div>
            <div className='flex justify-center'>
                <Image src={'/event3.png'} alt={"logo"} width={150} height={0} className="w-48 md:w-72"/>
            </div>
        </div>

    </div>
    )
}
