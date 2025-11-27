import { useEffect } from "react";
import "./cursor.css";

export const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", move);

    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* <svg id="cursor" className="cursor" width="100" height="100">
        <defs>
          <filter id="cursor-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="fractalNoise" result="warp" baseFrequency="0.15" />
            <feOffset result="warpOffset" />
            <feDisplacementMap
              scale="40"
              in="SourceGraphic"
              in2="warpOffset"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <circle cx="50" cy="50" r="10" />
      </svg>     */}
      <svg id="cursor" className="cursor" width="50" height="50">
          <defs>
              <filter 
                id="cursor-filter" 
                x="-50%" 
                y="-50%" 
                width="200%" 
                height="200%" 
                filterUnits="objectBoundingBox"
              >
                <feTurbulence 
                  type="fractalNoise" 
                  result="warp" 
                  baseFrequency="0.15"
                />
                <feOffset result="warpOffset" />
                <feDisplacementMap 
                  scale="40" 
                  in="SourceGraphic" 
                  in2="warpOffset" 
                  xChannelSelector="R" 
                  yChannelSelector="G" 
                />
              </filter>
          </defs>
          <circle 
            className="cursor__inner" 
            cx="25" 
            cy="25" 
            r="10.000000000000005" 
            fill="none"
          />
      </svg>
    </>


  );
};
