"use client"
<<<<<<< HEAD

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, {useEffect, useState } from "react";
>>>>>>> reactslicktest_clone
import { client } from '@/lib/sanityClient'
import Image from 'next/image';
import { IProduct } from '@/types/types';
import Link from 'next/link';
import ReplaceSpaceWithDash from '@/components/functions/replacespace';
import { urlForImage } from "../../../sanity/lib/image";
// import getProductDataFromSanity from "../functions/fetchsanityproductlist";

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

export default   function SimpleSlider():JSX.Element {
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

=======
import 'react-slideshow-image/dist/styles.css'
import React from 'react'
import { Slide } from 'react-slideshow-image'
import { IProduct } from '@/types/types';
import { client } from '@/lib/sanityClient';
import Link from 'next/link';
import ReplaceSpaceWithDash from '../functions/replacespace';
import Image from 'next/image';
import { urlForImage } from '../../../sanity/lib/image';

const getProductDataFromSanity = async (): Promise<IProduct[]> => {
    try {
      const res = await client.fetch<IProduct[]>('*[_type=="product"]{_id,name,producttype,price,image[0]}');
      return res;
    } catch (error) {
      return []
      
    }
  
  };
  
  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: '',
    alignItems: 'center',
    justifyContent: '',
    backgroundSize: '',
    height: '400px'
  }

//   const getImagedata=async ()=>{
//     const data = await getProductDataFromSanity()

//     return(
//         <div>
//                  {/* <Slide> */}
//                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  pb-14 md:pb-20 xl:grid-cols-4 w-full gap-x-8 gap-y-16'>
//                    {
//                     data.length!==0?data.map((item) => (
//                         <>
//                           <Slide>
//                           <div className='flex flex-col justify-center'>
//                             <Link href={`/products/${ReplaceSpaceWithDash(item.name)}`} >                      
//                               <Image src={urlForImage(item.image).width(200).url()} alt='product' width={300} height={300} className='w-full h-auto' />
//                             </Link>
//                             <h1 key={item.id} className='font-bold'>{item.name}</h1>
//                             <h2 key={item.id}>{item.producttype}</h2>
//                             <h2 key={item.id} className='font-bold text-lg'>${item.price}</h2>
//                           </div>
//                           </Slide>
//                         </>
//                       )):<div className=' hidden '></div>
                          
                      
//                   }
//                 </div>
//                 {
//                   data.length===0?<div className='flex w-full  h-full m-36 pb-24 align-middle justify-center '>
//                     <h1 className='text-3xl md:text-4xl lg:text-5xl'>No Item Found</h1>
//                   </div>:<div className='hidden'></div>
                  
//                 }   
        
//                 {/* </Slide> */}
//             </div>
//     )
//   }
  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 3'
    },
  ];
  
  const ProductSlide = () => {
      return (
        <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                  <span style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      )
  }

export default ProductSlide
//   export default async function ProductSlide() {
//     const data = await getProductDataFromSanity()

//     return (
//     <div>
//         {/* <Slide> */}
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  pb-14 md:pb-20 xl:grid-cols-4 w-full gap-x-8 gap-y-16'>
//           {
//             data.length!==0?data.map((item) => (
//                 <>
//                   <Slide>
//                   <div className='flex flex-col justify-center'>
//                     <Link href={`/products/${ReplaceSpaceWithDash(item.name)}`} >                      
//                       <Image src={urlForImage(item.image).width(200).url()} alt='product' width={300} height={300} className='w-full h-auto' />
//                     </Link>
//                     <h1 key={item.id} className='font-bold'>{item.name}</h1>
//                     <h2 key={item.id}>{item.producttype}</h2>
//                     <h2 key={item.id} className='font-bold text-lg'>${item.price}</h2>
//                   </div>
//                   </Slide>
//                 </>
//               )):<div className=' hidden '></div>
                  
              
//           }
//         </div>
//         {
//           data.length===0?<div className='flex w-full  h-full m-36 pb-24 align-middle justify-center '>
//             <h1 className='text-3xl md:text-4xl lg:text-5xl'>No Item Found</h1>
//           </div>:<div className='hidden'></div>
          
//         }   

//         {/* </Slide> */}
//     </div>
//   )
// }
>>>>>>> reactslideshowtest
