import React from "react";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
function NavBar() {
  return (
    <header>
      <div className="bg-gray-200">
        <nav className="w-10/12 mx-auto flex justify-end">
          <ul className="flex text-xs py-1 gap-1 sm:gap-3 lg:gap-10">
            <NavItem itemStyle="text-red-500">SAVE MORE ON APP</NavItem>
            <NavItem>SELL ON DARAZ</NavItem>
            <NavItem>CUSTOMER CARE</NavItem>
            <NavItem>TRACK MY ORDER</NavItem>
            <NavItem>LOGIN</NavItem>
            <NavItem>SIGN UP</NavItem>
            <NavItem>भाषा परिवर्तन</NavItem>
          </ul>
        </nav>
      </div>
      <div className="w-10/12 mx-auto">
        <div className="py-3 w-full bg-white grid grid-cols-6 items-center ">
          <div className="col-span-1 ">
            <h1 className="text-2xl font-bold">DARAZ</h1>
          </div>
          <div
            className="
        col-span-5
        md:col-span-4
         flex mx-1 items-center"
          >
            <div className="flex-1 flex">
              <input
                placeholder="Search in Daraz"
                className="flex-1 border-2 border-gray-300 p-1.5 px-4 bg-gray-100"
              />
              <div className="flex justify-center items-center bg-yellow-500 p-3 cursor-pointer">
                <SearchIcon className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex justify-center items-center   cursor-pointer py-3 px-6">
              <ShoppingCartIcon className=" h-6 w-6 text-gray-500" />
            </div>
          </div>
          <div className="hidden  md:flex md:col-span-1 mx-auto p-4">
            <div className="h-8 bg-gray-200  text-center rounded px-10 ">
              Offers
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;

const NavItem = ({ children, itemStyle }) => {
  return (
    <li
      className={`hover:underline hover:text-red-500 cursor-pointer ${itemStyle}`}
    >
      {children}
    </li>
  );
};
