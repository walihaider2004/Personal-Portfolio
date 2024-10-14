import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Wali Haider Jalali</h3>
        <p className="text-lg font-normal text-white">
          MERN Stack Developer
        </p>
        <p className="text-base text-white tracking-wide">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you're looking for a developer, a collaborator, or just want to chat, feel free to reach out.
        </p>
        <p className="text-base text-white flex items-center gap-2">
          Phone: <span className="text-white">+923206943440</span>
        </p>
        <p className="text-base text-white flex items-center gap-2">
          Email: <span className="text-white">walihaiderjalali1407@gmail</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4 text-white">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a href="https://web.facebook.com/profile.php?id=100070531525032&sk=about"><FaFacebookF /></a> 
          </span>
          <span className="bannerIcon">
          <a href="https://github.com/walihaider2004"><FaGithub /></a>
          </span>
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/wali-haider-jalali-3b6410272"><FaLinkedinIn /></a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft