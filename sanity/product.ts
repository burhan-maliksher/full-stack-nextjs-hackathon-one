export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "discription",
      type: "string",
      title: "Description",
    },
    {
      name: "size",
      title: "size",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "quantity",
      type: "number",
      title: "Quanity",
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
