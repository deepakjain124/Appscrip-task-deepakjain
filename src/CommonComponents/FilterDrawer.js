import dynamic from "next/dynamic";
import React from "react";
import FilterComponents from "./FilterComponents";
const Drawer = dynamic(() => import("antd").then((antd) => antd.Drawer), {
  ssr: false,
});
const FilterDrawer = ({ open, setopen }) => {
  return (
    <Drawer
      title={<p className="font-serif text-lg">Refine By</p>}
      placement="left"
      open={true}
      onClose={() => setopen(false)}
    >
      <FilterComponents />
    </Drawer>
  );
};

export default FilterDrawer;
