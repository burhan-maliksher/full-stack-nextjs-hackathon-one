import React from 'react'

export default function AboutSec1() {
  return (
    <div className='flex flex-col relative mt-6 lg:h-full overflow-hidden lg:mt-0 space-y-6   h-min  '>
        <p className='absolute -z-10 text-left font-black pt-8 text-7xl md:pl-4 lg:text-8xl tracking-widest  leading-relaxed  text-gray-100'>
            Different from others
        </p>
        <div className='flex  justify-between  h-full w-auto '>
            <div className='flex flex-col space-x-4 w-44 md:w-96 xl:w-64 text-left space-y-4   '>
                <h2 className='text-xl font-bold  text-left pt-4 pl-4'>Using Good Quality Materials</h2>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className='flex flex-col space-x-4 w-44 md:w-72 xl:pr-4 text-left space-y-4   '>
                <h2 className='text-xl font-bold  text-left pt-4 pl-4'>100% Handmade Products</h2>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div className='flex  justify-between  h-full w-auto '>
            <div className='flex flex-col space-x-4 w-44 md:w-96 xl:w-64 text-left space-y-4   '>
                <h2 className='text-xl font-bold  text-left pt-4 pl-4'>Modern Fashion Design</h2>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className='flex flex-col space-x-4 w-44 md:w-72 xl:pr-4 text-left space-y-4   '>
                <h2 className='text-xl font-bold  text-left pt-4 pl-4 pb-6 sm:pb-0'>Discount for Bulk Orders</h2>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
        </div>
    </div>
  )
}
