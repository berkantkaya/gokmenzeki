import React from "react";
import Form from "../components/Form";
import Information from "../components/Information";
import Navbar from "../components/Navbar";
import PromotionHead from "../components/PromotionHead";
import Map from "../components/Map";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full">
      <div className="bg-[url('/src/utils/backImage/home-slider-image.png')] h-full lg:h-[950px] max-w-full bg-no-repeat ">
        <PromotionHead />
        <Navbar />
        <div className="w-full flex flex-col justify-center items-center lg:mt-16">
          <div className="text-white tracking-wider">
            <div className="font-semibold lg:ml-2">Gökmen Zeki</div>
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2">
              Alüminyum
            </div>
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2">
              Kapak
            </div>
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold mb-16 lg:mb-1">
              Sistemleri
            </div>
          </div>
        </div>
      </div>
      <Information />
      <div className="flex items-center justify-around tracking-wider text-gray-200 py-5 px-3 text-sm md:text-base lg:h-72 bg-[url('/src/utils/backImage/banner.png')]">
        <div className="space-y-3">
          <p className="text-2xl xl:text-3xl font-semibold">
            Sizlere daha iyi hizmet verebilmek için buradayız.
          </p>
          <p className="md:pb-6">
            Sorularınız veya görüşleriniz için bizimle iletişime geçin!'
            yazacak.
          </p>
          <button
            onClick={() => navigate("/information")}
            className=" rounded-md py-1 px-4 border-2 border-gray-200 text-gray-200 hover:bg-[#4C4636] hover:transition-all"
          >
            Bize Ulaşın
          </button>
        </div>
        <div className=""></div>
      </div>

      <div className="space-y-5 mt-10">
        <p className="text-center lg:text-3xl font-semibold text-lg">
          TERCİH EDİLEN PROFİLLERİMİZ
        </p>
        <hr className="w-20 border-2 border-[#978148] rounded-full m-auto" />
        {/* <p className="text-center text-gray-500 text-sm md:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
        <div className="space-y-10 md:space-y-24 xl:pt-6">
          <div className="w-1/2 m-auto space-y-10 md:space-y-0 md:w-full flex items-center justify-evenly flex-wrap">
            <div className="flex items-center space-x-3">
              <img
                className="border border-[#978148] rounded-full"
                src="/assets/images/profillerimiz-ikon.png"
                alt=""
              />
              <div className="flex flex-col text-sm space-y-1 tracking-wider">
                <span className="font-bold">Z01/KÜT</span>
                <span className="text-gray-500">CAM KAPAK PROFİLİ</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img
                className="border border-[#978148] rounded-full"
                src="/assets/images/profillerimiz-ikon.png"
                alt=""
              />
              <div className="flex flex-col text-sm space-y-1 tracking-wider">
                <span className="font-bold">Z01/KÜT</span>
                <span className="text-gray-500">CAM KAPAK PROFİLİ</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img
                className="border border-[#978148] rounded-full"
                src="/assets/images/profillerimiz-ikon.png"
                alt=""
              />
              <div className="flex flex-col text-sm space-y-1 tracking-wider">
                <span className="font-bold">Z01/KÜT</span>
                <span className="text-gray-500">CAM KAPAK PROFİLİ</span>
              </div>
            </div>
          </div>
          <div className="w-1/2 m-auto space-y-10 md:space-y-0 md:w-full flex items-center justify-evenly flex-wrap">
            <div className="flex items-center space-x-3">
              <img
                className="border border-[#978148] rounded-full"
                src="/assets/images/profillerimiz-ikon.png"
                alt=""
              />
              <div className="flex flex-col text-sm space-y-1 tracking-wider">
                <span className="font-bold">Z01/KÜT</span>
                <span className="text-gray-500">CAM KAPAK PROFİLİ</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img
                className="border border-[#978148] rounded-full"
                src="/assets/images/profillerimiz-ikon.png"
                alt=""
              />
              <div className="flex flex-col text-sm space-y-1 tracking-wider">
                <span className="font-bold">Z01/KÜT</span>
                <span className="text-gray-500">CAM KAPAK PROFİLİ</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img
                className="border border-[#978148] rounded-full"
                src="/assets/images/profillerimiz-ikon.png"
                alt=""
              />
              <div className="flex flex-col text-sm space-y-1 tracking-wider">
                <span className="font-bold">Z01/KÜT</span>
                <span className="text-gray-500">CAM KAPAK PROFİLİ</span>
              </div>
            </div>
          </div>
          <div className="w-1/2 m-auto space-y-10 md:space-y-0 md:w-full flex items-center justify-evenly flex-wrap">
            <div className="flex items-center space-x-3">
              <img
                className="border border-[#978148] rounded-full"
                src="/assets/images/profillerimiz-ikon.png"
                alt=""
              />
              <div className="flex flex-col text-sm space-y-1 tracking-wider">
                <span className="font-bold">Z01/KÜT</span>
                <span className="text-gray-500">CAM KAPAK PROFİLİ</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img
                className="border border-[#978148] rounded-full"
                src="/assets/images/profillerimiz-ikon.png"
                alt=""
              />
              <div className="flex flex-col text-sm space-y-1 tracking-wider">
                <span className="font-bold">Z01/KÜT</span>
                <span className="text-gray-500">CAM KAPAK PROFİLİ</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img
                className="border border-[#978148] rounded-full"
                src="/assets/images/profillerimiz-ikon.png"
                alt=""
              />
              <div className="flex flex-col text-sm space-y-1 tracking-wider">
                <span className="font-bold">Z01/KÜT</span>
                <span className="text-gray-500">CAM KAPAK PROFİLİ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="bg-[#F6F9FB] space-y-3 py-10">
        <p className="text-center lg:text-3xl font-semibold text-lg">
          REFERANSLARIMIZ
        </p>
        <p className="text-center xl:pb-10">
          Sizlere daha iyi hizmet verebilmek adına durmadan gelişiyor,
          çalışmalarımıza devam ediyoruz.
        </p>
        <div className="flex items-center justify-evenly flex-wrap w-full">
          <img src="/assets/images/referanslar-Logo.png" alt="" />
          <img src="/assets/images/referanslar-Logo2.png" alt="" />
          <img src="/assets/images/referanslar-Logo3.png" alt="" />
          <img src="/assets/images/referanslar-Logo4.png" alt="" />
          <img src="/assets/images/referanslar-Logo5.png" alt="" />
          <img src="/assets/images/referanslar-Logo6.png" alt="" />
        </div>
      </div>

      <Map size="80vh" />
      <Form />
    </div>
  );
};

export default Home;
