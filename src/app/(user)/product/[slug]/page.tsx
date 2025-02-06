// import Container from '@/components/Container'
// import { getBestSellersData } from '@/lib/getData'
// import { bestSellersQuery } from '@/lib/query'
// import { client } from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image'
// import { groq } from 'next-sanity'
// import React from 'react'
// import Image from 'next/image'

// interface productsData {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: {
//     asset: {
//       _id: string;
//       url: string;
//     }
//   };
//   slug: {
//     current: string;
//   };
// }

// interface Props {
//     params: {
//         slug: string
//     }
// }

// const SingleProductPage = async ({params} :Props) => {
//     const {slug} = await Promise.resolve(params);
//     const query = groq`*[_type == "product" && slug.current == $slug][0]{
//         _id,
//         name,
//         description,
//         price,
//         image {
//           asset->{
//             _id,
//             url
//           }
//         },
//         slug
//       }`;

//      const product:productsData = await client.fetch(query, {slug});
//      const bestSellersData = await getBestSellersData();

//   return (
//     <div>
//       <Container>
//     <div>
//     <div>
//     <Image 
//   src={urlFor(product?.image).url() || "/placeholder.png"} 
//   alt={product?.name || "Product Image"} 
//   width={500} 
//   height={500} 
// />
//     </div>

//     </div>
//     </div>
//       </Container>
//     </div>
//   )
// }

// export default SingleProductPage


import Container from '@/components/Container';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import React from 'react';
import { productsData } from '../../../../../type';
import { getBestSellersData } from '@/lib/getData';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import FormatedPrice from '@/components/FormatedPrice';
import { MdStar } from 'react-icons/md';
import AddToCartButton from '@/components/AddToCartButton';
import { PageProps } from 'next';

interface Props extends PageProps {
    params: {
        slug: string;
    };
}

const SingleProductPage = async ({ params }: Props) => {
    const { slug } = params;

    const query = groq`*[_type == "product" && slug.current == $slug][0]{
        ...
    }`;

    const product: productsData = await client.fetch(query, { slug });
    const bestSellersData: productsData[] = await getBestSellersData();

    return (
        <div className="flex flex-col min-h-screen">
            <Container className="flex-grow my-10 bg-beLight">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-6 h-full p-4">
                    <div className="xl:col-span-2 h-full">
                        <Image
                            src={urlFor(product?.image).url()}
                            alt={product.title}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-xl font-semibold">{product.title}</h2>
                            <div className="flex items-center gap-4">
                                <p className="line-through text-lg font-normal text-gray-500">
                                    <FormatedPrice amount={product.rowprice} className="text-lg font-bold" />
                                </p>
                                <FormatedPrice amount={product.price} className="text-lg font-bold" />
                                <p className="text-sm">
                                    You Saved{' '}
                                    <FormatedPrice
                                        amount={product?.rowprice - product.price}
                                        className="text-white px-2 rounded-md text-xs font-bold bg-lightGreen py-1"
                                    />{' '}
                                    From This Item
                                </p>
                            </div>
                            <div className="text-base text-lightText flex items-center">
                                {Array.from({ length: 5 }).map((_, index) => {
                                    const filled = index + 1 <= Math.floor(product.rating);
                                    const halfFilled =
                                        index + 1 > Math.ceil(product.rating) && index < Math.ceil(product.rating);
                                    return (
                                        <MdStar
                                            className={`${
                                                filled ? 'text-[#fa8900]' : halfFilled ? 'text-yellow-500' : 'text-lightText'
                                            }`}
                                            key={index}
                                        />
                                    );
                                })}
                                <p className="text-black text-sm font-semibold tracking-wide">{`(5 Customer Reviews)`}</p>
                            </div>
                            <p className="text-sm text-lightText tracking-wide">{product.description}</p>
                            <p className="text-sm text-lightText">Be the first to review this product</p>
                            <AddToCartButton item={product} className="rounded-md py-3" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                    {bestSellersData.map((item) => (
                        <ProductCard key={item._id} item={item} />
                    ))}
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default SingleProductPage;

export async function generateStaticParams() {
    const query = groq`*[_type == "product"]{
        slug
    }`;
    const products = await client.fetch(query);

    return products.map((product: any) => ({
        slug: product.slug.current,
    }));
}
