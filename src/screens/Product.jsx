import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PromotionHead from "../components/PromotionHead";
import { dataProduct } from "../data";

const Product = () => {
    const [inc, setInc] = useState(2)
  return (
    <div>
      <div className="bg-[#343433]">
        <PromotionHead />
        <Navbar />
      </div>
      <div className="flex items-center md:mb-5 justify-around tracking-wider text-gray-200 py-5 px-3 text-sm md:text-base lg:h-52 bg-[url('/src/utils/backImage/banner.png')]">
            <p className="text-2xl md:text-3xl xl:text-4xl font-bold">
              Tüm Ürünler
            </p>
          </div>
      {dataProduct.map((data, index) => (
        <div key={index}>
          
          <div className=" px-2 md:px-0">
            {data.images.map((prd, index) => (
              <div className="" key={index}>
                <img className="w-full md:w-2/4 m-auto " src={prd} alt="" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
