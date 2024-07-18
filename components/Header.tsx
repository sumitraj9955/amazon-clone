"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import amazonLogo from "../public/amazon-logo-2.webp";
import { BsCartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import { supabase } from "@/lib/supabase/products";


const itemList = [
  "All",
  "Fresh",
  "Amazon miniTV",
  "Sell",
  "Gift Cards",
  "Baby",
  "Buy Again",
  "Browsing History",
  "Amazon Pay",
  "Gift Ideas",
  "Health",
  "Household & Personal Care"
];

const Header = () => {
const [query, setQuery] = useState<string>("");
const [user,setUser]=useState<any>(null);
const router = useRouter();
 const cart=useAppSelector(getCart)
  const searchHandler = () => {
    router.push(`/search/${query}`);
  };

  useEffect(()=>{
  const getUserData=async()=>{
    const {data:{user}} =await supabase.auth.getUser();
    setUser(user);
  }
  getUserData();
  },[])
  console.log(user);
  return (
    <>
    <div className="bg-[#131921] text-white py-2">
      <div className="flex items-center justify-between w-[90%] mx-auto">
        <Link href={'/'}className="w-[10%] m-4">
          <Image src={amazonLogo} alt={"logo"} width={120} height={120} />
        </Link>
        <div className="flex items-center w-[60%]">
          <input 
           value={query}
           onChange={(e) => setQuery(e.target.value)}
            type="text" 
            className="w-full p-2 rounded-l-md outline-none text-black" placeholder="Search Amazon.in" />
          
          <div 
           onClick={searchHandler} 
          className="bg-[#FEB069] p-2 rounded-r-md cursor-pointer hover:bg-[#703d0e]" >
              <FaSearch size={"24px"} />
            </div>
        </div>
        <div className="flex items-center justify-around w-[20%]">
          <div onClick={()=>{
            router.push("/signin")
          }}
           className="cursor-pointer">
            <h1 className="text-xs hover:underline">{`${ user? user.identities[0].identity_data.full_name:"Sign In"}`}</h1>
            <h1 className="font-medium text-sm">Account & Lists</h1>
          </div>
          <div>
            <h1 className="text-xs cursor-pointer">Returns</h1>
            <h1 className="font-medium text-sm cursor-pointer">& Orders</h1>
          </div>
          <Link href={'/cart'}  className="cursor-pointer">
            <p className="relative top-2 left-2.5">{cart.length}</p>
            <div className="flex">
              <BsCartFill size={"30px"} />
              <h1 className="mt-4 cursor-pointer">cart</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
          <div className="bg-[#232F3E] w-full flex justify-between items-center py-2">
          <div className="flex">
            {
            itemList.map((link, idx) => (
              <Link
              key={idx} // Ensure unique key prop
              href={`/${link}`}
              className="mx-2 hover:border hover:border-[#feb069]"
            >
              {link}
            </Link>
          ))}
        </div>
          <div className="mr-5">
          <h1 onClick={async ()=>{
            const{error}=await supabase.auth.signOut();
            router.push("/signin")
          }}
          className="text-[#FEB069] cursor-pointer font-bold hover:underline">Sign out</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
