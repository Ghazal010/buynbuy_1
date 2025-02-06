"use client"
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { IoSearchOutline } from "react-icons/io5";


const SearchInput = () => {
    const [search, setSearch] = useState('')
  return (
    <>
    <div className='w-full hidden md:inline-flex flex-1 h-12 relative'>
    <IoSearchOutline className='text-lg left-2.5 mt-3.5 text-lightOrange absolute'  />
        <input type='text' placeholder='Search Products....' className='flex-1 h-full outline-none bg-transparent placeholder-text-lightText border-[1px] border-accent/30 rounded-sm pl-8 pr-28' 
        onChange={(e) => setSearch(e.target.value)} value={search}/>
        {search && <IoMdClose onClick={() => setSearch('')} 
        className='text-accent/50 hover:text-lightRed cursor-pointer 
        absolute right-20 text-lightOrange top-4
        '/>}
        <button className='bg-darkOrange text-accent/50 hover:text-lightRed px-3.5 py-1.5 
        rounded-r-sm text-sm hover:bg-lightOrange hoverEffect cursor-pointer absolute 
        right-0 top-2 mr-1.5'>Search</button>
    </div>
    </>
  )
}

export default SearchInput
