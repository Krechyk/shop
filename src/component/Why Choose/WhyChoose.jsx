import React from 'react';
import {CiDeliveryTruck} from 'react-icons/ci';
import {FaHandshake} from 'react-icons/fa'
import {Ri24HoursFill} from 'react-icons/ri'

const WhyChoose = () => {
  return (
    <div className='flex flex-col items-center justify-center pb-16'>
        <p className='whychoose-title'>Why Choose Shopify?</p>
        <div className='flex justify-around w-3/5 gap-x-16'>
            <div className='flex flex-col items-center'>
                <CiDeliveryTruck size={64} fill="#0f766e" />
                <p className='whychopse-titles'>Free Delivery</p>
                <p className='whychoose-text'>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor</p>
            </div>
            <div className='flex flex-col items-center'>
                <Ri24HoursFill size={64} fill="#0f766e" />
                <p className='whychopse-titles'>Trusted Platform</p>
                <p className='whychoose-text'>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor</p>
            </div>
            <div className='flex flex-col items-center'>
                <FaHandshake size={64} fill="#0f766e"/>
                <p className='whychopse-titles'>Here For You</p>
                <p className='whychoose-text'>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor</p>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose