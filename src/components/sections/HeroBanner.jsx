import React from "react";
import Banner from "../../assets/hero-banner.png";
import Arrow from "../../assets/arrow.svg";
import { Link } from "react-router-dom";
import Button from "../sections/Button";

const HeroBanner = () => {
  return (
    <div>
      <div id="heroSection"
        className="relative w-full h-screen bg-center bg-cover "
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.65)_23.56%)]"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-white text-center ">
          <div className="rec-overlay">
            <h1>
              <span className="text-white">Elevate</span> Every Floor.
            </h1>
            <p className="text-[1vw] leading-[1.8] mt-4">
              Smart. Silent. Effortless Lifts for Modern Living.
            </p>

            {/* Button */}
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
