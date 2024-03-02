import CommonCard from "@/CommonComponents/CommonCard";
import FilterComponents from "@/CommonComponents/FilterComponents";
import FilterDrawer from "@/CommonComponents/FilterDrawer";
const Dropdown = dynamic(() => import("antd").then((antd) => antd.Dropdown), {
  ssr: false,
});

import axios from "axios";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useState } from "react";
import {
  IoChevronBack,
  IoChevronDown,
  IoChevronForward,
} from "react-icons/io5";

const Home = ({ data }) => {
  const [showfilter, setShowFilter] = useState(true);
  const [openfilterDrawer, setOpenfilterDrawer] = useState(false);
  const items = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ].map((i, index) => {
    return {
      key: index + 1,
      label: <p className="font-semibold text-xs mt-2">{i}</p>,
    };
  });
  return (
    <>
     <Head>
        <title>My new cool app</title>
        </Head>
      <div className="px-4 mt-8 container mx-auto">
        <hr className="mb-4" />
        <div className="flex justify-around lg:justify-between items-center">
          <div className="flex  justify-start items-center gap-8">
            <p className="font-bold hidden lg:block uppercase text-sm">
              3425 items
            </p>
            <div
              onClick={() => {
                setShowFilter(!showfilter);
              }}
              className="hidden lg:flex cursor-pointer justify-start items-center gap-x-2"
            >
              <span>
                {showfilter ? (
                  <IoChevronBack size={15} />
                ) : (
                  <IoChevronForward size={15} />
                )}
              </span>
              <p className="font-serif text-gray-600 text-sm">
                {" "}
                {showfilter ? "Hide" : "Show"} Filters
              </p>
            </div>
            <div
              onClick={() => {
                setOpenfilterDrawer(true);
              }}
              className="flex lg:hidden cursor-pointer justify-start items-center gap-x-2"
            >
              <p className="uppercase font-bold text-sm"> Filter</p>
            </div>
          </div>
          <div className="flex  justify-start items-center gap-3">
            <Dropdown
              trigger={["click"]}
              arrow={false}
              placement="bottom"
              menu={{
                items,
              }}
            >
              <div className="flex cursor-pointer justify-start items-center gap-x-2">
                <p className="font-bold uppercase text-sm"> Recommended</p>
                <span>
                  <IoChevronDown size={15} />
                </span>
              </div>
            </Dropdown>
          </div>
        </div>
        <hr className="mt-4" />
        <div className="grid grid-cols-5 gap-2 mt-8 place-items-start">
          <div
            className={` p-3 hidden lg:${
              showfilter ? "block" : "hidden"
            }  w-full`}
          >
            <FilterComponents />
          </div>
          <div
            className={`grid  col-span-5 ${
              showfilter ? "lg:col-span-4" : "lg:col-span-5"
            }  w-full grid-cols-2 ${showfilter?"lg:grid-cols-3":"lg:grid-cols-4"}  ${
              showfilter ? "lg:grid-cols-3" : "lg:grid-cols-4"
            }   place-items-center gap-4`}
          >
            {data.map((i, index) => (
              <div key={index}>
                <CommonCard data={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {openfilterDrawer && (
        <FilterDrawer open={FilterDrawer} setopen={setOpenfilterDrawer} />
      )}
    </>
  );
};

export const getStaticProps = async () => {
  try {
    // Fetch data from an API using Axios
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data; // Extract data from the Axios response

    // Pass fetched data as props to the component
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    // Handle errors, such as network errors or invalid responses
    console.error("Error fetching data:", error.message);

    // Return an empty data object as props
    return {
      props: {
        data: [],
      },
    };
  }
};

export default Home;
