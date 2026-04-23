"use client";

import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>This is Page component</h1>
    </div>
  );
};

export default Page;
