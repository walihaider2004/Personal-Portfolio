import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [ "Mern Stack Developer.","React Developer", "Professional Coder."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal text-white">WELCOME TO MY WORLD</h4>
        <h1 className="text-3xl font-bold text-white">
          Hi, I'm 
        </h1>
        <h1 className="text-[#FF014F] capitalize lg:text-5xl font-bold ">Wali Haider Jalali</h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        {/* <p className="text-base font-bodyFont leading-6 tracking-wide">
        Passionate MERN stack developer dedicated to crafting seamless, efficient web applications, blending creativity with technology to deliver impactful solutions that drive innovation and enhance user experiences.
        </p> */}
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner