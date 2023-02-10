import React from 'react';
import nikeImg from '../../assets/images/Nike.png';

const Product = () => {
  return (
    <div className='flex flex-col items-center pt-12 h-96'>
        <img src={nikeImg} alt="" className='w-48 h-54' />
        <p className='product-name'>Nike Air Force</p>
        <p className='product-price'>Rp $1.999</p>
    </div>
  )
}

export default Product