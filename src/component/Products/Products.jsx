import React from 'react'
import Product from '../Product/Product'

const Products = () => {
  return (
    <div className='flex flex-col items-center justify-center pb-40'>
        <p className='products-title'>Populer Products From All Brands</p>
        <div className='flex gap-x-8'>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
  )
}

export default Products