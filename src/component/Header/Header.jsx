import React from 'react';
import logo from '../../assets/images/logo.png';
import '../../App.css';

const header = () => {
    return (
        <div className='flex items-center justify-around min-w-full h-20'>
            <img className='h-full w-36' src={logo} alt="" />
            <div className='flex gap-x-10'>
                <p className='header-item'>Home</p>
                <p className='header-item'>Products</p>
                <p className='header-item'>Categories</p>
                <p className='header-item'>Brands</p>
                <p className='header-item'>Pricing</p>
            </div>
            <div className='flex gap-x-10'>
                <button className='login'>Login</button>
                <button>Register</button>
            </div>
        </div>
    )
}

export default header