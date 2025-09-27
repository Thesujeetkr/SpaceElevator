import React, { useState, useEffect } from "react";
import Banner from "../../assets/Oursolutions.png";
import { Link } from "react-router-dom";
import Arrow from "../../assets/arrow.svg";
import standHead from '../../assets/img/accordtop.png'
import blueArrow from '../../assets/img/barrow.png'

const OurSolution = () => {
  const itemHeight = 100;
  const accardHeight = 100;

  const [activeIndex, setActiveIndex] = useState(1);
  const [accardTop, setAccardTop] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0); 

  const accordionData = [
    {
      id: 1,
      title: "SITE MEETING",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere omnis corrupti eaque sint atque nam minus.",
      link: "/site-meeting",
    },
    {
      id: 2,
      title: "PROJECT PLANNING",
      description:
        "Comprehensive planning phase for your construction project with detailed timelines and resource allocation.",
      link: "/project-planning",
    },
    {
      id: 3,
      title: "DESIGN REVIEW",
      description:
        "Review and approval of architectural designs, blueprints, and technical specifications.",
      link: "/design-review",
    },
    {
      id: 4,
      title: "CONSTRUCTION",
      description:
        "Active construction phase with regular monitoring and quality assurance checks.",
      link: "/construction",
    },
    {
      id: 5,
      title: "INSPECTION",
      description:
        "Thorough inspection of completed work to ensure compliance with safety and quality standards.",
      link: "/inspection",
    },
    {
      id: 6,
      title: "HANDOVER",
      description:
        "Final project handover with documentation, warranties, and maintenance guidelines.",
      link: "/handover",
    },
  ];
  const currentIndex = accordionData.findIndex(
    (item) => item.id === activeIndex
  );
  const direction = currentIndex > previousIndex ? "down" : "up";
  const containerPaddingTop = 80;
  const handleAccordionClick = (id, index) => {
    const centeredTop =
      containerPaddingTop +
      index * itemHeight +
      itemHeight / 2 -
      accardHeight / 2;

    setPreviousIndex(
      accordionData.findIndex((item) => item.id === activeIndex)
    );
    setActiveIndex(id);
    setAccardTop(centeredTop);
  };

  useEffect(() => {
    const index = 0;
    const centeredTop =
      containerPaddingTop +
      index * itemHeight +
      itemHeight / 2 -
      accardHeight / 2;
    setAccardTop(centeredTop);
  }, []);

  return (
    <div id="ourSolution" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="blackshade-5"></div>
      {/* <div className="blackshade2 "></div> */}
      <div className="relative w-full pb-40 max-w-7xl mx-auto pt-10 z-[9999] ">
        <div className="secTitles text-center mb-20">
          <h2 className="section-title text-7xl">Our Solutions</h2>
          <p className="text-4xl font-bold leading-0">
            Our <span className="">Solutions</span>
          </p>
        </div>

        <div className="relative flex justify-content-center top-14">
          {/* Number Column */}
          <div className="relative py-20 acstand w-[145px] bg-gray-700 ml-40">
            <div className="absolute w-100 left-0 -top-16">
              <img src={standHead} alt="accord top" />
            </div>
            <div className="absolute -bottom-10 -left-[65px] flex flex-col justify-center items-center">
              <div className="w-[183px] h-[15px] bg-[#171717] opacity-[.8] "></div>
              <div className="w-[200px] h-[15px] bg-[#171717] opacity-[.8] "></div>
              <div className="w-[274px] h-[15px] bg-[#171717] opacity-[.8] "></div>
            </div>

            {/* Dynamic topnum showing active number */}
            <div className="topnum flex items-center gap-3 absolute left-14 -top-7 transition-transform duration-300">
              <p className="text-xl">{activeIndex}</p>
              <img
                src={blueArrow}
                className={`h-[20px] transform transition-transform duration-300 ${
                  direction === "down" ? "rotate-0" : "rotate-180"
                }`}
                alt="arrow"
              />
            </div>

            <div className="relative flex flex-col items-center justify-center z-2">
              {accordionData.map((item, index) => (
                <div key={item.id} className="h-[100px] flex items-center">
                  <div
                    className={`accordNumber w-[50px] h-[50px] rounded-[8px] flex items-center justify-center cursor-pointer transition-all duration-200 ${
                      activeIndex === item.id ? "accordNumberActive" : ""
                    }`}
                    onClick={() => handleAccordionClick(item.id, index)}
                  >
                    {item.id}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating accard */}
          {activeIndex !== null && (
            <div
              className="accard absolute w-[90%] left-30 rounded-full h-[100px] bg-gray-600 z-1 flex justify-end items-end pr-10 transition-all duration-300"
              style={{ top: `${accardTop}px` }}
            >
              {accordionData
                .filter((item) => item.id === activeIndex)
                .map((item) => (
                  <div
                    key={item.id}
                    className="innerContext flex h-full justify-between items-center w-[80%]"
                  >
                    <span>
                      <h3 className="text-xl font-bold text-black ">
                        {item.title}
                      </h3>
                    </span>
                    <span className="w-[50%] text-black ">
                      <p>{item.description}</p>
                    </span>
                    <span className="flex flex-row">
                      <Link
                        to={item.link}
                        className="flex gap-3 items-center text-black  font-semibold"
                      >
                        Find your Lift
                        <span>
                          <img src={Arrow} alt="arrow icon" />
                        </span>
                      </Link>
                    </span>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      {/* <div className="blackshadow"></div> */}
    </div>
  );
};

export default OurSolution;
