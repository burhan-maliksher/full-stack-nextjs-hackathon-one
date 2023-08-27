import { Image } from "sanity";

export type IProduct = {
  _id: string;
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

export type IProductCart = {
  _id: string;
  name: string;
  producttype: string;
  price: number;
  image: Image;
};

export type CartItem = {
  productId: string;
  productPrice: number;
  productquantity: number;
};
