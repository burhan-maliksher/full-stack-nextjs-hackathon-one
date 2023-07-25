"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
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

export default  function SimpleSlider():JSX.Element {
  // using state to convert a promise to a valid jsx element
  const [allproduct,setAllProduct]=useState<IProduct[]|null>(null)

  useEffect(()=>{
    async function AllProducts():Promise<void>{
    const data = await getProductDataFromSanity()
    setAllProduct(data)
    }

    AllProducts()

  },[])

  // for styling for react slick 
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
      
      return (<div className="mx-8">
        <Slider {...settings} className="flex ">
          {allproduct? allproduct.map((item)=>
              <div key={item.id} className='flex flex-col justify-center text-left hover:scale-105 transition delay-75 p-8 '>
                <Link href={`/products/${ReplaceSpaceWithDash(item.name)}`} >                      
                  <Image key={item.id} src={urlForImage(item.image).width(200).url()} alt='product' width={300} height={300} className='w-full h-auto ' />
                </Link>
                <h1 key={item.id} className='font-bold'>{item.name}</h1>
                <h2 key={item.id}>{item.producttype}</h2>
                <h2 key={item.id} className='font-bold text-lg'>${item.price}</h2>
              </div>
          
          ):<div className="flex justify-center align-middle text-2xl font-extrabold">Loading...</div>
        }
        </Slider>
        </div>
      );
}


