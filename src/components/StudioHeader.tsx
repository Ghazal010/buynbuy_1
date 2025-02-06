import Link from 'next/link'
import React from 'react'
import { IoReturnDownBack } from 'react-icons/io5'
import Logo from './logo'
//@ts-expect-error: component props are not strictly typed

const StudioHeader = (props) => {
  return (
    <div>
      <div className='p-5 flex items-center justify-between bg-accent text-gray-100'>
        <Link href={'/'} className='flex items-center gap-3 font-semibold hover:text-darkOrange hoverEffect'><IoReturnDownBack className='text-2xl'/>Go to Website</Link>
        <Logo className='text-white'/>
        <p className='hidden md:inline-flex text-sm'>Admin Studio for Buy N Buy Vibes Online Shop</p>
      </div>
      {props.renderDefault(props)}
    </div>
  )
}

export default StudioHeader
