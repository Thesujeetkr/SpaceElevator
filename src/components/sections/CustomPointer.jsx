import React, { useEffect, useRef, useState } from "react";

const CustomPointer = () => {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const speed = 0.15; // smoothness

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  // Link & button hover effects
  useEffect(() => {
    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[99999] pointer-events-none"
    >
      {/* Outer Ring */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white opacity-70 
        ${hovering ? "w-16 h-16" : "w-10 h-10"} 
        transition-all duration-300`}
      ></div>

      {/* Inner Dot */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white 
        ${hovering ? "w-6 h-6" : "w-3 h-3"} 
        transition-all duration-300`}
      ></div>
    </div>
  );
};

export default CustomPointer;
