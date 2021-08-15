import React, { useState } from "react";

function HeroSection() {
  const [catIndex, setCatIndex] = useState(0);

  return (
    <section className="bg-green-100">
      <div className="w-10/12 mx-auto grid grid-cols-6 bg-red-300 relative h-full ">
        {/* <ul className="dropdown-menu">
          <li>a</li>

          <li>b</li>
        </ul> */}

        <ul className="dropdown-menu text-xs ">
          {menus.map((menu, index) => (
            <li>
              {menu.title}

              {menu.submenu && (
                <ul>
                  {menu.submenu.map((sub, index) => (
                    <li>
                      {sub.title}

                      {sub.submenu && (
                        <ul>
                          {sub.submenu.map((sub, index) => (
                            <li>{sub.title}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* <ul className=" w-40 md:w-48  text-xs md:text-sm bg-white flex flex-col py-1  h-full ">
          {items.map((item, index) => (
            <ListItem index={index} key={index} title={item.title} />
          ))}
        </ul> */}

        {/* <ul className="col-span-2 md:col-span-1  text-xs lg:text-sm bg-white flex flex-col  py-1 absolute h-full">
          {items[catIndex].submenu.map((item, index) => (
            <ListItem key={index} title={item} />
          ))}
        </ul> */}

        {/* <ul className="w-40 md:w-48  text-xs md:text-sm bg-white flex flex-col py-1 absolute left-40 md:left-48 h-full">
          <li>A</li>
        </ul> */}
      </div>
    </section>
  );
}

export default HeroSection;

// const menus = [
//   {
//     title: "Option 1",
//     submenu: null,
//   },
//   {
//     title: "Option 2",
//     submenu: [
//       {
//         title: "Option 2.1",
//         submenu: [
//           {
//             title: "Option 2.1.1",
//             submenu: null,
//           },
//           {
//             title: "Option 2.1.2",
//             submenu: null,
//           },
//         ],
//       },
//       {
//         title: "Option 2.2",
//         submenu: [
//           {
//             title: "Option 2.2.1",
//             submenu: null,
//           },
//           {
//             title: "Option 2.2.2",
//             submenu: null,
//           },
//         ],
//       },
//     ],
//   },
// ];

const ListItem = ({ title, setCatIndex, index }) => {
  return (
    <>
      <li className="py-1 px-2 cursor-pointer  hover:text-green-500 hover:bg-gray-200 group">
        {title}
      </li>
      <ul className="hidden  group-hover:flex w-40 md:w-48  text-xs md:text-sm bg-white  flex-col py-1 absolute z-20 left-40 md:left-48 h-full top-0 ">
        <li>{title}</li>
      </ul>
    </>
  );
};

const menus = [
  {
    title: "Electronic Devices",
    submenu: [
      {
        title: "Mobiles",
        submenu: [
          "Mobiles",
          "Tablets",
          "Laptops",
          "Desktops",
          "Gaming Consoles",
          "Cameras",
          "Printers",
        ],
      },

      {
        title: "Tablets",
        submenu: [
          {
            title: "Samsung Tablets",
            submenu: null,
          },

          {
            title: "Apple iPads",
            submenu: null,
          },
          {
            title: "Huawei Tablets",
            submenu: null,
          },
          {
            title: "Alcatel Tablets",
            submenu: null,
          },
        ],
      },
    ],
  },

  {
    title: "Electronic Accessories",
    submenu: ["Laptops", "Desktops", "Gaming Consoles", "Cameras", "Printers"],
  },
  {
    title: "TV & Home Appliances",
    submenu: [
      "Mobiles",
      "Tablets",
      "Laptops",
      "Desktops",
      "Gaming Consoles",
      "Cameras",
      "Printers",
    ],
  },
  {
    title: "Health & Beauty",
    submenu: [
      "Mobiles",
      "Tablets",
      "Laptops",
      "Desktops",
      "Gaming Consoles",
      "Cameras",
      "Printers",
    ],
  },
  {
    title: "Babies & Toys ",
    submenu: [
      "Mobiles",
      "Tablets",
      "Laptops",
      "Desktops",
      "Gaming Consoles",
      "Cameras",
      "Printers",
    ],
  },
  {
    title: "Groceries & Pets",
    submenu: [
      "Mobiles",
      "Tablets",
      "Laptops",
      "Desktops",
      "Gaming Consoles",
      "Cameras",
      "Printers",
    ],
  },
  {
    title: "Home & Lifestyle",
    submenu: [
      "Mobiles",
      "Tablets",
      "Laptops",
      "Desktops",
      "Gaming Consoles",
      "Cameras",
      "Printers",
    ],
  },
  {
    title: "Men's Fashion",
    submenu: [
      "Mobiles",
      "Tablets",
      "Laptops",
      "Desktops",
      "Gaming Consoles",
      "Cameras",
      "Printers",
    ],
  },
  {
    title: "Women's Fashion",
    submenu: [
      "Mobiles",
      "Tablets",
      "Laptops",
      "Desktops",
      "Gaming Consoles",
      "Cameras",
      "Printers",
    ],
  },
  {
    title: "Watches & Accessories",
    submenu: [
      "Mobiles",
      "Tablets",
      "Laptops",
      "Desktops",
      "Gaming Consoles",
      "Cameras",
      "Printers",
    ],
  },
  {
    title: "Sports & Outdoor",
    submenu: [
      "Mobiles",
      "Tablets",
      "Laptops",
      "Desktops",
      "Gaming Consoles",
      "Cameras",
      "Printers",
    ],
  },
  {
    title: "Automotive & Motorbike",
    submenu: [
      "Mobiles",
      "Tablets",
      "Laptops",
      "Desktops",
      "Gaming Consoles",
      "Cameras",
      "Printers",
    ],
  },
];

// const items = [
//   {
//     title: "Electronic Devices",
//     submenu: [
//       "Mobiles",
//       "Tablets",
//       "Laptops",
//       "Desktops",
//       "Gaming Consoles",
//       "Cameras",
//       "Printers",
//     ],
//   },
//   "Electronic Accessories",
//   "TV & Home Appliances",
//   "Health & Beauty",
//   "Babies & Toys ",
//   "Groceries & Pets",
//   "Home & Lifestyle",
//   "Men's Fashion",
//   "Women's Fashion",
//   "Watches & Accessories",
//   "Sports & Outdoor",
//   "Automotive & Motorbike",
// ];
