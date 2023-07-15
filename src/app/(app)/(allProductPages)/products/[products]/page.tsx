import ReplaceDashWithSpace from "@/functions/replacedash"
import { client } from "@/lib/sanityClient";
import { IProductDynamic } from "@/types/types";
import Image from "next/image";
import { urlForImage } from "../../../../../../sanity/lib/image";

const getProductDataFromSanity = async (name:string): Promise<IProductDynamic[]> => {
  try {
    const res = await client.fetch<IProductDynamic[]>(`*[_type=="product" && name=="${name}"]
    {_id,
      name,
      producttype,
      price, 
      size,
      productdetail,
      productcare,
      image,
      
      }
    `);
    return res;
  } catch (error) {
    return []
    
  }

};

export default async function Product({ params }: {
    params: { products: string },
  })  {
    
    const ProductName=ReplaceDashWithSpace(params.products)
    const data = await getProductDataFromSanity(ProductName)
    
return (
  <>
  <div className='flex flex-col pb-14 md:pb-20 xl:grid-cols-4 w-full gap-x-8 gap-y-16'>
    {
      data.length!==0?data.map((item) => (
          <>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className="grid grid-cols-6  space-x-4">
                  <div className="col-span-1 flex flex-col space-y-2">
                    {item.image.map((image,index)=>(
                      <Image key={index} src={urlForImage(image).width(200).url()} alt='product' width={300} height={300} className='w-full h-auto' />

                    ))}
                  </div>
                  <div className="col-span-5 ">
                    <Image src={urlForImage(item.image[0]).width(200).url()} alt='product' width={300} height={300} className='w-full h-auto' />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div>
                    <h1 key={item.id} className='font-normal text-3xl'>{item.name}</h1>
                    <h2 key={item.id} className="text-xl font-bold text-gray-400">{item.producttype}</h2>
                  </div>
                  <div>
                    <h5 className="text-sm font-extrabold text-gray-700 pt-8 pb-2">SELECT SIZE</h5>
                    <div className="flex space-x-4 md:space-x-8 ">
                      {item.size.map((item,index)=>(
                        <p key={index} className=" p-2 w-full md:w-fit text-gray-500 font-bold">{item}</p>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex space-x-6 ">
                    <h4 className="text-lg font-semibold pt-2">Quantity:</h4>    
                    <p className="bg-gray-100 rounded-full text-4xl px-3  font-extralight"> - </p>
                    <p className="pt-2">1</p>
                    <p className="bg-gray-100 rounded-full text-4xl px-2 font-extralight">+</p>
                  </div>
                  <div className="mt-8 flex justify-evenly md:justify-start md:space-x-4">
                    <button>add to cart</button>
                    <h4 key={item.id} className='font-bold text-2xl'>${item.price}.00</h4>
                  </div>
                </div> 
              </div>
              <div>
              
              <div className="mt-24 mb-16">
                <h2 className="border-b-2 border-gray-300 text-3xl font-semibold pb-4">Product Information</h2>
                
                <div className="flex flex-col ">
                  
                  <div className="flex flex-col md:flex-row md:space-x-8">
                    <h3 className=" text-gray-500 text-xl font-semibold pt-4 md:w-96  ">PRODUCT DETAILS</h3>
                    <p key={item.id} className='font-light text-justify md:text-left  md:w-fit tracking-wide text-lg pt-4 '>{item.productdetail}</p>
                  </div>

                  <div className="flex flex-col md:flex-row md:space-x-8">
                    <h3 className=" text-gray-500 text-lg  font-semibold pt-8 md:w-64 lg:w-72">PRODUCT CARE</h3>
                    <div> 
                      {item.productcare.map((item,index)=>(
                        <li key={index} className='font-bold text-gray-700 text-sm pt-4 '>{item}</li>
                      ))}
                    </div>
                  </div>

                </div> 
              
              </div>

            </div>
          </>
        )):<div className=' hidden '></div>
            
        
    }
  </div>
  {
    data.length===0?<div className='flex w-full  h-full m-36 pb-24 align-middle justify-center '>
      <h1 className='text-3xl md:text-4xl lg:text-5xl'>No Item Found</h1>
    </div>:<div className='hidden'></div>
    
  }   
</>
  )
}
