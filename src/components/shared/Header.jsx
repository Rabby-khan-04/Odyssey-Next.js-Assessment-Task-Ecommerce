"use client";
import Image from "next/image";
import logo from "@/../public/logo-black.png";
import Link from "next/link";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import HoverEffectText from "./HoverEffectText";
import NavLink from "./NavLink";
import MobileMenu from "../header/MobileMenu";
import { navLinks } from "@/constants/navLinks";
import AuthButton from "../header/AuthButton";
import UserDropdown from "../header/UserDropdown";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const { user } = useAuth();
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
      <div className="py-2.5 px-0 lg:px-10 border-b">
        <div className="main-container grid grid-cols-12">
          {/* Navigation Menu */}
          <nav className="col-span-5 text-left self-center hidden lg:block">
            <ul className="flex items-center justify-start gap-4 xl:gap-6 text-lg xl:text-2xl font-extrabold">
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
          <div className="col-span-5 md:col-span-3 lg:col-span-2 self-center">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>

          {/* Auth Links and Dropdown */}
          <div className="col-span-7 md:col-span-9 lg:col-span-5 self-center flex items-center justify-end gap-4">
            {/* Desktop Auth Links and Dropdown */}
            {user ? <UserDropdown /> : <AuthButton />}

            {/* Mobile Dropdow and Auth Links */}
            <div className="lg:hidden max-lg:flex max-lg:justify-end">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
