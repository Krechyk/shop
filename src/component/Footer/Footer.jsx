import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col pb-20'>
        <div className='flex justify-around'>
            <div className='flex flex-col w-72'>
                <p className='products-title'>Shopify</p>
                <p className='footer-text'> Bachira is an online store dealing with all product Bachira provide cheap, high quality, products to customers</p>
            </div>
            <div className='flex flex-col gap-y-2'>
                <p className='footer-items'>For Beginner</p>
                <p className='footer-item'>About</p>
                <p className='footer-item'>Career</p>
                <p className='footer-item'>Promotion</p>
            </div>
            <div className='flex flex-col gap-y-2'>
                <p className='footer-items'>Overview</p>
                <p className='footer-item'>Product</p>
                <p className='footer-item'>Categories</p>
                <p className='footer-item'>Pricing</p>
            </div>
            <div className='flex flex-col gap-y-2'>
                <p className='footer-items'>Explore Us</p>
                <p className='footer-item'>Our Career</p>
                <p className='footer-item'>Privacy</p>
                <p className='footer-item'>Terms & Conditions</p>
            </div>
            <div className='flex flex-col gap-y-2'>
                <p className='footer-items'>Connect Us</p>
                <p className='footer-item'>support@bachira.com</p>
                <p className='footer-item'>021 - 555 -456</p>
                <p className='footer-item'>Sudirman, South Jakarta</p>
            </div>
        </div>
        <div className='footer-item flex justify-center pt-8'>
            Copyright 2023 • All Rights Reserved Bachira by Giatinaja
        </div>
    </div>
  )
}

export default Footer