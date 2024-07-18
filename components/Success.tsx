'use client'
import { useAppSelector } from '@/lib/supabase/hooks/redux'
import { getCart } from '@/redux/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Success = () => {
    const cart= useAppSelector(getCart)
  return (
    <div className=' absolute top-0 bg-white w-full py-20 text-black'>
      <div className='text-center mx-auto w-[70%]'>
        <h1>Thankyou for Shopping.</h1>
        <div>
         <h1 className='font-bold py-3 underline'>Ordre details</h1>
         {
            cart.map((product:any)=>{
                return(
                    <div key={product.id} className='flex '>
                        <Image src={product.image} alt= {product.title} width={100} height={100}/>
                      <h1 className='ml-5'>{product.title}</h1>
                      <h1>{product.price}</h1>
                    </div>
                )
            })
         }
        </div>
        <Link href={'/'} className='bg-[#FFD814] px-4 py-1 rounded-md' >Checkout more Product</Link>
      </div>
    </div>
  )
}

export default Success
