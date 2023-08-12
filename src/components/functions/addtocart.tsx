"use client"
import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import ProductQuantity from './productquantity';
import { IProductDynamic } from "@/types/types";
import { log } from 'console';


export default function AddtoCart(props:{value: IProductDynamic}) {
    const [pdQuantity,setPdQuantity]=useState<number>(1)
    const item=props.value
    // console.log(item._id);
    
    
    const handleAddtoCart=async()=>{
      // console.log("hi");
      
      const res =await fetch("/api/cart",{
        method:"POST",
        body: JSON.stringify({
          product_id:item._id,
          quantity: pdQuantity,         
        })
      })
      const result=await res.json()
      console.log(result);
      
    }
    
    // callback for getting value from child to parent
    const onClickHandleQuantity=(value:number)=>{
      setPdQuantity(value)
      // console.log(value);
      
    }

    return (
    <>
      <ProductQuantity onQuantityChange={onClickHandleQuantity}/>
      {/* add to card  */}
      <div className="mt-8 flex justify-around md:justify-start md:space-x-4">
        <button className="px-4 py-2 font-bold flex bg-black text-white" onClick={handleAddtoCart}>
          <FiShoppingCart className='pr-2 w-8 h-8'/>
          <p className="pt-1">Add to Cart</p>
        </button>
        <h4 key={item._id} className='font-bold pt-2 text-2xl'>${item.price}.00</h4>
      </div>  
    </>
  )
}
