"use client"

import { type } from "os"
import { useState } from "react"
// add or subtract product quantity 
interface callbackProp{
  onQuantityChange:(value:number)=>void
}
const ProductQuantity:React.FC<callbackProp>=({onQuantityChange})=>{
    const [addProduct,setAddProduct]=useState(1)
    
    const handleDecrement=()=>{
      if(addProduct>1){
        setAddProduct(addProduct-1)
        onQuantityChange(addProduct)
      }
    }
  
    const handleIncrement=()=>{
      setAddProduct(addProduct+1)
      onQuantityChange(addProduct)

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
  export default ProductQuantity