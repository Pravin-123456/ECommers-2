import React, {
  useState,
  useRef,
  useEffect,
  Fragment,
  lazy,
  Suspense,
} from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import ImgProvider from "./ImgProvider";

const NavbarModal = lazy(() => import("../MiniComponents/NavbarModal"));

const Navbar = () => {
  const [model, setModel] = useState(false);
  const modalRef = useRef(null);
  const menuButtonRef = useRef(null); // Ref for the hamburger button

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setModel(false);
      }
    };

    if (model) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [model]);

  return (
    <Fragment>
      <div className="bg-transparent p-4 flex justify-between items-center md:mx-15 relative">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img src={ImgProvider.Logo} alt="Logo" className="w-10 h-10" />
            <h2 className="text-xl font-bold">
              Snappy<span className="text-blue-500">Buy</span>
            </h2>
          </div>
        </Link>

        {/* Navigation Menu */}
        <ul className="space-x-6 mx-12 items-center hidden md:flex">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-gray-700 hover:text-blue-500">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side Icons */}
        <div className="flex justify-between items-center space-x-5">
          <button className="cursor-pointer" aria-label="Search">
            <IoSearch />
          </button>
          <button className="cursor-pointer" aria-label="Shopping Bag">
            <MdOutlineShoppingBag />
          </button>
          <Link to="/login" className="hidden md:inline-block cursor-pointer">
            <button className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Login
            </button>
          </Link>
          {/* Hamburger Menu Button */}
          <button
            ref={menuButtonRef} // Assign ref to the button
            className="cursor-pointer md:hidden"
            aria-label="Toggle Menu"
            onClick={() => setModel((prev) => !prev)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Lazy Loaded Modal */}
      {model && (
        <Suspense fallback={<span className="text-center p-4">Loading...</span>}>
          <div ref={modalRef}>
            <NavbarModal />
          </div>
        </Suspense>
      )}
    </Fragment>
  );
};

export default Navbar;
