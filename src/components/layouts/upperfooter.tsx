"use client"

import React from 'react'
import Image from 'next/image'
import {FaFacebookF,FaLinkedinIn,FaTwitter} from 'react-icons/fa';
import Link from 'next/link';

export default function UpperFooter() {
  return (
    <footer className='flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:justify-around   w-full  mb-20'>
      <div className='flex flex-col space-y-8 w-64 md:w-80 lg:w-96 '>
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

      <div className='font-light flex flex-col space-y-4'>
        <h3 className='font-bold text-xl text-slate-600'>Company</h3>
        <Link href={""}>About</Link>
        <Link href={""}>Terms of Use</Link>
        <Link href={""}>Privacy Policy</Link>
        <Link href={""}>How it Works</Link>
        <Link href={""}>Contact Us</Link>
      </div>

      <div className='font-light flex flex-col space-y-4'>
        <h3 className='font-bold text-xl text-slate-600'>Support</h3>
        <Link href={""}>Support Carrer</Link>
        <Link href={""}>24h Support</Link>
        <Link href={""}>Quick Chat</Link>
      </div>  

      <div className='font-light flex flex-col space-y-4'>
        <h3 className='font-bold text-xl text-slate-600'>Contact</h3>
        <Link href={""}>Whatsapp</Link>
        <Link href={""}>Support 24h</Link>
      </div>  

    </footer>
  )
}
