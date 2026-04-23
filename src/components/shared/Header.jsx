"use client";

import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const { user } = useAuth();

  console.log(user);
  return (
    <header>
      <h1>This is Header component</h1>
    </header>
  );
};

export default Header;
