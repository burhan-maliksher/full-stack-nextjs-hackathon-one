// "use client"
import ReplaceDashWithSpace from "@/components/functions/replacedash"
import { client } from "@/lib/sanityClient";
import { IProductDynamic } from "@/types/types";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import ProductAllImage from "@/components/functions/productallimage";
import ProductQuantity from "@/components/functions/productquantity";
import AddtoCart from "@/components/functions/addtocart";

// fetching product data from sanity
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

// displaying product data dynamically
export default async function Product({ params }: {
    params: { products: string },
  })  {
    
    const ProductName=ReplaceDashWithSpace(params.products)
    const data = await getProductDataFromSanity(ProductName)
    // console.log(data[0]._id);
    
    
return (
  <>
  <div className='flex flex-col pb-14 md:pb-20 xl:grid-cols-4 w-full gap-x-8 gap-y-16'>
    {
      // 
      data.length!==0?data.map((item) => (
        
        
          <>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
             {/* displaying all images of a product */}
              <ProductAllImage items={item.image}/>
              
              <div className="flex flex-col justify-center"> 
                <div>
                  <h1 key={item._id} className='font-normal text-3xl'>{item.name}</h1>
                  <h2 key={item._id} className="text-xl font-bold text-gray-400">{item.producttype}</h2>
                </div>
                <div>
                  <h5 className="text-sm font-extrabold text-gray-700 pt-8 pb-2">SELECT SIZE</h5>
                  <div className="flex space-x-4 md:space-x-8 ">
                    {item.size.map((item,index)=>(
                      <p key={index} className=" p-2 w-full md:w-fit text-gray-500 font-bold">{item}</p>
                    ))}
                  </div>
                </div>
                {/* add quantity of product */}
                <AddtoCart value={item}/>
                {/* <ProductQuantity/> */}
                {/* add to card  */}
                {/* <div className="mt-8 flex justify-around md:justify-start md:space-x-4">
                  <Link href={""} className="px-4 py-2 font-bold flex  bg-black text-white">
                    <FiShoppingCart className='pr-2 w-8 h-8'/>
                    <p className="pt-1">Add to Cart</p>
                  </Link>
                  <h4 key={item._id} className='font-bold pt-2 text-2xl'>${item.price}.00</h4>
                </div> */}
              </div> 
            </div>
            {/* displays product details  */}
            <div>  
              <div className="mt-24 mb-16">
                <h2 className="border-b-2 border-gray-300 text-3xl font-semibold pb-4">Product Information</h2>
                <div className="flex flex-col ">
                  <div className="flex flex-col md:flex-row md:space-x-8">
                    <h3 className=" text-gray-500 text-xl font-semibold pt-4 md:w-96  ">PRODUCT DETAILS</h3>
                    <p key={item._id} className='font-light text-justify md:text-left  md:w-fit tracking-w_ide text-lg pt-4 '>{item.productdetail}</p>
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
