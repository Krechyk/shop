import React from 'react';
import buyImg from '../../assets/images/buy_img.png';
import '../../App.css';

const BuySection = () => {
  return (
    <div className='flex items-center relative'>
        <div className='flex flex-col gap-y-8 relative left-16'>
            <div className='text-5xl font-semibold'>
                <p className='text-zinc-900'>Best Place to Buy</p> 
                <p className='text-teal-700'>Everything.</p>
            </div>
            <div className='text-sm text-gray-600 font-normal'>
                At Shopify, you can shop for all your favorite beauty brands, clothes,household products and more at a single place.
            </div>
            <div className='my-button'>Shoping Now</div>
        </div>
        <img className='w-3/5' src={buyImg} alt="" />
    </div>
  )
}

export default BuySection