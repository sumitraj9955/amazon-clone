"use client";
import { useSupabase } from "../../../lib/supabase/hooks/useSupabase";
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import SingleProduct from "../../../components/SingleProduct";

const  ProductPage = () => {
  const { id } = useParams();
  const {singleProduct,getSingleProduct}=useSupabase();
  useEffect(()=>{
    getSingleProduct(Number(id));
  },[id,getSingleProduct])
   return (
    <div >
         <SingleProduct  singleProduct={singleProduct}  />
    </div>
  );
}

export default  ProductPage;
