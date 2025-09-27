import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/arrow.svg";
import BlueArrow from "../../assets/blue-arrow.svg";

const Button = ({ to = "/", label = "Know More", variant = "white" }) => {
  return (
    <Link
      to={to}
      className={`group relative inline-flex items-center gap-2 h-[40px] pl-4 pr-2 mt-6
             rounded-full font-medium text-[14px]
             overflow-hidden whitespace-nowrap
             border transition-all duration-300 ease-in-out
             hover:shadow-[0px_4px_20.4px_0px_#136ADD80]
             hover:border-0 hover:pl-6 justify-between
             ${
               variant === "white"
                 ? "text-white border-white hover:text-white"
                 : "text-black border-black hover:text-white"
             }
             hover:bg-gradient-to-r hover:from-[#1A78F4] hover:to-[#004096]
             hover:border-transparent `}
    >
      {/* Button text */}
      <span className="relative z-10 ">{label}</span>

      {/* Icon wrapper */}
      <span className="relative z-10 flex items-center justify-center w-[28px] h-[28px] bg-white rounded-full transition-all duration-300 ease-in-out">
        {/* Default arrow */}
        <img
          src={Arrow}
          alt="Arrow"
          className="w-[10px] h-[10px] object-cover transition-opacity duration-300 group-hover:hidden"
        />
        {/* Blue arrow (rotates slowly) */}
        <img
          src={BlueArrow}
          alt="Blue Arrow"
          className="w-[16px] h-[16px] object-cover hidden transform transition-transform duration-700 ease-in-out group-hover:block group-hover:rotate-45 "
        />
      </span>
    </Link>
  );
};

export default Button;
