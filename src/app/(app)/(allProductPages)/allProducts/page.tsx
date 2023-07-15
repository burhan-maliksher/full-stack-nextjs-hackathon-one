import { client } from '@/lib/sanityClient'
import Image from 'next/image';
import { urlForImage } from '../../../../../sanity/lib/image';
import { IProduct } from '@/types/types';
import Link from 'next/link';
import ReplaceSpaceWithDash from '@/functions/replacespace';

const getProductDataFromSanity = async (): Promise<IProduct[]> => {
  try {
    const res = await client.fetch<IProduct[]>('*[_type=="product"]{_id,name,producttype,price,image[0]}');
    return res;
  } catch (error) {
    return []
    
  }

};

export default async function AllProducts() {

  const data = await getProductDataFromSanity()
  
  return (
      <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  pb-14 md:pb-20 xl:grid-cols-4 w-full gap-x-8 gap-y-16'>
          {
            data.length!==0?data.map((item) => (
                <>
                  <div className='flex flex-col justify-center'>
                    <Link href={`/products/${ReplaceSpaceWithDash(item.name)}`} >                      
                      <Image src={urlForImage(item.image).width(200).url()} alt='product' width={300} height={300} className='w-full h-auto' />
                    </Link>
                    <h1 key={item.id} className='font-bold'>{item.name}</h1>
                    <h2 key={item.id}>{item.producttype}</h2>
                    <h2 key={item.id} className='font-bold text-lg'>${item.price}</h2>
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
      );
}
