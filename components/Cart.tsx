"use client"
import React from 'react'
import ShoppingCart from './ShoppingCart'
import ProceedToBuy from './ProceedToBuy'
import {  useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';

const Cart = () => {
  const cart = useAppSelector(getCart);
  let totalPrice=0;
  cart.forEach((item:any)=>{
    totalPrice += item.price*item.quantity;
  })
  return (
    <div className='w-[80%] mx-auto mt-10'>
        <div className='flex justify-between w-full'>
      <ShoppingCart cart={cart} totalPrice={totalPrice}/>
      <ProceedToBuy length={cart.length} totalPrice={totalPrice}/>
      </div>
    </div>
  )
}

export default Cart
