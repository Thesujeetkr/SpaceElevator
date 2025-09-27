import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Products",
    dropdown: [
      { name: "Product 1", path: "/products/product-1" },
      { name: "Product 2", path: "/products/product-2" },
    ],
  },
  {
    name: "Gallery",
    dropdown: [
      { name: "Photos", path: "/gallery/photos" },
      { name: "Videos", path: "/gallery/videos" },
    ],
  },
  { name: "Contact us", path: "/contact" },
];

const Header = () => {
  useGSAP(() => {
    gsap.from(".nav-link", {
      y: 30,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power4.out",
    });

    gsap.from(".nav-btn", {
      y: 30,
      opacity: 0,
      duration: 0.4,
      delay: 0.5,
      ease: "power4.out",
    });
  }, []);

  return (
    <header
      id="header"
      className="text-white absolute z-20 w-full border-b-1 border-[1px solid #FFFFFF21] sm:px-10 md:px-10 lg:px-20 "
    >
      <div className="head-overlay bg-[linear-gradient(180deg,_#000000_12.02%,_rgba(0,0,0,0)_100%)] absolute top-0 left-0 h-[180px] w-full z-1"></div>

      <div className="relative z-30 max-w-7xl mx-auto  py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="logo flex items-center space-x-2">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-8 lg:h-full sm:h-10 md:h-12 "
            />
          </Link>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center text-sm lg:text-base">
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div key={index} className="relative group">
                <button className="hover:text-gray-400 nav-link">
                  {item.name} ▾
                </button>
                <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-md min-w-[10rem] md:min-w-[12rem]">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                to={item.path}
                className="hover:text-gray-400 nav-link"
              >
                {item.name}
              </Link>
            )
          )}

          {/* Button */}
          <div>
            <Link
              to="/contact"
              className="nav-btn bg-[#303030] text-white px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full hover:bg-[#b6b6b6b2] "
            >
              Get in Touch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
