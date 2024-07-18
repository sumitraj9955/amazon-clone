"use client"
import { useAppDispatch } from "@/lib/supabase/hooks/redux";
import { clearAllCart, decrementQuantity, incrementQuantity, removeFromTheCart } from "@/redux/cartSlice";
import Image from "next/image";
import React from "react";
import SubTotal from "./shared/SubTotal";

const ShoppingCart = ({cart,totalPrice}:{cart:any,totalPrice:number}) => {
const dispatch = useAppDispatch();

  return (
    <div className="w-[70%]">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl border-b border-gray-300 py-5">Shopping Cart</h1>
        <p>Price</p>
      </div>
      {cart.map((product: any) => {
        return (
          <div className="py-4 flex justify-between border-b border-gray-800" key={product.id}>
            <div className="flex ">
              <div>
                <Image src={product.image} width={100} height={100} alt={product.title} />
              </div>
              <div className="ml-4 ">
                <h1 className="font-medium">{product.title}</h1>
                <p  className="text-[#007600] my-1 text-xm font-bold text-xs">In stock</p>
                <h1 onClick={()=>{
                   dispatch(removeFromTheCart(product.id));
                }} className="text-bold text-red-600 cursor-pointer w-fit">Remove</h1>
                <div className="flex text-sm font-md justify-between items-center  bg-gray-200 rounded-md px-2 py-1 w-[15%] mt-2 w-fit">
                  <div
                   onClick={()=>{
                   product.quantity >1 && dispatch(decrementQuantity(product));
                   }}
                  className="cursor-pointer px-2">-</div>
                  <div>{product.quantity}</div>
                  <div 
                  onClick={()=>{
                    dispatch(incrementQuantity(product));
                   }}
                  className="cursor-pointer px-2">+</div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl">{`$${product.price}`}</h1>
              <p className="text-xs py-1">
                M.R.p:<span className="line-through">Rs 3,995.00</span>
              </p>
            </div>
          </div>
        );
      })
      }
      <h1 onClick={()=>{
        dispatch(clearAllCart());
      }} 
      className="text-red-600 cursor-pointer py-2">Clear All</h1>
      <SubTotal left={false} length={cart.length} totalPrice={totalPrice}/>
    </div>
  );
};

export default ShoppingCart;
