import React from 'react';
import prime from '../public/prime-logo.png'; // Adjust the path as per your project structure
import Image from 'next/image';
import { useAppDispatch } from '@/lib/supabase/hooks/redux'; // Adjust the path as per your project structure
import { addToCart } from '../redux/cartSlice'; // Import your addToCart action creator function
import { useRouter } from 'next/navigation';

const AddToCartContainer = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();
     const router =useRouter(); 
  return (
    <div className='border border-black rounded-lg h-fit text-black text-sm'>
      <div className='p-4'>
        <Image src={prime} width={40} height={40} alt='prime' />
      </div>
      <div className='p-4'>
        <h1>
          {' '}
          <span className='text-[#147C8F]'>Free delivery </span> Thursday, 21 March.{' '}
          <span className='text-[#147C8F]'>Details</span>
        </h1>
        <h1 className='mt-4'>
          Or fastest delivery Tomorrow, 15 July. Order within 15 hrs 54 mins. Detail
        </h1>
        <p className='text-[#147C8F]'>Deliver to Sumit.Muz</p>
        <button
          onClick={() => {
            dispatch(addToCart(product));
            router.push("/cart");
          }}
          className='bg-[#FED814] w-full rounded-full py-1 my-2'
        >
          Add to cart
        </button>
        <button className='bg-[#FFA41C] w-full rounded-full py-1 my-2'>Buy Now</button>
      </div>
    </div>
  );
};

export default AddToCartContainer;
