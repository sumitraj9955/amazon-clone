"use client";
import { useSupabase } from "../../../lib/supabase/hooks/useSupabase";
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import SingleProduct from "../../../components/SingleProduct";

const Page = () => {
  const { id } = useParams();
  console.log("id is :-", id);
  const {singleProduct,getSingleProduct}=useSupabase();
  useEffect(()=>{
    getSingleProduct(Number(id));
  },[])
   return (
    <div >
         <SingleProduct  singleProduct={singleProduct} id={id} />
    </div>
  );
}

export default Page;
