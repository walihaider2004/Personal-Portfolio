import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/images/walilogo.png"; 
import { navLinksdata } from '../../constants';
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      {/* Logo Section */}
      <div className=''>
        <img src={logo} alt="logo"  className='w-full h-20'/>
      </div>
      
      {/* Navigation Links */}
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Menu Icon for Mobile */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              
              {/* Logo & Description */}
              <div>
                <img className="w-32  " src={logo} alt="logo" />
          
              </div>
              
              {/* Navigation Links for Mobile */}
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Social Media Links */}
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me on
                </h2>
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

              {/* Close Menu Button */}
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-white hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
          
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
