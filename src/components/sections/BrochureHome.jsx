import React from "react";
import Button from "./Button";
import brochureImg from '../../assets/img/brochure.png'
const BrochureHome = () => {
  return (
    <div className="brochure relative w-full py-[120px] bg-[#030303]">
      <div className="blue-shadow"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        <img
          src={brochureImg}
          alt="Company brochure"
          className="w-full h-auto rounded-[30px] object-cover border border-[#0C1233]"
        />

        <div className="black-shadow-left absolute left-0 top-0 w-1/2 h-full rounded-[30px]"></div>

        <div className="absolute contentDiv flex items-start justify-center pl-12 flex-col top-0 left-0 h-full text-white w-full ">
          <h2 className="text-3xl font-medium mb-2">Our Home Brochures</h2>
          <p className="text-[#FFFFFFD6] text-sm w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusm. ctetur adipiscing elit, sed do eiusm Lorem ipsum dolor sit
            amet, consectetur adipisciLorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusm.
          </p>
          <Button label="Download Brochure"  />
        </div>
      </div>
    </div>
  );
};

export default BrochureHome;
