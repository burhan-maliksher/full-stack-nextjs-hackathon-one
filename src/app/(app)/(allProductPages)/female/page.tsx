// "use client"
import { client } from '@/lib/sanityClient'
import Image from 'next/image';
import { urlForImage } from '../../../../../sanity/lib/image';
import { Image as IImage } from 'sanity';

type IProduct = {
  id: string;
  name: string;
  producttype:string;
  price:number
  image: IImage;
};

const getProductData = async (): Promise<IProduct[]> => {
  const res = await client.fetch<IProduct[]>('*[_type=="product"]{_id,name,producttype,price,image[0]}');
  return res;
};

export default async function Female() {

  const data = await getProductData();
        
  return (

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  pb-14 md:pb-20 xl:grid-cols-4 w-full gap-x-8 gap-y-16'>
      {data.map((item) => (
        <>
          <div className='flex flex-col justify-center'>
            {/* <Image src={urlForImage(item.image).width(200).url()} alt='product' className='' /> */}
            <img src={urlForImage(item.image).width(250).url()} />
            <h1 key={item.id} className='font-bold'>{item.name}</h1>
            <h2 key={item.id}>{item.producttype}</h2>
            <h2 key={item.id} className='font-bold text-lg'>${item.price}</h2>
          </div>
        </>
      ))}
    </div>
  );
}
