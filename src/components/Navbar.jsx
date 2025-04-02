import React, { useState, useEffect, useRef, Fragment } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import ImgProvider from "./ImgProvider";
import NavbarModal from "../MiniComponents/NavbarModal";

const Navbar = () => {
  const [model, setModel] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <Fragment>
      <div className="bg-transparent p-4 flex justify-between items-center md:mx-15 relative">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <div className="flex items-center">
              <img src={ImgProvider.Logo} alt="Logo" className="w-10 h-10" />
              <h2 className="text-xl font-bold">
                Snappy<span className="text-blue-500">Buy</span>
              </h2>
            </div>
          </Link>
          <ul className="space-x-6 mx-12 items-center hidden md:flex">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </li>

            <li className="relative">
              <button className="text-gray-700 hover:text-blue-500">
                Categories
              </button>
              <ul className="absolute flex flex-col bg-white shadow-md rounded-lg mt-2 w-40 p-2 z-50">
                <li>
                  <Link
                    to="/cat/electronics"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cat/fashion"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cat/home"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Home Appliances
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <button className="text-gray-700 hover:text-blue-500">
                Products
              </button>
              <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-md rounded-lg mt-2 w-40 p-2 z-50">
                <li>
                  <Link
                    to="/products/mobiles"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Mobiles
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/laptops"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/accessories"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/about" className="text-gray-700 hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </Link>
            </li>
            <li className="md:hidden">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center space-x-5">
          <button className="cursor-pointer">
            <IoSearch />
          </button>
          <button className="cursor-pointer">
            <MdOutlineShoppingBag />
          </button>
          <Link to="/login" className="hidden md:inline-block cursor-pointer">
            <button className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Login
            </button>
          </Link>
          <button className="cursor-pointer" onClick={() => setModel(!model)}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      {!model && <NavbarModal />}
    </Fragment>
  );
};

export default Navbar;
