import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import Logo from "./assets/logo.png";
//import DarkMode from "./DarkMode";
import { IoMdSearch } from "react-icons/io";
//import handleOrderPopup from "PopUp";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Solar Material",
    link: "/#services",
  },
  {
    id: 3,
    name: "Real Estate",
    link: "/#",
  },
  {
    id: 4,
    name: "Printing",
    link: "/#",
  },
  {
    id: 1,
    name: "Installaion",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-orange-400 dark:text-white duration-200 relative  z-40">
      {/* upper Navbar */}
      <div className="bg-orange/40 py-4 ">
        <div className="container flex justify-between items-center ml-18">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="logo" className="w-10 " />
              BCEAN
            </a>
          </div>
          {/*search bar and order button */}

          <div>
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[300px] border-radius-10px sm:w-[200px] group-hover:w-[300px] transition-all
                duration-300 px-2 py-1 focus:outline-none focus:border-1 
text-black rounded-lg
                focus:border-primary dark:border-gray-500 dark:bg-white"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
          {/* order button */}
          <button
            onClick={() => handleOrderPopup()}
            className="  to-secondary transition-all duration-200 bg-black text-white py-1 px-5  rounded-full flex items-center gap-3 group"
          >
            <span className="group-hover:block transition-all duration-200">
              Order
            </span>
            <FaCartShopping className="text-xl bg-black-500 text-white drop-shadow-sm cursor-pointer" />
          </button>
          {/* Darkmode Switch */}
          {/* <div>
            <DarkMode />
          </div> */}
        </div>
      </div>
      {/* upper Navbar */}
      <div className="dark:bg-white text-black flex justify-center">
        <ul className="sm:flex font-mono  items-center gap-16">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary  duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
