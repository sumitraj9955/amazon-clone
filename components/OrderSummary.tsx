import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import axios from "axios";
import { supabase } from '@/lib/supabase/products';
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';

// interface Product{
//     id:number,
//     title:string,
//     price:number,
//     description:string,
//     category:string,
//     quantity:number,

// }

const stripePromise= loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);

const OrderSummary = ({totalPrice}:{totalPrice:number}) => {
const cart =useAppSelector(getCart)

const createStripeSession = async()=>{
    const {data:{user}}=await supabase.auth.getUser();
    const stripe =await stripePromise;

    const CheckoutSession =await axios.post("/api/checkout-sessions",{
     items:cart,
     email:user?.email    
    });
    console.log(CheckoutSession);
   const result=await stripe?.redirectToCheckout({
     sessionId:CheckoutSession.data.id,
   })
if(result?.error){
    console.log(result.error.message);
}

}

  return (
    <div className='border border-gray p-4 mt-4 h-fit'>
        <h1 className='font-bold '>Order Summary</h1>
        <div className='text-xs'>
            <div className='flex items-center justify-between '>
                <p>Items</p>
                <p>7809</p>
            </div>
            <div className='flex items-center justify-between '>
                <p>Delivery</p>
                <p>7809</p>
            </div>
            <div className='flex items-center justify-between '>
                <p>Total:</p>
                <p>7809</p>
            </div>
            <div className='flex items-center justify-between '>
                <p>Pormotion Applied</p>
                <p>7809</p>
            </div>
            <div className='flex text-xl justify-between text-[#B12704] py-2 border-t border-b border-gray-300'>
                <h1>Order Total:</h1>
                <h1>${totalPrice}</h1>
            </div>
        </div>
       <button onClick={createStripeSession}
        className='bg-[#FFD814] w-full rounded-md px-4 py-1 my-3'>Place Your Order Now</button>
      </div>
  )
}

export default OrderSummary
