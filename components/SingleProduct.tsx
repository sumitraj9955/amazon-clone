import Image from "next/image";
import React from "react";
import Rating from "./shared/Rating";
import AddToCartContainer from "./AddToCartContainer";

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  return (
    <div className="w-[80] mx-auto mt-10">
      <div className="flex justify-between">
        {
        singleProduct.map((product: any) => {
          return (
            <div key={product.id} className="flex">
              <div className="flex">
                <div className="bg-gray-100">
                  <Image
                    className="mix-blend-multiply p-4"
                    src={product.image}
                    width={300}
                    height={300}
                    alt="{product.title}"
                  />
                </div>
                <div className="mx-4 w-[70%]">
                  <h1 className="font-bold text-lg text-black">
                    {product.title}
                  </h1>
                  <p className="text-black">{product.description}</p>
                  <Rating ratings={product.rating} />
                  <h1 className="font-bold text-2xl text-black">
                    ${`${product.price}`}{" "}
                  </h1>
                  <div>
                    <h1 className="font-bold text-sma">About this Item</h1>
                    <li className="text-black">
                      plit AC with patented inverter Swing compressor- for high
                      energy efficiency; Dew clean technology to ensure healthy
                      air. Capacity 1.5 Ton: Suitable for small sized rooms (111
                      to 150 sq.ft); 572 CFM with an air throw of 16 meters 3
                    </li>
                  </div>
                </div>
              </div>
              <AddToCartContainer product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleProduct;
