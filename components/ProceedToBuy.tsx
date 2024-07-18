import React from 'react'
import SubTotal from './shared/SubTotal'
import { useRouter } from 'next/navigation'

const ProceedToBuy = ({length,totalPrice}:{length:number,totalPrice:number}) =>{
  const router = useRouter();
  return (
    <div className='w-[20%] h-fit border-black ml-4'>
      <div className='p-4 text-sm'>
           <p><span className='text-[#007600] font-medium'> Your order is eligible for FREE Delivery.</span>Choose FREE Delivery option at checkout </p>
        <SubTotal left={true} length={length} totalPrice={totalPrice}/>
         <button onClick={()=>{
          router.push("/checkout")
         }}
          className='bg-[#FFDB14] w-full py-1 rounded-md shadow-md my-3'>Proceed to Buy</button>
         </div>
    </div>
  )
}

export default ProceedToBuy
