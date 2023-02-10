import React from 'react'
import Gucci from '../../assets/images/Gucci.png';
import Adidas from '../../assets/images/Adidas.png';
import Balenciaga from '../../assets/images/Balenciaga.png';
import Bukalapak from '../../assets/images/Bukalapak.png';
import Tokopedia from '../../assets/images/Tokopedia.png';

const Brands = () => {
  return (
    <div className='flex flex-col gap-y-12 pt-5'>
        <div className='brands-text'>
            <p>We Collaborate With 250++ Leading</p> 
            <p>Top E Commerce and Brands</p>
        </div>
        <div className='flex gap-x-12 justify-center'>
            <img className='w-48 h-12' src={Gucci} alt="" />
            <img className='w-48 h-12' src={Adidas} alt="" />
            <img className='w-48 h-12' src={Balenciaga} alt="" />
            <img className='w-48 h-12' src={Bukalapak} alt="" />
            <img className='w-48 h-12' src={Tokopedia} alt="" />
        </div>

    </div>
  )
}

export default Brands