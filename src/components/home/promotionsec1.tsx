import Image from 'next/image'
import React from 'react'

export default function PromotionSec1() {
  return (
    <div className='flex flex-col  lg:h-3/4 space-y-6 '>
        <div className='flex flex-col md:flex-row pt-8 justify-end md:justify-evenly xl:justify-center bg-gray-300'>
            <div className='flex flex-col items-center lg:pl-2 lg:text-left  '>
                <div className='m-auto'>
                    <h2 className='font-bold text-2xl  xl:text-4xl'>GET UP TO <span className='text-3xl lg:text-4xl xl:text-5xl'>60%</span></h2>
                    <p className='md:text-lg text-left font-light'>For the summer season</p>
                </div>
            </div>
            <div className='flex justify-center '>
                <Image src={'/event1.png'} alt={"logo"} width={150} height={0} className="w-64 md:w-64"/>
            </div>
        </div>
        <div className='flex flex-col items-center h-fit py-8  text-white  bg-zinc-800 '>
            <h2 className=' font-bold text-3xl lg:text-4xl xl:text-5xl'>GET 30% Off </h2>
            <p className='mt-4  font-light'>USE PROMO CODE</p>
            <h4 className='bg-zinc-700 p-2 tracking-[0.3em] md:tracking-[0.4em] font-bold rounded-md'>DINEWEEKENDSALE</h4>
        </div>
    </div>
  )
}
