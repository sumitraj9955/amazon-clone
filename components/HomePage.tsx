"use client"
import { useSupabase } from '@/lib/supabase/hooks/useSupabase'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import CategoryWiseProduct from './shared/CategoryWiseProduct'

const HomePage = () => {
  const {mensProduct,getMensClothing,womensProduct,getWomensClothing} =useSupabase();
  
  useEffect(()=>{
    getMensClothing();
    getWomensClothing();
  },[getMensClothing,getWomensClothing])
  return (
    <div>
      <Image src={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/GW/PD/Newlaunch/PC_Hero_3000x1200_Bank--UPI_2X._CB568359096_.jpg"} width={10000} height={1000} alt={'banner'}/>
      <div className='w-[80%] mx-auto grid grid-cols-4 gap-2 relative -top-10'>
      {
        mensProduct.map((product:any)=>{
          return(
            <div key={product.id}>
            <CategoryWiseProduct product={product}/>
            </div>
          )
        })
      }
       {
        womensProduct.map((product:any)=>{
          return(
            <div key={product.id}>
            <CategoryWiseProduct product={product}/>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default HomePage
