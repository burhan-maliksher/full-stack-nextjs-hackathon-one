import Image from 'next/image'
import React from 'react'

export default function HeroSec2() {
  return (
    <div className='hidden lg:flex relative min-w-0'>
        <div className='flex items-center   '>
            <div className='bg-orange-100  rounded-full aspect-square object-none w-full  absolute -z-10 '></div>
        </div>

        <Image src={"/header.png"} alt='header' width={900} height={900} className=' w-auto h-full'/>

    </div>
  )
}
