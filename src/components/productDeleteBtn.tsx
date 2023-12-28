"use client"
import { IProduct, IProductCart } from '@/types/types'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { GiCancel } from 'react-icons/gi'
// import { LiaCheckCircle } from 'react-icons/lia'
import { RiDeleteBin5Line } from 'react-icons/ri'



export default function ProductDeleteBtn(props:{productId:string,userId:string|null,updatedCartfunc:(updatedCartData:IProductCart[])=>void}) {
    const {productId,userId,updatedCartfunc} = props

    const handleDelete=async ()=>{
        try {
            //   Retrieve the cart data from session storage
            const storedCart = sessionStorage.getItem('cart');

            if (storedCart) {
            // Identify the object to remove based on its product ID
            const cartData = JSON.parse(storedCart);
            const productIdToRemove = productId; // Replace with the specific product ID you want to remove

            // Remove the object from the cart
            const updatedCartData = cartData.filter((item: { productId: string }) => item.productId !== productIdToRemove);
                updatedCartfunc(updatedCartData)
            // Update the cart data in session storage
            sessionStorage.setItem('cart', JSON.stringify(updatedCartData));

            // Optionally, you can also update your component's state to reflect the changes
            // setCart(updatedCartData);
            }
            // const req =await fetch(`/api/cart?productId=${productId}&userId=${userId}`,{
            //     cache:'no-cache',
            //     method:'Delete',
            //     headers:{
            //         'Content-Type':'application/json',
            //     }
            // })
            // const res =await req.json();
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
