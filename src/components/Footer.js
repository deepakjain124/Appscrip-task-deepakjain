import { Images } from "@/assets/Index";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-black mt-4 text-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-start place-content-center">
          <div className="w-full ">
            <p className="uppercase font-bold">be the first to know</p>
            <p className="mt-1 text-xs">Sign up for updates from mettā muse.</p>
            <div className="flex justify-start mt-4 w-full items-center gap-x-3">
              <input
                placeholder="Enter your email..."
                className="bg-white text-gray-600 px-4 text-xs h-8 w-1/2 outline-none focus:outline-none"
              />
              <p className="uppercase border border-gray-50 w-28 text-center text-gray-400 text-xs p-2 rounded-md">
                subscribe
              </p>
            </div>
          </div>{" "}
          <div>
            <p className="uppercase text-sm font-bold">contact us</p>
            <p className="mt-2 text-xs">+44 22244788</p>
            <p className="mt-2 text-xs">customercare@gmail.com</p>
            <p className="uppercase mt-4 text-sm font-bold">currency</p>
            <p className="mt-2 text-xs">+44 22244788</p>
            <p className="mt-2 text-xs">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
        <div className="w-full h-[1px] mt-5 bg-white"></div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 place-items-start">
          <div>
            <p className="uppercase text-sm font-bold">metta muse</p>
            <p className="mt-2 text-xs">About us</p>
            <p className="mt-2 text-xs">Stories</p>
            <p className="mt-2 text-xs">Artisans</p>
            <p className="mt-2 text-xs">Boutiques</p>
            <p className="mt-2 text-xs">Contact us</p>
            <p className="mt-2 text-xs">Lorem ipsum</p>
          </div>{" "}
          <div>
            <p className="uppercase text-sm font-bold">quick links</p>
            <p className="mt-2 text-xs">Orders & Shipping</p>
            <p className="mt-2 text-xs">Join/Login as a seller</p>
            <p className="mt-2 text-xs">Payment and Pricing</p>
            <p className="mt-2 text-xs">Return and Refunds</p>
            <p className="mt-2 text-xs">Faq</p>
            <p className="mt-2 text-xs">Privacy Policy</p>
            <p className="mt-2 text-xs">Terms & Condition</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="uppercase text-sm font-bold">follow us</p>
            <Image alt="socialmedia"
              src={Images.linkedininsta}
              className="mt-2"
              width={70}
              height={70}
            />
            <p className="mt-4 text-sm font-bold">met musse ACCEPTS</p>
            <div className="flex flex-wrap justify-start items-center mt-2 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i, index) => (
                <Image key={index} alt="partners" src={Images.master} width={50} height={50} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
