import { Image } from "sanity";

export type IProduct = {
  id: string;
  name: string;
  producttype: string;
  price: number;
  image: Image;
};

export type IProductDynamic = {
  _id: string;
  name: string;
  producttype: string;
  size: [string];
  productdetail: string;
  productcare: [string];
  price: number;
  image: [Image];
};
