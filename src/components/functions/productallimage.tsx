"use client"
import { useState } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import { Image as IImage } from "sanity";

// displays all images of a product 
const ProductAllImage: React.FC<{items: [IImage];}> = ({ items }) => {
  
    const [showImage,setShowImage]=useState(0)
  
    function handleClick(index:number){
      setShowImage(index);
    }
  
    return(
      <div className="grid grid-cols-6  space-x-4">
  
        <div className="col-span-1 flex flex-col space-y-2 cursor-pointer">
          { items.map((image,index)=>(
              <Image key={index} src={urlForImage(image).width(200).url()} alt='product' onMouseOver={() => handleClick(index)} width={300} height={300} className='w-full h-auto' />
          ))}
        </div>
  
        <div className="col-span-5 ">
          <Image src={urlForImage(items[showImage]).width(200).url()} alt='product' width={300} height={300} className='w-full h-auto' />
        </div>
    </div>
    )
  
  }
  
 export default ProductAllImage 