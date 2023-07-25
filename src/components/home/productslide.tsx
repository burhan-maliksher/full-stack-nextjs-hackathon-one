"use client"
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
