import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "product",
  title: "Product",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "The name of the product",
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: "slug",
        type: "slug",
        title: "Slug",
        description: "Used to generate the product URL",
        options: {
          source: "title",
          maxLength: 96,
        },
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: "description",
        type: "text", // Use `text` for longer descriptions
        title: "Description",
        description: "A detailed description of the product",
      }),
      defineField({
        name: "image",
        type: "image",
        title: "Image",
        description: "Upload the product image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "category",
        title: "Category",
        type: "array",
        description: "Assign categories to the product",
        of: [{ type: "reference", to: [{ type: "category" }] }],
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: "price",
        title: "Price",
        type: "number",
        description: "The selling price of the product",
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: "rowprice",
        title: "Row Price",
        type: "number",
        description: "The original price before discount",
      }),
        defineField({
            name: "rating",
            title: "Rating",
            type: "number",
            description: "Rating must be equal or below 5",
            validation: (rule) => rule.min(0).max(5),
        }),
        defineField({
            name: "isNew",
            title: "New Arrival",
            type: "boolean",
          }),
          defineField({
            name: "position",
            title: "Position",
            type: "string",
          }),
          defineField({
            name: "brand",
            title: "Brand",
            type: "string",
          }),
          defineField({
            name: "quantity",
            title: "Quantity",
            type: "number",
          }),
        ],
        preview: {
            select: {
                title: "title",
                media: "image",
                position: "position",
            },
        },
});

