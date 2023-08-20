"use client"

import { type } from "os"
import { ReactNode, useState } from "react"
// import { useAppSelector, useAppDispatch } from '@types/hooks';
import { counterActions } from "@/store/slice/counterSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "@/types/hooks";

// add or subtract product quantity 
interface callbackProp{
  onQuantityChange:(value:number)=>void
}

// const ProductQuantity:React.FC<callbackProp>=({onQuantityChange})=>{
const ProductQuantity=()=>{
  const dispatch =useDispatch();
  // const counterValue = useSelector((state:RootState)=>state.counterSlice.value) as React.ReactNode  
  const counterValue = useSelector((state:RootState)=>state.counterSlice.value)   

  const increment =()=>{
    dispatch(counterActions.increment())
  }

  const decrement =()=>{
    dispatch(counterActions.decrement())
  }

  // const [addProduct,setAddProduct]=useState(1)
    
  //   const handleDecrement=()=>{
  //     if(addProduct>1){
  //       setAddProduct(addProduct-1)
  //       onQuantityChange(addProduct)
  //     }
  //   }
  
  //   const handleIncrement=()=>{
  //     setAddProduct(addProduct+1)
  //     onQuantityChange(addProduct)

  //   } 
  
    return(
      <div className="mt-8 flex space-x-6 ">
        <h4 className="text-lg font-semibold pt-2">Quantity:</h4>    
        {/* <p className="bg-gray-100 rounded-full text-4xl px-3 cursor-pointer font-extralight" onClick={handleDecrement}> - </p>
        <p className="pt-2">{addProduct}</p>
        <p className="bg-gray-100 rounded-full text-4xl px-2 cursor-pointer font-extralight"onClick={handleIncrement}>+</p> */}
       <button className="bg-gray-100 rounded-full text-4xl px-3 cursor-pointer font-extralight" onClick={decrement}> - </button>
        <p className="pt-2">{counterValue}</p>
        <button className="bg-gray-100 rounded-full text-4xl px-2 cursor-pointer font-extralight"onClick={increment}>+</button>
      </div>
    )
  
  }
  export default ProductQuantity