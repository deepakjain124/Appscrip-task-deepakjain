import { Images } from "@/assets/Index";
import Image from "next/image";
import React from "react";
import { CiHeart, CiUser } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";
import { IoBagOutline, IoChevronDown } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-8 px-5 md:px-12 ">
        <div className="flex w-1/2 md:w-auto justify-start gap-x-2 items-center">
          <RxHamburgerMenu className="block md:hidden" size={30}/>

          <Image alt="logo" src={Images.logo} width={30} height={30} />
        </div>
        <h1 className="font-bold text-2xl ml-0 lg:ml-28 flex justify-center items-center  w-full">
          LOGO
        </h1>
        <div className="flex justify-center items-center gap-2">
          <SlMagnifier size={22} />
          <CiHeart size={22} />
          <IoBagOutline size={22} />
          <CiUser className="hidden md:block" size={22} />
          <p className="font-bold text-sm hidden md:block">ENG</p>
          <IoChevronDown className=" hidden md:block"/>
        </div>
      </div>
    </>
  );
};

export default Header;
