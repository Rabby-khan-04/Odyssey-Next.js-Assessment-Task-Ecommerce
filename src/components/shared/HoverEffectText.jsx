"use client";

import { IconSparkles2Filled } from "@tabler/icons-react";
import { useState } from "react";

const HoverEffectText = ({ text, isActive = false }) => {
  const [styles, setStyles] = useState([]);

  const generateStyles = () => {
    const newStyles = text.split("").map(() => {
      const x = (Math.random() * 8 - 4).toFixed(2);
      const y = (Math.random() * 20 - 10).toFixed(2);
      const r = (Math.random() * 30 - 15).toFixed(2);

      return {
        transform: `translate(${x}%, ${y}%) rotate(${r}deg)`,
      };
    });

    setStyles(newStyles);
  };

  const resetStyles = () => {
    setStyles([]);
  };

  return (
    <div
      className="inline-flex items-center cursor-pointer"
      onMouseEnter={generateStyles}
      onMouseLeave={resetStyles}
    >
      {isActive ? (
        <span className="mr-2">
          <IconSparkles2Filled size={20} />
        </span>
      ) : null}
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-300 ease-out"
          style={{
            ...styles[i],
            transformOrigin: "50% 50%",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      {isActive ? (
        <span className="ml-2">
          <IconSparkles2Filled size={20} />
        </span>
      ) : null}
    </div>
  );
};

export default HoverEffectText;
