import Container from '@/components/Container'
import ProductList from '@/components/ProductList'
import React from 'react'

const ShopPage = () => {
  return ( 
    <Container className='py-5'>
    <h2 className='text-3xl font-bold text-center mb-5'>All Available Product List</h2>
    <ProductList/>
    </Container>
  )
}

export default ShopPage