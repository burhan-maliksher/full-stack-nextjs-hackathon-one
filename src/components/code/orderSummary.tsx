"use client"
import Link from 'next/link'
import React from 'react'
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "@/types/hooks";


export default function OrderSummary() {
    const cartCount = useSelector((state:RootState)=>state.cart.totalQuantity)   
    const cartAmount = useSelector((state:RootState)=>state.cart.totalAmount)   

    return (
    // <div>
      <div className='text-lg flex flex-col space-y-4 mt-12 lg:mt-0 lg:ml-8 '>
        
        <h3 className='text-2xl font-bold text-center md:text-left'>Order Summary</h3>
        <div className='flex flex-row space-x-2 w-[18rem] md:w-[45rem] lg:w-[24rem] xl:w-[30rem] '>
          <div className='w-[10rem] md:w-[32rem] lg:w-[16rem] xl:w-[20rem]'>Quantity</div>
          <div className='justify-end'>{cartCount} Products</div>
        </div>
        
        <div className='flex space-x-2 w-[18rem] md:w-[45rem] lg:w-[24rem] xl:w-[30rem] '>
          <div className=' w-[10rem] md:w-[32rem] lg:w-[16rem] xl:w-[20rem]'>Sub Total</div>
          <div className=' justify-end'>${cartAmount}</div>
        </div>
        <Link href={"/allProducts"} className="bg-slate-800 w-full h-auto text-xl font-bold p-4 text-white flex justify-center space-x-4">
            Process to Checkout
        </Link>
      </div>
    // {/* </div> */}
  )
}
