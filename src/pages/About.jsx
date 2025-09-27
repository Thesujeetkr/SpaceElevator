import React from 'react'
import Button from "../components/sections/Button";
import liftImg from '../assets/img/aboutimg1.jpg'
import liftImg2 from '../assets/img/aboutimg2.jpg'


const About = () => {
  return (
    <div>
      <div className="section2 md:px-5 ">
        <div className="fourline max-w-7xl mx-auto">
          <div className="fline"></div>
          <div className="fline"></div>
          <div className="fline"></div>
          <div className="fline"></div>
        </div>
        <div className=" relative flex flex-col gap-10 md:flex-row max-w-7xl mx-auto ">
          <div className="relative flex md:w-1/2 py-30">
            <div className="extext absolute -rotate-90 top-60 -left-16">
              <h2 className="text-7xl font-bold leading-[82px]">7+</h2>
              <p className="text-3xl">Year Experience</p>
            </div>

            <div className="img-2 absolute bottom-30 z-1">
              <img
                src={liftImg2}
                className="w-auto max-w-xs"
                alt="About 2"
              />
            </div>

            <div className="img-1 absolute right-0 ">
              <img
                src={liftImg}
                className="w-full h-full object-cover"
                alt="About 1"
              />
            </div>
          </div>

          <div className="relative z-3 md:w-1/2 p-10 py-30">
            <div className="relative w-fit">
              <h2 className="section-title text-5xl -translate-y-3 translate-x-5">
                Who We Are
              </h2>

              <div className="relative -translate-y-10">
                <div className="bline absolute w-[4px] top-1/2 -translate-y-1/2 h-[20px] "></div>
                <h2 className="text-2xl border-l pl-4 py-2">Who We Are</h2>
              </div>
            </div>

            <h2 className="text-4xl mb-10">
              Moving People,{" "}
              <span className="blue-gradient">Building Trust.</span>
            </h2>
            <p className="text-[#FFFFFF87] mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-[#FFFFFF87] mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-[#FFFFFF87] mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliq.
            </p>

            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About