// import { Image as IImage } from "sanity";
import { Image } from "sanity";

export type IProduct = {
  id: string;
  name: string;
  producttype: string;
  price: number;
  image: Image;
};
