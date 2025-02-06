import Image from 'next/image'
import React from 'react'
import { productsData } from '../../type'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { MdStar } from 'react-icons/md'
import FormatedPrice from './FormatedPrice'
import AddToCartButton from './AddToCartButton'

interface Product {
  slug: { current: string };
  image: any;
  _type: string;
  rating: number;
  brand: string;
  title: string;
  rowprice: number;
  price: number;
  description: string;
}

const ProductCard = ({ item }: { item: productsData }) => {
  return (
    <div className="border border-light/40 rounded-md relative group overflow-hidden">
      <div className="overflow-hidden">
        <Link href={`/product/${item.slug.current}`}>
          <Image
            src={urlFor(item?.image).url()}
            alt={item._type}
            width={500}
            loading='lazy'
            height={500}
            className="object-contain w-full h-72 group-hover:scale-105 hoverEffect"
          />
        </Link>
        
      </div>
      <div className="flex flex-col gap-2 px-6 items-center mt-7">
        {/* Ratings */}
        <div className="text-base text-lightText flex items-center">
          {Array.from({ length: 5 }).map((_, index) => {
            const filled = index + 1 <= Math.floor(item.rating);
            const halfFilled =
              index + 1 > Math.ceil(item.rating) && index < 
              Math.ceil(item.rating) ;

            return (
              <MdStar
              className={`${
                filled ? "text-[#fa8900]" : halfFilled ? "text-yellow-500" : "text-lightText"
              }`}
                key={index}
              />
            );
          })}
        </div>


        {/* Brand */}
        <p className="text-sm text-lightText">{item.brand}</p>

        {/* Title */}
        <h2 className="text-orange-400 font-bold text-lg line-clamp-1">{item.title}</h2>

        {/* Description */}
        <p className="text-sm text-lightText line-clamp-2 text-center">{item.description}</p>
        <div className='flex items-center gap-3 mb-5'>
            {/* <FormatedPrice amount={item?.rowprice} className="text-lightText line-through" /> */}
            <FormatedPrice amount={item?.price} className="text-orange-500 font-bold" />
        </div>
      </div>
      <AddToCartButton item={item} />
    </div>
  );
};

export default ProductCard;


// const ProductCard = ({ item }: { item: productsData }) => {
//   return (
//     <div className="border border-light/40 rounded-md relative group overflow-hidden">
//       <div className="overflow-hidden">
//         <Link href={`/product/${item.slug.current}`}>
//           <Image
//             src={urlFor(item?.image).url()}
//             alt={item._type}
//             width={500}
//             height={500}
//             className="object-contain w-full h-72 group-hover:scale-105 hoverEffect"
//           />
//         </Link>
//       </div>
//       <div className="flex flex-col gap-2 px-6 items-center">
//         <div className="text-base text-lightText flex items-center gap-1">
//           {Array.from({ length: 5 }).map((_, index) => {
//             const rating = item.ratings || 0; // Fallback to 0 if ratings is undefined
//             const filled = index < Math.floor(rating); // Fully filled stars
//             const halfFilled = index === Math.floor(rating) && rating % 1 !== 0; // Half-filled star

//             return halfFilled ? (
//               <MdStarHalf key={index} className="text-yellow-300" />
//             ) : (
//               <MdStar
//                 key={index}
//                 className={filled ? 'text-orange-400' : 'text-lightText'}
//               />
//             );
//           })}
//         </div>
//         <p className='text-sm text-lightText'>{item.brand}</p>
//         <h2 className=' text-orange-400 text-bols text-lg '>{item.title}</h2>
//         <p className='text-sm text-lightText'>{item.description}</p>
//       </div>
//     </div>
//   );
// };



