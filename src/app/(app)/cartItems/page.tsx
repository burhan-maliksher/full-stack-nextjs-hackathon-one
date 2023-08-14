// "use client"
import ProductAllImage from '@/components/functions/productallimage';
import { client } from '@/lib/sanityClient';
import { IProductCart, IProductDynamic } from '@/types/types';
import { cookies } from 'next/headers';
import React from 'react'
import Image from 'next/image';
import { urlForImage } from '../../../../sanity/lib/image';
import Link from 'next/link';
import {RiDeleteBin5Line} from "react-icons/ri"
// fetching product data from sanity
const getProductDataFromSanity = async (productList:string[]):Promise<IProductCart[] > => {
  try {
    // console.log(productList);
    
    const r = await client.fetch<IProductCart[]>(`*[_type=="product" && _id in $productList]
    {_id,
      name,
      producttype,
      price, 
      image[0],   
      }
    `,{productList});
    
    // console.log(r[0]);
    
    return r;
  } catch (error) {
    return []
    
  }

};


export default async function CartItems() {
  // 
  const uid = cookies().get("user_id")?.value
  // console.log(uid);
  let data: IProductCart[]=[]
  if(uid){
    const req =await fetch(`http://localhost:3000/api/cart?user_id=${uid}`)
    
    const result= await req.json()
    // console.log(result.res[0].product_id);
   
    // list of products in cart
    const productList=await result.res.map((item: { product_id: string; })=>(item.product_id))
  
      // console.log(productList);      

    data = await getProductDataFromSanity(productList)
    // console.log(data[0]);
    
  }
  return (
    <>
    <div className='flex flex-col pb-14 md:pb-20 xl:grid-cols-4 w-full gap-x-8 gap-y-16'>
    <h2 className='font-bold text-2xl text-center md:text-left md:text-4xl mt-10 '>Shopping Cart</h2>
    <div className='flex flex-col lg:flex-row md:space-y-8 lg:justify-around'>
      <div className='flex flex-col  md:space-y-8'>
        {
          // 
          data.length!==0 ? data.map((item) => (          
              <>
                <div className='flex flex-col items-center lg:items-start '>
                {/* <div className='grid grid-cols-1'> */}
                {/* displaying all images of a product */}
                  <div className="flex flex-col md:flex-row  justify-center md:justify-around lg:justify-start md:w-full lg:space-x-8 ">
                    <Image src={urlForImage(item.image).width(100).url()} alt='product' width={100} height={100} className='w-64   h-auto border rounded-xl' />

                    <div className="flex flex-col justify-center md:justify-start md:space-y-4 mt-4">
                      <div className='flex'>
                        <h1 key={item._id} className='font-light text-2xl justify-start'>{item.name}</h1>
                        <RiDeleteBin5Line className='justify-end w-10'/>
                      </div>
                      <h2 key={item._id} className="text-xl font-bold text-gray-400">{item.producttype}</h2>
                      <h2 key={item._id} className="text-xl font-medium text-gray-700">Delivery Estimation</h2>
                      <h2 key={item._id} className="text-xl font-semibold text-yellow-400">5 Working Days</h2>
                      <div className='flex'>
                        <h2 key={item._id} className="text-xl font-bold text-gray-700 justify-start">${item.price}</h2>
                        <div className='justify-end'>- 1 +</div>
                      </div>
                    </div>
                  </div>

                </div> 
                
              </>
            )):<div className=' hidden '></div>    
        }
      </div> 

      {/* order summary */}
      <div className='text-lg flex flex-col space-y-4 mt-12 lg:mt-0'>
        <h3 className='text-2xl font-bold'>Order Summary</h3>
        <div className='flex flex-row space-x-2 '>
          <div className='justify-start'>Quantity</div>
          <div className='justify-end'>0 Products</div>
        </div>
        <div className='flex space-x-2  '>
          <div className=' justify-start'>Sub Total</div>
          <div className=' justify-end'>$0</div>
        </div>
        <Link href={"/allProducts"} className="bg-slate-800 w-full h-auto text-xl font-bold p-4 text-white flex justify-center space-x-4">
            Process to Checkout
        </Link>
      </div>
    </div>
    </div>
    {
      data.length===0?<div className='flex w-full  h-full m-36 pb-24 align-middle justify-center '>
        <h1 className='text-3xl md:text-4xl lg:text-5xl'>No Item Found</h1>
      </div>:<div className='hidden'></div>
      
    }   
  </>
    )
}
