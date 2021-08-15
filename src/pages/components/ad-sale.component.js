import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Section from "./section.component";

const items = [
  "DarazMall",
  "dMart",
  "Recharge & eStore",
  "Daraz Fashion",
  "Global Collection",
];

function AdSale() {
  return (
    <Section>
      <div className=" w-full h-48  rounded-full bg-red-400 my-2 px-8 flex justify-center items-center cursor-pointer">
        <p className="text-5xl font-bold text-white">Mega Offers</p>
      </div>
      <div className="py-2 grid grid-rows-2 lg:grid-rows-1 grid-cols-3      gap-2  lg:grid-cols-5  text-xs   lg:text-sm">
        {items.map((item, index) => (
          <GridItem key={index} title={item} />
        ))}
      </div>
    </Section>
  );
}

export default AdSale;

const GridItem = ({ title }) => {
  return (
    <div className="group bg-white flex justify-between items-center rounded-full px-2 py-1 hover:shadow-lg cursor-pointer">
      <div className="flex items-center">
        <div className="block h-8 w-8 rounded-full bg-black"></div>
        <p className="px-2">{title}</p>
      </div>
      <ChevronRightIcon className="opacity-0 h-5 w-5 text-gray-500 group-hover:opacity-100" />
    </div>
  );
};
