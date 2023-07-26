"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { CSSProperties, useEffect, useState } from "react";
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

function HideArrow(props: {  style: any; }) {
  const { style } = props;
  return (
    <div
      style={{ ...style}}
    />
  );
}

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
        // focusOnSelect: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:<HideArrow  style={"display:none"} />,
        prevArrow:<HideArrow  style={"display:none"} />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              dots: false,
              infinite: false,
              speed: 500,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2, 
              dots: false,
              infinite: false,
              speed: 500,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
              dots: false,
              infinite: false,
              speed: 500,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
              dots: false,
              infinite: false,
              speed: 500,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              dots: false,
              infinite: false,
              speed: 500,
              slidesToScroll: 1,
            }
          },

        ]
      };
      
      return (
      <>
        <Slider {...settings} >
          {allproduct? allproduct.map((item,index)=>
              <div key={index} className='flex flex-col  text-left hover:scale-105 transition delay-75 bg-gray-50 md:p-8'>
                <Link href={`/products/${ReplaceSpaceWithDash(item.name)}`} >                      
                  <Image key={index} src={urlForImage(item.image).width(200).url()} alt='product' width={100} height={100} className='w-full h-auto  ' />
                </Link>
                <h1 key={index} className='font-bold '>{item.name}</h1>
                <h2 key={index}>{item.producttype}</h2>
                <h2 key={index} className='font-bold text-lg'>${item.price}</h2>
              </div>  
            ):<div className="flex justify-center align-middle text-2xl font-extrabold">Loading...</div>
          }
        </Slider>
      </>
      );
}


