'use client'
import Link from 'next/link'
import React from 'react'
import { RiShoppingBag2Fill } from 'react-icons/ri'
import { useSelector } from 'react-redux';
import { StoreState } from '../../type';

const SideBarCart = () => {
    const {cart} = useSelector((state : StoreState) => state.buynbuy);

    return <div className='fixed top-80 right-2 z-20 flex flex-col gap-2'>
    {/** Cart */}
    <Link href='/cart' className='bg-accentwhite w-16 h-[70px] rounded-md 
    flex flex-col gap-2 text-darkOrange justify-center items-center shadow-sm shadow-lightGreen group relative'>
    <div className='flex items-center justify-center overflow-hidden '>
    <RiShoppingBag2Fill className='text-2xl'/>
    {/* <RiShoppingBag2Fill className='text-2xl -translate-x-4 group-hover:translate-x-3 transition-transform duration-200'/> */}
    </div>
    <p className='text-sm font-semibold'>Buy Now</p>
    <p className='absolute top-1 right-3 text-xs font-semibold bg-darkOrange text-accentwhite w-4 h-4 rounded-full flex items-center justify-center'>
        {cart ? cart?.length : 0}
    </p>
    </Link>
    </div>;
};

export default SideBarCart
