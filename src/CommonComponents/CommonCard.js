import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
const CommonCard = ({ data }) => {
  return (
    <>
      <div  className="h-[300px] p-4 mb-6  w-full  flex flex-col justify-center items-center  bg-blend-lighten">
        <Image
          src={data.image}
          alt="product"
          className="object-contain flex justify-center items-center"
          width={150}
          height={100}
        />
        <div className="flex justify-start gap-2 mt-1  items-center">
          <p className="font-bold capitalize  w-full text-start text-sm">
            {data.category}
          </p>
          <CiHeart size={20} className="cursor-pointer block lg:hidden" />
        </div>

        <div className="flex justify-between gap-2  items-center">
          <p className="text-start  text-xs">
            <span className="underline underline-offset-2">Sign in</span> or
            Create an account to see pricing
          </p>
          <CiHeart size={20} className="cursor-pointer hidden lg:block" />
        </div>
      </div>
    </>
  );
};

export default CommonCard;
