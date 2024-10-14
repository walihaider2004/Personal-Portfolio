import React from 'react';
// import { bannerImg } from "./../../";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[250px] h-[250px] lgl:w-[300px] lgl:h-[300px] z-10 rounded-full  object-cover"
        src={require('./../../assets/images/wali1.png')}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[255px] h-[255px] lgl:w-[303px] lgl:h-[303px] rounded-full border-2 border-[#FF014F]"></div>
    </div>
  );
}

export default RightBanner;
