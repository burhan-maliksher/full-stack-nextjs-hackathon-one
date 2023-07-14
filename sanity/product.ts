import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
    defineField({
      name: "producttype",
      type: "string",
      title: "Product Type",
    }),
    defineField({
      name: "productdetail",
      type: "string",
      title: "Product Detail",
    }),
    defineField({
      name: "productcare",
      title: "Product Care",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "size",
      title: "size",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "quantity",
      type: "number",
      title: "Quanity",
    }),
    defineField({
      name: "price",
      type: "number",
      title: "Price",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "productcategory",
      title: "Product Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
  ],
});
