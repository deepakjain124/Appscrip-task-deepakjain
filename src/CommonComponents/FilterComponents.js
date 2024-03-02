import dynamic from "next/dynamic";
import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
const Checkbox = dynamic(() => import("antd").then((antd) => antd.Checkbox), {
  ssr: false,
});
const FilterComponents = () => {
  const [selected, setSelected] = useState(0);
  const filterTabs = [
    {
      title: "ideal for",
    },
    {
      title: "occasion",
    },
    {
      title: "work",
    },
    {
      title: "fabric",
    },
    {
      title: "sagment",
    },
    {
      title: "suitable for",
    },
    {
      title: "raw material",
    },
    {
      title: "pattern",
    },
  ];
  return (
    <>
      <div className="flex justify-start items-center gap-4">
        <Checkbox>
          {" "}
          <p className="font-bold">CUSTOMIZABLE</p>
        </Checkbox>
      </div>
      <hr className="mt-2" />
      {filterTabs.map((i, index) => {
        return (
          <div className="mt-4 select-none" key={index}>
            <div className="flex justify-between items-center">
              <p className="font-bold text-sm uppercase">{i.title}</p>
              {selected === index ? (
                <IoChevronUp
                  onClick={() =>
                    index === 0 || index === index
                      ? setSelected(null)
                      : setSelected(index)
                  }
                  color="gray"
                  className="cursor-pointer"
                />
              ) : (
                <IoChevronDown
                  onClick={() => setSelected(index)}
                  color="gray"
                  className="cursor-pointer"
                />
              )}
            </div>
            <p className="text-sm">All</p>
            <div className={`${selected === index ? "block" : "hidden"}`}>
              <p className="text-xs text-gray-600 underline underline-offset-4">
                Unselect All
              </p>
              {["men", "women", "Baby & Kids"].map((i, index) => {
                return (
                  <div
                    key={index}
                    className="flex mt-4 justify-start items-center gap-2"
                  >
                    <Checkbox>
                      <p className="capitalize font-sans text-xs">{i}</p>
                    </Checkbox>
                  </div>
                );
              })}
            </div>
            <hr className="mt-3" />
          </div>
        );
      })}
    </>
  );
};

export default FilterComponents;
