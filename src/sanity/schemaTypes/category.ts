import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "category",
  title: "Category",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),

    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true, 
      },
    }),
  ],
});
