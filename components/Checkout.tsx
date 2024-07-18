"use client"
import React from 'react'
import OrderSummary from './OrderSummary';
import DeliveryAddress from './DeliveryAddress';
import amazonLogo from '../public/amazon-logo.png';
import { FaLock } from "react-icons/fa";
import Image from 'next/image';
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';

const Checkout = () => {

    const cart =useAppSelector(getCart);
    let totalPrice=0;
    cart.forEach((item:any)=>{
        totalPrice+=item.price*item.quantity
    })
    
  return (
    <div className='absolute top-0 w-full p-20  bg-white text-black text-bold'>
      <div className='flex items-center justify-between w-[70%] mx-auto border-b border-gray-300'>
        <div>
          <Image src={amazonLogo} alt={"amazon-logo"} width={150} height={150} />
        </div>
        <div>
          <h1 className='font-bold text-2xl'>Checkout</h1>
        </div>
        <div className='text-gray-400'>
          <FaLock size={'30px'} />
        </div>
      </div>
    <div className='flex  justify-between w-[70%] ms-auto'>
    <DeliveryAddress/>
    <OrderSummary totalPrice={totalPrice}/>
        </div>
        </div>
     )
}

export default Checkout
