"use client";

import { useState } from "react";

export default function ColorSelector({ colors = [] }) {
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name);

  return (
    <div className="space-y-2">
      {/* Title */}

      <h6 className="">
        <span className="text-dark-gray text-lg font-semibold">Color: </span>{" "}
        <span className="text-sm text-light-gray">{selectedColor}</span>
      </h6>

      {/* Swatches */}
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color.name}
            type="button"
            onClick={() => setSelectedColor(color.name)}
            disabled={color.disabled}
            className={`w-8 h-8 rounded-full border transition
              ${
                selectedColor === color.name
                  ? "ring-2 ring-black ring-offset-2"
                  : ""
              }
              ${color.disabled ? "opacity-40 cursor-not-allowed" : ""}
            `}
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
    </div>
  );
}
