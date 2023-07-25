"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { client } from '@/lib/sanityClient'
import Image from 'next/image';
import { IProduct } from '@/types/types';
import Link from 'next/link';
import ReplaceSpaceWithDash from '@/components/functions/replacespace';
import { urlForImage } from "../../../sanity/lib/image";

const getProductDataFromSanity = async (): Promise<IProduct[]> => {
  try {
    const res = await client.fetch<IProduct[]>('*[_type=="product"]{_id,name,producttype,price,image[0]}');
    return res;
  } catch (error) {
    return []
    
  }

};

async function AllProducts() {
  const data = await getProductDataFromSanity()
  
  return (
    <>
    {
      data.length!==0?data.map((item) => (
          <>
            <div className='flex flex-col justify-center hover:scale-105 transition delay-75'>
              <Link href={`/products/${ReplaceSpaceWithDash(item.name)}`} >                      
                <Image key={item.id} src={urlForImage(item.image).width(200).url()} alt='product' width={300} height={300} className='w-full h-auto' />
              </Link>
              <h1 key={item.id} className='font-bold'>{item.name}</h1>
              <h2 key={item.id}>{item.producttype}</h2>
              <h2 key={item.id} className='font-bold text-lg'>${item.price}</h2>
            </div>
          </>
        )):<div className=' hidden '></div>
            
        
    }
  {
    data.length===0?<div className='flex w-full  h-full m-36 pb-24 align-middle justify-center '>
      <h1 className='text-3xl md:text-4xl lg:text-5xl'>No Item Found</h1>
    </div>:<div className='hidden'></div>
    
  }   
</>         
  )
}


export default  function SimpleSlider() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2, 
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };
      
      return (
        <Slider {...settings} >
            {/* <AllProducts/> */}
        </Slider>
      );
}


