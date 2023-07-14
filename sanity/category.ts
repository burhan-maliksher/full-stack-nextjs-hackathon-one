import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    defineField({
      name: "categoryname",
      title: "Category Name",
      type: "string",
    }),
  ],
});
