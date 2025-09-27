import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { IoMdClose } from "react-icons/io";
import videoImg from '../../assets/img/videoimg.png'
import playIcon from '../../assets/img/play.svg'


const VideoSection = () => {
  const rippleRef = useRef([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    rippleRef.current.forEach((circle, i) => {
      gsap.fromTo(
        circle,
        { scale: 0.5, opacity: 0.6 },
        {
          scale: 1.5,
          opacity: 0,
          duration: 2,
          ease: "power2.out",
          repeat: -1,
          repeatDelay: 0.8,
          delay: i * 0.6,
        }
      );
    });
  }, []);

  return (
    <div className="videoParent relative w-full h-[100%] mx-auto overflow-hidden rounded-2xl">
      <img
        src={videoImg}
        alt="Video Thumbnail"
        className="w-full h-auto object-cover rounded-2xl"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (rippleRef.current[i] = el)}
            className="absolute w-[120px] h-[120px] rounded-full border-8 border-white opacity-0"
          ></div>
        ))}

        <button
          onClick={() => setIsOpen(true)}
          className="relative flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg z-10 hover:scale-110 transition-all cursor-pointer "
          aria-label="Play Video"
        >
          <img src={playIcon} alt="Play" />
        </button>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
          <div className="relative w-[90%] max-w-4xl bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition"
            >
             <IoMdClose className="text-black cursor-pointer"/>
            </button>

            <iframe
              className="w-full h-[700px] rounded-xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
              title="Video Player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
