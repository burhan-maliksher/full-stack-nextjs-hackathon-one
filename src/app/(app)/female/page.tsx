import { client } from '@/lib/sanityClient'
// "use client"
// import { client } from '@/lib/sanityclient';
// import React, { useEffect, useState } from 'react';

type IProduct = {
  id: string;
  name: string;
  producttype:string;
  price:number
  // image: object;
};

const getProductData = async (): Promise<IProduct[]> => {
  const res = await client.fetch<IProduct[]>('*[_type=="product"]{_id,name,producttype,price}');
  return res;
};

export default async function Female() {
  // const [products, setProducts] = useState<IProduct[]>([]);

  // useEffect(() => {
    // const fetchData = async () => {
      // try {
        const data = await getProductData();
        // setProducts(data);
      // } catch (error) {
        // console.error(error);
      // }
    // };

    // fetchData();
  // }, []);

  return (
    <div>
      {data.map((item) => (
        <>
          <h1 key={item.id}>{item.name}</h1>
          <h2 key={item.id}>{item.producttype}</h2>
          <h2 key={item.id}>{item.price}</h2>
        </>
      ))}
    </div>
  );
}
// import { client } from '@/lib/sanityClient'
// import React from 'react'

// export const getProductData=async()=>{
//   const res =await client.fetch("*[_type=='product']{name,price}")
//   return res
// }

// type IProduct={
//   // _id:string,
//   name:string,
//   // type:string,
//   price:number,
//   // image:object
// }

// export default async function Female() {
//   const data:IProduct[] =await getProductData()
//   console.log(data);
  
//   {
//     data.map((item)=>{
//       <h1>{item.name}</h1>
//     })
//    }
//   return (
//     <div>
//       {data.map}
//     </div>
//   )
// }
