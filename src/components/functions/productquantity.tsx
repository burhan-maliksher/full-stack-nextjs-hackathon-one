"use client"

import { useState } from "react"
// add or subtract product quantity 
export default function ProductQuantity() {
    const [addProduct,setAddProduct]=useState(1)
    
    const handleDecrement=()=>{
      if(addProduct>1){
        setAddProduct(addProduct-1)
      }
    }
  
    const handleIncrement=()=>{
      setAddProduct(addProduct+1)
    } 
  
    return(
      <div className="mt-8 flex space-x-6 ">
        <h4 className="text-lg font-semibold pt-2">Quantity:</h4>    
        <p className="bg-gray-100 rounded-full text-4xl px-3 cursor-pointer font-extralight" onClick={handleDecrement}> - </p>
        <p className="pt-2">{addProduct}</p>
        <p className="bg-gray-100 rounded-full text-4xl px-2 cursor-pointer font-extralight"onClick={handleIncrement}>+</p>
      </div>
    )
  
  }
  