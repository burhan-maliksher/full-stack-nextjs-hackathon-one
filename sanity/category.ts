import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    defineField({
      name: "name",
      title: "Category Name",
      type: "string",
    }),
  ],
});
