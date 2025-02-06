import { footerData } from '@/constants';
import Container from '@/components/Container';
import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-lightOrange py-5'>
      <Container className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {footerData.map((item) => (
          <div key={item._id}>
            <h3 className='text-white text-lg font-semibold
          mb-3'>{item.title}</h3>
            <div className='flex flex-col gap-4'>
              {item.listItem.map((list) => list.listData.map((data) => (
                <Link href='/' key={data} className='py-1 text-accent
                font-medium hover:text-yellow-100 hoverEffect duration-300'>
                {data}
                </Link>
              )))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default Footer
