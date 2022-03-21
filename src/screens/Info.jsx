import React from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import PromotionHead from "../components/PromotionHead";
import Map from "../components/Map";

const Info = () => {
  return (
    <div>
      <div className="bg-[#343433]">
        <PromotionHead />
        <Navbar />
      </div>
      <div className="flex items-center md:mb-5 justify-around tracking-wider text-gray-200 py-5 px-3 text-sm md:text-base lg:h-52 bg-[url('/src/utils/backImage/banner.png')]">
        <p className="text-2xl md:text-3xl xl:text-4xl font-bold">
          Bizimle İletişime Geçin
        </p>
      </div>
      <div className="my-5 md:my-12">
        <Form />
      </div>
      <Map size="50vh" />
    </div>
  );
};

export default Info;
