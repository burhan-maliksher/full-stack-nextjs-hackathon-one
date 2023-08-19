"use client"
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { GiCancel } from 'react-icons/gi'
import { LiaCheckCircle } from 'react-icons/lia'
import { RiDeleteBin5Line } from 'react-icons/ri'



export default function ProductDeleteBtn(props:{productId:string,userId:string|undefined}) {
    const {productId,userId} = props

    const handleDelete=async ()=>{
        try {
            const req =await fetch(`/api/cart?productId=${productId}&userId=${userId}`,{
                cache:'no-cache',
                method:'Delete',
                headers:{
                    'Content-Type':'application/json',
                }
            })
            const res =await req.json();
            const notify = () =>toast(
                 `Prodect removed from the cart Successfully`,
                {icon:<RiDeleteBin5Line className=' text-green-600 w-8 h-8'/>}
                ) ;
            notify()

        } catch (error) {
            // console.log(error,{message:"something went wrong"});
            const notify = () =>toast(`Something went wrong: Fialed to remove Product from the cart`,{icon:<GiCancel className=' text-red-600 w-8 h-8'/>}) ;
            notify()
        }
    }

return (
    <>
      <button className='w-[2rem]' onClick={handleDelete}>
        <RiDeleteBin5Line className=' w-6 h-6'/>
        <Toaster/>
      </button>
    </>
  )
}
