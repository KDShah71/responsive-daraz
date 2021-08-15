import React from "react";
import { Carousel } from "react-carousel-minimal";

const data = [
  {
    image:
      "https://icms-image.slatic.net/images/ims-web/ac9f0915-6821-4137-82a3-13523846b36f.jpg_1200x1200.jpg",
  },
  {
    image:
      "https://icms-image.slatic.net/images/ims-web/bbcbac8a-e3f6-4787-80d3-c2d2261656bc.jpg",
  },
  {
    image:
      "https://icms-image.slatic.net/images/ims-web/06df1ac0-8204-455d-819e-54f94d659364.jpg",
  },
  {
    image:
      "https://icms-image.slatic.net/images/ims-web/accf4717-5846-4b02-ae89-c5fb40cd5d06.jpg",
  },
];

function HeroSection() {
  return (
    <>
      <section className="relative bg-green-100">
        <Carousel
          data={data}
          width="100%"
          height="345px"
          // captionStyle={captionStyle}
          // radius="10px"
          // slideNumber={true}
          // slideNumberStyle={slideNumberStyle}
          // captionPosition="bottom"
          automatic={true}
          time={8000}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="contain"
          style={{
            margin: "0 auto",
            position: "relative",
            width: "100%",
            // marginLeft: "190px",
            top: 0,
            bottom: 0,
            zIndex: 5,
          }}
        />
        <div className="w-10/12 mx-auto bg-red-300  items-center">
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
        </div>
      </section>
    </>
  );
}

export default HeroSection;

const menus = [
  {
    title: "Electronic Devices",
    submenu: [
      {
        title: "Mobiles",
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
