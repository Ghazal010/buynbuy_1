import React from 'react'
import {getBannersData} from '@/lib/getData';
import Container from './Container';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import FormatedPrice from './FormatedPrice';


const Banner = async () => {
  const bannersData = await getBannersData();
  const SingleBanner = bannersData[0]  //banner
  return (
    <Container className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:max-h-[600px]'>
      <div className='md:col-span-2 bg-bglight relative flex items-end justify-end rounded-lg 
      overflow-hidden group:'>
        <div className='h-full z-10 absolute left-10 top-0 flex flex-col justify-center gap-5 
        isolate md:gap-10'>
          <div className='flex flex-col gap-1 md:gap-3 '>
            <button className='bg-lightGreen text-white w-20 py-1 rounded-full text-sm 
            font-semibold hover:bg-green-600 hoverEffect'>
              Sale {SingleBanner.price}
            </button>
            <p className='text-2xl md:text-3xl font-semibold'>{SingleBanner.title}</p>
            <h2 className='text-2xl md:text-xl font-bold text-gray-600'>{SingleBanner.subTitle}</h2>
            <p className='text-xs md:text-sm text-black/60 font-medium max-w-56'>{SingleBanner.description}</p>
          </div>
          <Button className='w-36 py-2.5 text-sm'>Shop Now</Button>
        </div>
        {/* <Image src={urlFor(SingleBanner.image).url()} alt={SingleBanner.title} 
        width={500} height={500}
        className='object-contain h-72 md:h-full max-h-[600px] self-end 
        group-hover:scale-105 hoverEffect'/> */}

<div className="group relative overflow-hidden">
  <Image 
    src={urlFor(SingleBanner.image).url()} 
    alt={SingleBanner.title} 
    width={500} 
    priority
    height={500}
    className="object-contain h-72 md:h-full max-h-[600px] self-end 
    transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
</div>
      
      </div>
      <div className='flex flex-col space-y-5 md:space-y-10 h-auto md:max-h-[600px]'>
        {bannersData.slice(1,3).map((item: any) => (
          <div key={item._id} className='h-full md:h-1/2 rounded-lg overflow-hidden group flex justify-center items-center p-5'>
            <div className='w-1/2 flex flex-col'>
              <div>
                <p className='text-xl font-semibold'>{item.title}</p>
                <p className='text-sm font-bold text-gray-600'>{item.subTitle}</p>
              </div>
              <p className='mt-3 font-bold text-orange-300'>From <FormatedPrice amount={item.price} className='text-lightRed font-bold'/></p>
              <Link href={'/shop'} className='mt-5 font-bold underline underline-offset-2 decoration-[1px] hover:text-yellow-400 hoverEffect'>Shop Now</Link>
            </div>
            <Image src={urlFor(item.image).url()} alt={item.title} width={500} priority height={500}
            className='objcet-contain h-72 md:h-60 w-1/2 group-hover:scale-105 hoverEffect'/>
          </div>
        ))}

      </div>
    </Container>
  )
}

export default Banner