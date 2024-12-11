import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Menu from '../Models/Menu/Menu.js';
import MobileMenu from "../Models/Menu/MobileMenu.js";
import MobileStckMenu from "../Models/Menu/MobileStckMenu.js";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between w-[94%] p-2 font-sans absolute rounded-lg top-3 left-[3%] text-neutral-900/90 z-30  ">
        <div className="w-[50%] lg:w-[30%] ">
          <img
            alt="logo"
            src={process.env.PUBLIC_URL + "/logos/logo1.png"}
            className="h-12 md:h-16 object-cover filter invert opacity-90 mb-4"
          />
        </div>

        {/* Links Section - Desktop */}
        <div className="hidden lg:flex lg:w-[50%] xl:w-[50%] justify-between text-center ">
          {["Accueil", "À propos", "Cycles", "Services", "Actualités", "Galerie"].map((text, index) => (
             <Link className={`w-[16.6666666667%] ${index>3?'text-white':'text-neutral-900'} hover:animate-pulse `}>
             {text}
           </Link>
          ))}
        </div>

        {/* Contact & Registration Section - Desktop */}
        <div className="hidden lg:flex lg:w-[30%] items-center flex-row-reverse  -mr-10">
          <Link className="m-2 lg:p-3.5 lg:py-3 py-5 bg-red-500 rounded-[30px] hover:bg-red-500/90 shadow-lg">
            <span className="text-white mx-2 ">Inscription</span>
          </Link>
          <Link className="m-2 text-white">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex lg:hidden w-[50%] justify-end">
          <FontAwesomeIcon icon={faBars} className="text-3xl md:text-4xl hover:animate-pulse " onClick={()=>setIsMobile(true)}/>
        </div>
      </nav>

      {/* Menu Section */}
      <Menu visible={scrolled && !isMobile} />
      <MobileMenu visble={isMobile}  onClose={()=>setIsMobile(false)}/>
      <MobileStckMenu visible={scrolled} onOpen={()=>setIsMobile(true)}/>
    </>
  );
};




export default Navbar;
