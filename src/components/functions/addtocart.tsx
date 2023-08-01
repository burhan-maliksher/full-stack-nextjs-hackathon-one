import Link from 'next/link'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import ProductQuantity from './productquantity';
import { IProductDynamic } from "@/types/types";


export default function AddtoCart(props:{value: IProductDynamic}) {
    const item=props.value
    return (
    <>
    <ProductQuantity/>
                {/* add to card  */}
                <div className="mt-8 flex justify-around md:justify-start md:space-x-4">
                  <Link href={""} className="px-4 py-2 font-bold flex  bg-black text-white">
                    <FiShoppingCart className='pr-2 w-8 h-8'/>
                    <p className="pt-1">Add to Cart</p>
                  </Link>
                  <h4 key={item.id} className='font-bold pt-2 text-2xl'>${item.price}.00</h4>
                </div>  
    </>
  )
}
