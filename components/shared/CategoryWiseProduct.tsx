import Image from 'next/image'
import React from 'react'
import Rating from './Rating'
import { useAppDispatch } from '@/lib/supabase/hooks/redux'
import { addToCart } from '@/redux/cartSlice'
import { useRouter } from 'next/navigation'


const CategoryWiseProduct = ({product}:{product:any}) => {
  const dispatch = useAppDispatch();
  const router=useRouter();
    return (
    <div className='border border-gray-300 text-black'>
        <h1 className='font-bold'>{product.category}</h1>
       <div className='mt-2 flex items-center justify-center'>
        <Image src={product.image} width={200} height={200} alt={product.title}/>
       </div>
       <div>
        <h1 >{product.title}</h1>
       <Rating ratings={product.rating}/>
       </div>
       <div className='my-2'>
       <button 
       onClick={()=>{
        dispatch(addToCart(product))
         router.push("/cart");
    }
}
       className='w-full py-2 rounded-md bg-[#FFD814]'>Add to Cart</button>
       </div>
    </div>
  )
}

export default CategoryWiseProduct
