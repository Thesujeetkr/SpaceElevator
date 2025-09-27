import React, { useState, useEffect } from "react";
import ElevatorButton from "./ElevatorButton";
import { motion, AnimatePresence } from "framer-motion";
import star from "../../assets/img/star.png";
import quote from '../../assets/img/quotes.png'

const testimonials = [
  {
    text: "The elevator is smooth, silent, and reliable. Installation was quick, and customer service was outstanding. Truly a premium experience throughout.",
    subtext: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia officia",
    name: "Elisa Dishuza",
    role: "Manager",
    stars: 5,
  },
  {
    text: "Amazing quality and durability. Our clients love the premium feel. Highly recommended!",
    subtext: "Velit officia officia, nulla pariatur. Occaecat cupidatat non proident.",
    name: "Rohit Sharma",
    role: "Architect",
    stars: 4,
  },
  {
    text: "Seamless installation and great after-sales support. Definitely worth the investment.",
    subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Sophia Lee",
    role: "Business Owner",
    stars: 5,
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "up") {
      setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    } else {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="testimonial-main" className="relative w-full py-30 max-w-7xl mx-auto">
      <div className="secTitles text-center mb-20">
        <h2 className="section-title text-7xl">Trusted by Many</h2>
        <p className="text-4xl font-bold leading-0">Testimonials</p>
      </div>
      <div className="circle-5"></div>
      <div className="relative flex gap-10 justify-center">
        <ElevatorButton onClick={handleClick} />
        <div id="testiCard" className="relative testimonial w-[70%] p-10 overflow-hidden">
          <div className="absolute w-[30%] right-10">
            <img src={quote} alt="quotes" />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between h-full"
            >
              <div className="testiCard w-[80%]">
                <p className="text-1 text-2xl leading-10">{testimonials[index].text}</p>
                <p className="text-2 text-[#FFFFFF94] w-[70%] mt-5">{testimonials[index].subtext}</p>
              </div>
              <div>
                <h2 className="text-2xl ">{testimonials[index].name}</h2>
                <p className="text-3 text-[#FFFFFF94]">{testimonials[index].role}</p>
                <div className="py-5 flex items-center gap-8">
                  <div className="w-[80%] bg-[#313131] h-[1px] line"></div>
                  <div className="flex stars w-[20%]">
                    {Array.from({ length: testimonials[index].stars }).map((_, i) => (
                      <img key={i} src={star} alt="star" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
