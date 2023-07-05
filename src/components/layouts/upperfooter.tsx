"use client"

import React from 'react'
import Image from 'next/image'
import {FaFacebookF,FaLinkedinIn,FaTwitter} from 'react-icons/fa';

export default function UpperFooter() {
  return (
    <div className='flex flex-col lg:flex-row w-full lg:space-x-6 mb-20'>
      <div className='flex flex-col space-y-8 w-64 md:w-80 lg:96'>
        <Image src={'/Logo.png'} alt={"logo"} width={200} height={0} className=""/>
        <p className='font-light flex '>
            Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
        </p>
        <div className='flex flex-row space-x-4'>
            <FaTwitter className='w-10 h-10 p-3 rounded-md bg-slate-200 shadow-md'/>
            <FaFacebookF className='w-10 h-10 p-3 rounded-md bg-slate-200 shadow-md'/>
            <FaLinkedinIn className='w-10 h-10 p-3 rounded-md bg-slate-200 shadow-md'/>
        </div>
      </div>

      <p className='pt-4'>Copyright © 2022 Dine Market</p>
      <p className='pt-4'>Design by. 
        <span className='font-bold'>Weird Design Studio </span>
      </p>
      <p className='pt-4'>Code by. 
        <span className='font-bold'> shabrina12 on github</span>
      </p>
    </div>
  )
}
