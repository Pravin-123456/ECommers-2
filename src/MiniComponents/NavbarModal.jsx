import React from "react";
import { Link } from "react-router-dom";

const NavbarModal = () => {
  return (
    <div className="flex flex-col text-center bg-blue-400 mx-10 rounded-xl p-5 text-white">
      <Link to={"/"} className="hover:bg-blue-300 p-1.5 rounded-sm">
        Home
      </Link>
      <Link to={"/categories"} className="hover:bg-blue-300 p-1.5 rounded-sm">
        Categories
      </Link>
      <Link to={"/products"} className="hover:bg-blue-300 p-1.5 rounded-sm">
        Products
      </Link>
      <Link to={"/about"} className="hover:bg-blue-300 p-1.5 rounded-sm">
        About
      </Link>
      <Link to={"/services"} className="hover:bg-blue-300 p-1.5 rounded-sm">
        Services
      </Link>
      <Link to={"/contact"} className="hover:bg-blue-300 p-1.5 rounded-sm">
        Contact
      </Link>
    </div>
  );
};

export default NavbarModal;
