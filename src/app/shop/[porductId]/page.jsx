"use client";

import { useParams } from "next/navigation";

const Product = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>This is Product component</h1>
    </div>
  );
};

export default Product;
