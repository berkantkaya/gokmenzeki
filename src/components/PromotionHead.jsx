import React from "react";

const PromotionHead = () => {
  return (
    <div className="hidden md:flex items-center justify-around pt-2">
      <div className="flex text-sm items-center space-x-8 tracking-wider text-white">
        <span>Telefon: +90 (0232) 336 9733</span>
        <span>Eposta: bilgi@gokmenzeki.com</span>
      </div>
      <div className="flex space-x-2 cursor-pointer">
        <a
          target="_blank"
          href=""
        >
          <img src="/assets/images/facebook.png" alt="" />
        </a>
        <a target="_blank" href="">
          <img src="/assets/images/instagram.png" alt="" />
        </a>
        {/* <img src="/assets/images/twitter.png" alt="" />
        <img src="/assets/images/youtube.png" alt="" />
        <img src="/assets/images/linkedin.png" alt="" /> */}
      </div>
    </div>
  );
};

export default PromotionHead;
