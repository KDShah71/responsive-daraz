import React from "react";

const items = [
  "Electronic Devices",
  "Electronic Accessories",
  "TV & Home Appliances",
  "Health & Beauty",
  "Babies & Toys ",
  "Groceries & Pets",
  "Home & Lifestyle",
  "Men's Fashion",
  "Women's Fashion",
  "Watches & Accessories",
  "Sports & Outdoor",
  "Automotive & Motorbike",
];

function HeroSection() {
  return (
    <section className="bg-green-100">
      <div className="w-10/12 mx-auto grid grid-cols-6">
        <ul className="col-span-2 md:col-span-1  text-xs lg:text-sm bg-white flex flex-col py-1">
          {items.map((item, index) => (
            <ListItem key={index} title={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HeroSection;

const ListItem = ({ title }) => {
  return (
    <li className="py-1 px-2 cursor-pointer  hover:text-green-500 hover:bg-gray-200 ">
      {title}
    </li>
  );
};
