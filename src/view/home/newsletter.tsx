import Link from 'next/link'
import React from 'react'

export default function NewsLetter() {
  return (
    <section className='flex flex-col pt-28 overflow-hidden relative space-y-4 text-center items-center'>
          <p className='text-center absolute -z-10 pt-28 md:pt-8 font-black text-7xl  
          md:text-8xl lg:text-9xl tracking-widest text-gray-100'>
            Newsletter
          </p>
      <h3 className=' font-bold text-4xl'>Subscribe Our Newsletter</h3>
      <p className=' text-lg font-light '>
        Get the latest information and promo offers directly
      </p>
      <div className='pt-8 pb-48 flex flex-col md:flex-row space-y-2 items-center md:space-x-2 md:space-y-0 '>

        <input type="text" className=" p-2 border-2 border-slate-300  text-sm w-72 sm:w-80" placeholder="Input emial address" />
        <Link href={''}>
            <div className='bg-black text-white w-fit px-4 py-2'>
                Get Started
            </div>
        </Link>
      </div>
    </section>
  )
}
