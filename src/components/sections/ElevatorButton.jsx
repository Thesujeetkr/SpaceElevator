import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

export default function ElevatorButton({ onClick }) {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (direction) => {
    setActiveButton(direction);
    onClick(direction);

    // If you want the button to reset after 200ms, keep this
    // If you want it to stay blue until another click, remove this block
    setTimeout(() => {
      setActiveButton(null);
    }, 200);
  };

  // border gradient
  const gradientStyle = {
    background: "linear-gradient(90deg, #1079D2 0%, #7AF0FD 100%)",
  };

  return (
    <div className="elevatorBtn w-[20%] p-5">
      <div className="innerBorder py-6">
        <div className="elevbtns flex flex-col h-full gap-8 py-8 justify-center items-center">

          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0063C5" />
                <stop offset="100%" stopColor="#49C5FF" />
              </linearGradient>
            </defs>
          </svg>

          {/* UP Button */}
          <button onClick={() => handleButtonClick("up")} className="elevatorbtns">
            <div className="w-36 h-36 rounded-full black flex items-center justify-center">
              <div
                className="b-border"
                style={activeButton === "up" ? gradientStyle : {}}
              >
                <div className="b-border2 flex items-center justify-center">
                  <BiSolidUpArrow
                    className="text-6xl"
                    style={
                      activeButton === "up"
                        ? { fill: "url(#blueGradient)" }
                        : { color: "white" }
                    }
                  />
                </div>
              </div>
            </div>
          </button>

          {/* DOWN Button */}
          <button onClick={() => handleButtonClick("down")} className="elevatorbtns">
            <div className="w-36 h-36 rounded-full black flex items-center justify-center">
              <div
                className="b-border"
                style={activeButton === "down" ? gradientStyle : {}}
              >
                <div className="b-border2 flex items-center justify-center">
                  <BiSolidDownArrow
                    className="text-6xl"
                    style={
                      activeButton === "down"
                        ? { fill: "url(#blueGradient)" }
                        : { color: "white" }
                    }
                  />
                </div>
              </div>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
}
