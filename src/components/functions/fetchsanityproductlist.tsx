import { client } from "@/lib/sanityClient";
import { IProduct } from "@/types/types";

const getProductDataFromSanity = async (): Promise<IProduct[]> => {
    try {
      const res = await client.fetch<IProduct[]>('*[_type=="product"]{_id,name,producttype,price,image[0]}');
      return res;
    } catch (error) {
      return []
      
    }
  
  };

  export default getProductDataFromSanity