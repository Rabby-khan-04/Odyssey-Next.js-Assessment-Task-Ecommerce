"use client";

import { useState } from "react";

const Quantity = () => {
  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setValue((prev) => (prev <= 1 ? 1 : prev - 1));
  };

  return (
    <div className="flex items-center gap-3 border border-border hover:border-dark-gray duration-300 rounded-md px-3 py-2 w-fit">
      <button
        onClick={handleDecrement}
        className="w-8 h-8 text-xl text-light-gray cursor-pointer"
      >
        -
      </button>

      <input
        type="number"
        value={value}
        readOnly
        className="w-12 text-center outline-none bg-transparent 
             [appearance:textfield]
             [&::-webkit-outer-spin-button]:appearance-none
             [&::-webkit-inner-spin-button]:appearance-none"
      />

      <button
        onClick={handleIncrement}
        className="w-8 h-8 text-xl text-light-gray cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
