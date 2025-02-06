import React from 'react'
import { FaHeadset, FaShieldAlt, FaTruck } from 'react-icons/fa'
import { FaClockRotateLeft } from 'react-icons/fa6'

const data=[
    {
        title: 'Free Shipping',
        subtitle: 'On all orders over $100',
        icon: <FaTruck />
    },
    {
        title: '90 Days Return',
        subtitle: 'Not satisfied?',
        icon: <FaClockRotateLeft />
    },
    {
        title: 'Secure Payment',
        subtitle: '100% Secure',
        icon: <FaShieldAlt />
    },
    {
        title: '24/7 Support',
        subtitle: 'Customer Support',
        icon: <FaHeadset />
    }
]

const Facilities = () => {
  return (
    <div className='py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
      {data.map((item)=>(
        <div key={item.title} className='flex flex-col sm:flex-row items-center justify-center gap-3'>
            <div className='text-3xl text-lightOrange'>{item.icon}</div>
            <div className='text-center sm:text-left'>
            <p className='uppercase font-bold'>{item.title}</p>
            <p className='text-sm text-lightText'>{item.subtitle}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Facilities
