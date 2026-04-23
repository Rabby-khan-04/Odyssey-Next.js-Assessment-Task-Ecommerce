"use client";
import Image from "next/image";
import logo from "@/../public/logo-black.png";
import Link from "next/link";
import { Button } from "../ui/button";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import HoverEffectText from "./HoverEffectText";
import NavLink from "./NavLink";

const Header = () => {
  const navLinks = [
    {
      label: "Home",
      path: "/",
      color: "#2760f6",
    },
    {
      label: "About Us",
      path: "/about",
      color: "#6d13ec",
    },
    {
      label: "Shop",
      path: "/shop",
      color: "#32c992",
    },
    {
      label: "Sale",
      path: "/sale",
      color: "#f48813",
    },
  ];
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-primary text-center">
        <Link
          href="/sale"
          className="flex items-center justify-center py-2 px-5 text-sm text-white uppercase"
        >
          <span>Unlock your discount Now</span>
          <span>
            <IconArrowNarrowRight />
          </span>
        </Link>
      </div>
      {/* Main Header */}
      <div className="py-2.5 px-10 border-b">
        <div className="main-container grid grid-cols-12">
          {/* Navigation Menu */}
          <nav className="col-span-5 text-left self-center">
            <ul className="flex items-center justify-start gap-6 text-2xl font-extrabold">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <NavLink path={item.path} color={item.color}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logo */}
          <div className="col-span-2 text-center">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>

          {/* Auth Links and Dropdown */}
          <div className="col-span-5 self-center flex items-center gap-6 justify-end">
            <Link href="/sign-in">
              <Button className="text-2xl p-5 rounded-[24px] h-auto font-extrabold cursor-pointer">
                <HoverEffectText text="Sign In" />
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                className="text-2xl p-5 rounded-[24px] h-auto font-extrabold cursor-pointer"
                variant="secondary"
              >
                <HoverEffectText text="Sign Up" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
