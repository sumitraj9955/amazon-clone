"use client"
import React from 'react'
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import Image from 'next/image';


const DeliveryAddress = () => {
  const cart = useAppSelector(getCart);

  return (
    <div>
           
      <div className='mx-auto border-b border-gray-300 mb-2 py-2'>
        <div className='flex justify-between '>
          <h1 className='font-bold text-lg'>1. Delivery Address</h1>
          <p className='text-sm'>
            Sumit Raj <br />
            Bankers Colony, L.no2 <br />
            Aghoriya Bazar, Neem Chowk <br />
            842002, Bihar <br />
            Add delivery instruction
          </p>
        </div>
      </div>

      <div className='mx-auto border-b border-gray-300 mb-2 py-2'>
        <div className='flex justify-between w-[50%]'>
          <h1 className='font-bold text-lg'>2. Items and delivery</h1>
        </div>
        {
          cart.map((product: any) => (
            <div key={product.id} className='my-4'>
              <div className='flex'>
                <Image src={product.image} alt={product.title} width={100} height={100} />
                <div className='ml-44 font-bold'>
                  <h1>{product.title}</h1>
                  <p className='py-2'>{`$${product.price}`}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default DeliveryAddress;
