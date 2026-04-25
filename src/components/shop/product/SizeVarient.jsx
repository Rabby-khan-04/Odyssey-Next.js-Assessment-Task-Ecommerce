"use client";

import { useState } from "react";

const SizeVarient = ({ sizes = [] }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="space-y-2">
      {/* Header */}
      <h6 className="">
        <span className="text-dark-gray text-lg font-semibold">Size: </span>{" "}
        <span className="text-sm text-light-gray">{selectedSize}</span>
      </h6>

      {/* Options */}
      <div className="flex gap-2 flex-wrap">
        {sizes.map((size) => (
          <label
            key={size}
            className={`
              cursor-pointer px-4 py-2 border rounded-md text-sm
              transition
              ${
                selectedSize === size
                  ? "bg-black text-background border-black"
                  : "bg-background text-black border-gray-300 hover:border-black"
              }
            `}
          >
            <input
              type="radio"
              name="size"
              value={size}
              className="hidden"
              checked={selectedSize === size}
              onChange={() => setSelectedSize(size)}
            />
            {size}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SizeVarient;
