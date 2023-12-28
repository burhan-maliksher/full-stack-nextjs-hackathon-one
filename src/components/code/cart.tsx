"use client"
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "@/types/hooks";

export default function Cart() {
  const cartCount = useSelector((state:RootState)=>state.cart.totalQuantity)   

  return (
    <div>
       <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center relative transition hover:scale-110">
          <FiShoppingCart className="h-5 w-5"/>
          <div className="bg-red-500 rounded-full w-5 h-5 absolute self-start ml-5">
            <div className=" text-white text-sm flex  justify-center ">{cartCount}</div>
          </div>
        </div>
    </div>
  )
}
