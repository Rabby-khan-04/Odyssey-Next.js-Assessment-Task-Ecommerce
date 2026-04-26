import logo from "@/../public/logo-black.png";
import {
  IconBox,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconCurrencyPound,
  IconHeadphones,
  IconTruck,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import visaCard from "@/../public/visa.svg";
import masterCard from "@/../public/master.svg";
import amexCard from "@/../public/amex.svg";
import paypalCard from "@/../public/paypal.svg";
import dinersCard from "@/../public/diners.svg";

const Footer = () => {
  return (
    <footer className="bg-[#f6f6f6] pt-14 md:pt-20">
      <div className="main-container grid lg:grid-cols-4 gap-10 xl:divide-x divide-light-gray/40">
        <div className="max-xl:order-1 max-xl:col-span-2">
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-30" />
          </Link>
          <p className="text-lg text-light-gray pt-6">
            We bring you stylish, comfortable clothing made to fit your everyday
            lifestyle.
          </p>
          <div className="flex items-center gap-3 text-dark-gray mt-4">
            <p className="text-lg font-medium text-dark-gray">Follow us on:</p>
            <Link href="/">
              <IconBrandInstagram size={20} />
            </Link>
            <Link href="/">
              <IconBrandLinkedin size={20} />
            </Link>
            <Link href="/">
              <IconBrandFacebook size={20} />
            </Link>
            <Link href="/">
              <IconBrandX size={20} />
            </Link>
          </div>
        </div>

        <div className="max-lg:order-2 max-xl:order-3 max-xl:col-span-4 col-span-2 grid sm:grid-cols-3 gap-3 ">
          <div className="">
            <h4 className="text-xl font-medium text-dark-gray">Information</h4>
            <ul className="mt-4 space-y-0.5 text-lg text-light-gray font-normal">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-xl font-medium text-dark-gray">Help</h4>
            <ul className="mt-4 space-y-0.5 text-lg text-light-gray font-normal">
              <li>
                <Link href="/about">Shipping & returns</Link>
              </li>
              <li>
                <Link href="/">Track Order</Link>
              </li>
              <li>
                <Link href="/">Privacy policy</Link>
              </li>
              <li>
                <Link href="/">Terms & condition</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-xl font-medium text-dark-gray">My account</h4>
            <ul className="mt-4 space-y-0.5 text-lg text-light-gray font-normal">
              <li>
                <Link href="/about">My account</Link>
              </li>
              <li>
                <Link href="/">My cart</Link>
              </li>
              <li>
                <Link href="/">Order history</Link>
              </li>
              <li>
                <Link href="/">My wishlist</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-lg:order3 max-xl:order-2 max-xl:col-span-2">
          <p className="text-xl font-medium text-dark-gray pb-4">
            Join our newsletter and get $20 for your first order
          </p>
          <div className="">
            <Input
              id="fieldgroup-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="py-3 px-5 h-auto text-xl placeholder:text-xl"
            />
            <button className="py-2 px-4 text-xl font-medium uppercase rounded-[5px] bg-dark-gray text-white inline-block mt-5">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="main-container mt-12.5">
        <div className="border-y border-light-gray/40 py-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          <div className="flex items-center justify-start md:justify-center gap-2 md:gap-7.5">
            <IconTruck size={40} />
            <p className="text-xl font-normal text-dark-gray">Free dilivery</p>
          </div>
          <div className="flex items-center justify-start md:justify-center gap-2 md:gap-7.5">
            <IconBox size={40} />
            <p className="text-xl font-normal text-dark-gray">
              Non-contact shipping
            </p>
          </div>
          <div className="flex items-center justify-start md:justify-center gap-2 md:gap-7.5">
            <IconCurrencyPound size={40} />
            <p className="text-xl font-normal text-dark-gray">
              Money-back quarantee.
            </p>
          </div>
          <div className="flex items-center justify-start md:justify-center gap-2 md:gap-7.5">
            <IconHeadphones size={40} />
            <p className="text-xl font-normal text-dark-gray">feather-shield</p>
          </div>
        </div>
      </div>

      <div className="py-4 flex max-lg:flex-col items-center justify-between main-container">
        <p className="text-base lg:text-lg text-dark-gray font-normal text-center">
          Copyright © 2026 Nextcart. all rights reserved.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-2">
          <p className="text-base lg:text-lg text-dark-gray font-medium">
            Payment accepted:
          </p>
          <div className="flex items-center gap-px">
            <Image src={visaCard} alt="Visa Card" size={36} />
            <Image src={masterCard} alt="Master Card" size={36} />
            <Image src={amexCard} alt="American Express Card" size={36} />
            <Image src={paypalCard} alt="Paypal Card" size={36} />
            <Image src={dinersCard} alt="Diners Card" size={36} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
