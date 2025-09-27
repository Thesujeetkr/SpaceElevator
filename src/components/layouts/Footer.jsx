import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoIosArrowRoundForward, IoIosArrowUp } from "react-icons/io";
import logo from "../../assets/logo.png";

export default function Footer() {
  const navLinks = {
    Products: ["Lorem", "Lorem", "Lorem", "Lorem"],
    Insights: ["Lorem", "Lorem", "Lorem", "Lorem"],
    Services: [
      "Professional Services",
      "Managed Service",
      "Information Security",
      "Consulting Services",
    ],
  };

  const socialLinks = [
    { icon: <FaFacebookF size={20} />, href: "#" },
    { icon: <FaInstagram size={20} />, href: "#" },
    { icon: <FaXTwitter size={20} />, href: "#" },
    { icon: <FaYoutube size={20} />, href: "#" },
  ];

  const [expanded, setExpanded] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black to-[#050a1a] text-gray-300 z-10">
      <div className="circle-shadow1"></div>
      <div className="circle-shadow2"></div>
      <div className="circle-shadow3"></div>
      <div className=" md:px-12 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-30">
          {/* Logo + Description */}
          <div className="flex-1 max-w-md ">
            <img src={logo} alt="Space Elevators" className="h-14 mb-4" />
            <p className="text-sm leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia amet minim mollit non deserunt ullamco
              est sit aliqua dolor.
            </p>
            <div className="mt-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                className=" flex items-center h-[62px] gap-2 border border-[#313131] pl-2 pr-2 text-white w-96 rounded-full text-sm font-medium transition-all relative overflow-hidden"
              >
                <button
                  type="submit"
                  className="group relative overflow-hidden cursor-pointer w-20 h-12 rounded-full flex justify-center items-center bg-gradient-to-r from-[#1A78F4] to-[#004096]"
                >
                  <IoIosArrowRoundForward className="text-3xl absolute transition-all duration-300 transform group-hover:translate-x-6 group-hover:opacity-0" />
                  <IoIosArrowRoundForward className="text-3xl absolute transition-all duration-300 opacity-0 group-hover:opacity-100" />
                </button>
                <input
                  type="email"
                  placeholder="Subscribe to our newsletter"
                  required
                  className="flex-1 bg-transparent outline-none text-white placeholder-white"
                />
              </form>
            </div>
          </div>

          {/* Dynamic Nav Sections */}
          <div className="flex flex-1 flex-col sm:flex-row justify-between gap-8">
            {Object.entries(navLinks).map(([title, items], idx) => (
              <div key={idx}>
                <h3 className="text-white font-semibold mb-4">
                  {title.toUpperCase()}
                </h3>
                <ul className="space-y-2 text-sm">
                  {items.map((item, i) => (
                    <li key={i} className="hover:text-white cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-center w-full border-t border-gray-700">
        <div className="footerbtt w-full max-w-7xl py-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p className="text-[16px]">© Copyright 2025. All Rights Reserved.</p>

          <div className="group socialIcons flex items-center gap-8 ">
            {socialLinks.map((s, i) => (
              <div
                key={i}
                className="socialIcon w-9 h-9 flex justify-center items-center "
              >
                <a
                  href={s.href}
                  className=" hover:text-white p-2 bg-[#13192C] rounded-full hover:scale-125 transition-all"
                >
                  {s.icon}
                </a>
              </div>
            ))}
          </div>

          <p className="text-[16px]">Powered by Doors Studio</p>
        </div>
      </div>

      {/* Scroll to Top */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="socialIcon group bg-[#13192C] hover:bg-gray-700 text-white h-[46px] w-[46px] rounded-full shadow-md transition-all flex justify-center items-center cursor-pointer "
        >
          <IoIosArrowUp className="text-2xl hover:scale-125" />
        </button>
      </div>
    </footer>
  );
}
