"use client"
import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import ProductQuantity from './productquantity';
import { IProductDynamic } from "@/types/types";
// import { log } from 'console';
import toast, { Toaster } from 'react-hot-toast';
import {LiaCheckCircle} from "react-icons/lia"
import {GiCancel} from "react-icons/gi"
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "@/types/hooks";
import { cartActions } from '@/store/slice/cartSlice';


export default function AddtoCart(props:{value: IProductDynamic}) {
  const totalQuantity = useSelector((state:RootState)=>state.cart.totalQuantity)   
console.log(totalQuantity);

  // const dispatch = useDispatch();
  // const addItem = () => {
  //   dispatch(cartActions.addToCart({ product: {}, quantity: 1 }));
  //   // toast.success("Product added");
  // };
  // const [pdQuantity,setPdQuantity]=useState<number>(1)
    const item=props.value
    // for passing id to redux state
    const itemID=props.value._id
    const itemPrice=props.value.price
    // console.log(item._id);
    
    // const notify = () => toast(`${item.name} added to the cart`);
    // const notify = () => toast(' added to the cart');
    
    const handleAddtoCart=async()=>{
      // console.log("hi");
      
      try{

        const res =await fetch("/api/cart",{
          // cache:'no-store',
          method:"POST",
          body: JSON.stringify({
            product_id:item._id,
            // quantity: pdQuantity,         
            quantity: totalQuantity,         
          })
        })
        const result=await res.json()
        // console.log(result);
        
        // const notify = () =>toast(`${pdQuantity} ${item.name} added to the cart`,{icon:<LiaCheckCircle className=' text-green-600 w-8 h-8'/>}) ;
        const notify = () =>toast(`${totalQuantity} ${item.name} added to the cart`,{icon:<LiaCheckCircle className=' text-green-600 w-8 h-8'/>}) ;
        notify()
        // notify
        // const notify = () => toast('${item.name} added to the cart') ;
        // const notify = () => "hi" ;
        // console.log(notify);
      // console.log("hi");
      
      // console.log(result);
    }catch(error){
      // console.log(error,{message:"something went wrong"});
      const notify = () =>toast(`Something went wrong: Fialed to add to the cart`,{icon:<GiCancel className=' text-red-600 w-8 h-8'/>}) ;
      notify()
    }

    }
    
    // callback for getting value from child to parent
    // const onClickHandleQuantity=(value:number)=>{
    //   setPdQuantity(value)
    //   // console.log(value);
      
    // }

    return (
    <>
      {/* <ProductQuantity onQuantityChange={onClickHandleQuantity}/> */}
      <div className="mt-8 flex space-x-6 ">
        <h4 className="text-lg font-semibold pt-2">Quantity:</h4>    
      <ProductQuantity productID={itemID} productPrice={itemPrice}/>
      </div>
      {/* add to card  */}
      <div className="mt-8 flex justify-around md:justify-start md:space-x-4">
        <button className="px-4 py-2 font-bold flex bg-black text-white" onClick={handleAddtoCart}>
          <FiShoppingCart className='pr-2 w-8 h-8'/>
          <Toaster/>
          <span className="pt-1">Add to Cart</span>
        </button>
        {/* <button onClick={notify} className='bg-red-600'>hikasdklmjk</button> */}
        <h4 key={item._id} className='font-bold pt-2 text-2xl'>${item.price}.00</h4>
      </div>  
    </>
  )
}
