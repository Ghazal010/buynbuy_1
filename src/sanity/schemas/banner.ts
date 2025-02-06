import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "banner",
  title: "Banner",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "subTitle",
      type: "string",
      title: "Sub Title",
    }),
    defineField({
      name: "price",
      type: "number",
      title: "Starting From",
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
      description: "Banner Image",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true, 
      },
    }),
  ],
  preview: {
    select: {
      imageUrl: "image.asset.url", 
      title: "title", 
    },
  },
});
