import React from 'react'
import { FaFacebookF,  FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-white">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a  href="https://web.facebook.com/profile.php?id=100070531525032&sk=about"  target="_blank" rel="noreferrer"><FaFacebookF /></a> 
            </span>
            <span className="bannerIcon">
               <a href="https://github.com/walihaider2004" target="_blank" rel="noreferrer"><FaGithub /></a>
            </span>
            <span className="bannerIcon">
               <a href="https://www.linkedin.com/in/wali-haider-jalali-3b6410272" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-3 pt-1 text-white">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
           
              <CgWebsite/>
            </span>
            <span className="bannerIcon">
            <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media