import React, { useState } from "react";
import clientBg from "../../assets/clients.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import client1 from "../../assets/client-1.png";
import client2 from "../../assets/client-2.png";
import client3 from "../../assets/client-1.png";
import client4 from "../../assets/client-1.png";
import client5 from "../../assets/client-1.png";
import { div } from "framer-motion/client";

const ClientSection = () => {
  const clients = [
    {
      img: client1,
      caption: "Bangur Cement ",
      subtitle: "(Residence in Kolkata)",
    },
    { img: client2, caption: "Client 2 caption here" },
    { img: client3, caption: "Client 3 caption here" },
    { img: client4, caption: "Client 4 caption here" },
    { img: client5, caption: "Client 5 caption here" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="cleintsection relative bg-center bg-cover h-[800px] z-60 "
      style={{ backgroundImage: `url(${clientBg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="client-slider-main relative max-w-7xl m-auto h-full z-10 ">
        <div className="relative w-full h-full flex justify-between items-center">
          {/* Left Content */}
          <div className="secTitles text-start w-full z-20">
            <h2 className="section-title text-7xl text-white translate-x-8">
              Client
            </h2>
            <p className="text-4xl font-bold leading-0 text-white">Clients</p>
            <p className="text-sm text-[#FFFFFF8F] mt-10">
              Amet minim mollit non deserunt ullamco est sit
            </p>
            <p className="text-sm text-[#FFFFFF8F]">
              aliqua dolor do amet sint. Velit officia officia
            </p>
          </div>

          {/* Right Content (Swiper) */}
          <div className="relative w-full h-full flex flex-col justify-center items-center">
            <div className="slider-vertical flex justify-center items-center">
              <div className="h-full w-[70%] overflow-hidden">
                <Swiper
                  direction="vertical"
                  slidesPerView={3}
                  centeredSlides={true}
                  spaceBetween={80}
                  loop={true}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  modules={[Autoplay]}
                  className="h-full"
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      // desktops
                      slidesPerView: 3,
                      spaceBetween: 80,
                    },
                    1440: {
                      // large screens
                      slidesPerView: 3,
                      spaceBetween: 100,
                    },
                  }}
                >
                  {clients.map((client, index) => (
                    <SwiperSlide
                      key={index}
                      className="flex flex-col items-center justify-center transition-all duration-300"
                    >
                      <img
                        src={client.img}
                        alt={`Client ${index + 1}`}
                        className="max-h-28 max-w-60 object-contain transition-all duration-300"
                      />

                      {/* Show caption + subtitle only for active slide */}
                      {activeIndex === index && (
                        <div className="absolute -bottom-15 text-center">
                          <p className="text-white text-xl font-medium">
                            {client.caption}
                          </p>
                          {client.subtitle && (
                            <p className="subtitle text-sm text-[#494949] mt-1">
                              {client.subtitle}
                            </p>
                          )}
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
