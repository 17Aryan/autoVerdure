"use client";

import Image from "next/image";
import Link from "next/link";
import React,{useState} from "react";
import { navItems } from "../constant/data";
import { usePathname } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleSearchBar = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  } 
  let pathname = usePathname();
    if (pathname) {
        pathname = pathname.split("/").pop();
    } else {
        pathname = "";
    }

  if (pathname === "about-us") {
    pathname = "about us";
  } else if (pathname === "") {
    pathname = "home";
  }

  return (
    <div className="w-full px-4 py-[19px] md:pl-[51px] md:pr-[27.53px] xl:pl-[77.34px] xl:pr-[77.34px] bg-transparent z-10 flex justify-between items-center absolute top-0" style={{paddingLeft: "40px", paddingRight: "40px"}}>
      {/* Logo and Company Name */}
      <Link
        href="/"
        className="gap-[10px] no-underline text-black flex justify-center items-center"
      >
        <div className="object-contain w-[48.475px] h-[44px]">
          <Image src="/logoHD.png" alt="logo" width={48.475} height={44} unoptimized={true} priority />
        </div>
        <p className="text-sm leading-[28.8px] fontText uppercase text-center font-medium">
          Auto Verdure
        </p>
      </Link>

      {/* Hamburger Icon */}
      <div className="xl:hidden w-[32px] h-[32px] object-contain cursor-pointer">
        <Image src="/hamburger.svg" alt="hamburger" width={32} height={32} />
      </div>

      {/* Nav Items */}
      <div className="hidden xl:block" style={{marginLeft: "90px"}}>
        <ul className="gap-16 flex justify-center items-center">
          {navItems.map((item, index) => (
            <Link
              className="text-sm gap-1 flex justify-center items-center text-primaryGrayscale no-underline list-none font-normal leading-6"
              key={index}
              href={item.url}
            >
              <li
                className={
                  item.title === pathname
                    ? "font-bold capitalize"
                    : "font-normal hover:font-bold capitalize"
                }
              >
                {item.title}
              </li>
              <div
                className={
                  item.title === "contact" ? "flex hover:font-bold" : "hidden"
                }
              >
                <Image
                  src="/downArrow.svg"
                  alt="downArrow"
                  width={16}
                  height={16}
                />
              </div>
            </Link>
          ))}
        </ul>
      </div>

      {/* Search Bar, Cart, User Avatar */}
      <div className="hidden xl:flex gap-[15px]">
      <div className="relative flex items-center justify-center w-full">
      <form className={`relative flex items-center transition-all duration-300 ease-out ${isVisible ? 'w-full' : 'w-12'}`}>
        {/* Search Input */}
        <input
          type="search"
          name="search"
          pattern=".*\S.*"
          required
          className={`transition-all duration-300 ease-out bg-white border-2 border-gray-700 rounded-full px-3 py-2 shadow-inner focus:outline-none ${isVisible ? 'w-full scale-100' : 'w-0 scale-0'} peer`}
          placeholder="Search"
          autoComplete="off"
          spellCheck="false"
          onBlur={() => setIsVisible(false)} // Hide search bar when it loses focus
        />
        {/* Search Button */}
        <button
          type="submit"
          onClick={toggleSearchBar}
          className={`transition-all duration-300 ease-out bg-gray-700 rounded-full flex items-center justify-center w-12 h-12 shadow-lg transform rotate-45 ${isVisible ? 'opacity-0' : 'opacity-100'}`}
        >
          <FaSearch className="text-white" />
        </button>
      </form>
    </div>

        <div className="gap-4 flex justify-center items-center">
          <Link href="/cart" className="w-[24.53px] h-[24.53px]">
            <Image
              className="object-contain"
              src="/cart.svg"
              alt="cart"
              width={24.53}
              height={24.53}
            />
          </Link>
          <div className="w-[24.53px] h-[24.53px]">
            <Link href="/profile" className="w-[24.53px] h-[24.53px]">
              <Image
                className="object-contain"
                src="/avatar.svg"
                alt="cart"
                width={24.53}
                height={24.53}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
