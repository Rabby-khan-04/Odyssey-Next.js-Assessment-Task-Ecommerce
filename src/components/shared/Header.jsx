"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/../public/logo-black.png";
import Link from "next/link";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import NavLink from "./NavLink";
import MobileMenu from "../header/MobileMenu";
import { navLinks } from "@/constants/navLinks";
import AuthButton from "../header/AuthButton";
import UserDropdown from "../header/UserDropdown";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const { user, loading } = useAuth();

  const headerRef = useRef(null);

  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    if (!headerRef.current) return;

    const updateHeight = () => {
      const height = headerRef.current.offsetHeight;

      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`,
      );
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    const observer = new MutationObserver(updateHeight);
    observer.observe(headerRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => {
      window.removeEventListener("resize", updateHeight);
      observer.disconnect();
    };
  }, [user, loading]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-primary text-center">
        <Link
          href="/sale"
          className="flex items-center justify-center py-2 px-5 text-sm text-white uppercase"
        >
          <span>Unlock your discount Now</span>
          <IconArrowNarrowRight />
        </Link>
      </div>

      {/* Main Header */}
      <div className="py-2.5 px-0 lg:px-10 border-b">
        <div className="main-container grid grid-cols-12">
          {/* Navigation */}
          <nav className="col-span-5 hidden lg:block self-center">
            <ul className="flex items-center gap-4 xl:gap-6 text-lg xl:text-2xl font-extrabold">
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
              <Image loading="eager" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Auth */}
          <div className="col-span-7 md:col-span-9 lg:col-span-5 flex justify-end items-center gap-4">
            {!loading && user ? <UserDropdown /> : <AuthButton />}

            <div className="lg:hidden flex justify-end">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
