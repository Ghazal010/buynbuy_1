import Link from 'next/link';
import React from 'react'
import { MdShoppingCart, MdSwitchAccount } from 'react-icons/md';
import SideBarCart from './SideBarCart';
import { auth } from '@/auth';
import Image from 'next/image';
const SideBar = async () => {
  const session = await auth();
 

  return <div className='fixed top-60 right-2 z-20 flex flex-col gap-2'>
    {/** User Profile */}
    <Link 
    href={session?.user ? "/dashboard" : "/signin"} 
    className='bg-accentwhite w-16 h-[70px] rounded-md 
    flex flex-col gap-2 text-darkOrange justify-center items-center shadow-sm
     shadow-lightGreen group'>
    <div className="flex items-center justify-center overflow-hidden">
        {session?.user ? ( 
          <Image
            src={session.user.image as string}
            alt="userImage"
            width={20}
            height={20}
            className="rounded-full"
          />
        ) : ( 
          <MdSwitchAccount className="text-2xl" />
        )}
      </div>
    <p className='text-sm font-semibold'>Profile</p>
    </Link>
    {/** Cart */}
    <SideBarCart />

    </div>;
};

export default SideBar;