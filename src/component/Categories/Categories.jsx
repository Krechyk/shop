import React from 'react';
import fashionImg from '../../assets/images/Fashion.png';
import scincareImg from '../../assets/images/Scincare.png';
import electronicImg from '../../assets/images/Electronic.png';
import shoesImg from '../../assets/images/Shoes.png';

const Categories = () => {
  return (
    <div className='flex flex-col py-24'>
        <div className='flex flex-col items-center justify-center pb-4 gap-x-2'>
            <p className='categories-text'>Browse Categories of <br /> the Store</p>
        </div>
        <div className='flex gap-x-8 justify-center'>
            <div className='flex flex-col gap-y-8'>
                <img className='h-36 w-full' src={fashionImg} alt="" />
                <img className='h-36 w-full' src={scincareImg} alt="" />
            </div>
            <div className='flex gap-x-8'>
                <img className='h-80' src={shoesImg} alt="" />
                <img className='h-80' src={electronicImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Categories