import Home from "@/pages";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="hidden md:flex justify-center items-center mt-8 gap-4">
        <p className="font-bold  uppercase">Shop</p>
        <p className="font-bold uppercase">skills</p>
        <p className="font-bold uppercase">stories</p>
        <p className="font-bold uppercase">about</p>
        <p className="font-bold uppercase">contact us</p>
      </div>
      <div className="flex md:hidden justify-start pl-6 items-center mt-8">
       <p className="text-gray-500"> HOME | <span>&nbsp;</span> <span className="text-black"> SHOP</span></p>
      </div>
      <hr className="mt-4"/>
      <div className="flex flex-col px-2 w-full lg:w-9/12  m-auto mt-8 justify-center items-center">
        <h1 className="text-4xl text-center font-mono uppercase">Discover our products</h1>
        <p className="text-center w-full md:w-[40%] leading-6 md:leading-9 ">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
