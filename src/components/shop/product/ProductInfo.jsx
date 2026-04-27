"use client";

import { IconStar } from "@tabler/icons-react";
import activeCircle from "@/../public/active-circle.svg";
import Image from "next/image";
import SizeVarient from "./SizeVarient";
import ColorSelector from "./ColorSelector";
import Quantity from "./Quantity";
import CustomBtn from "@/components/shared/CustomBtn";
import toast from "react-hot-toast";
import PaymentSecurity from "./PaymentSecurity";
import ServiceBlock from "./ServiceBlock";

const ProductInfo = (props) => {
  const handleAddToCart = () => {
    toast.success("Successfully Added to Cart!!");
  };
  const handleBuyNow = () => {
    toast.success("Successfully Purched the Product!!");
  };
  return (
    <div className="space-y-5">
      <div className="">
        <h1 className="text-[clamp(1.8rem,2vh,2rem)] font-medium text-dark-gray">
          {props.title}
        </h1>
      </div>

      <div className="cursor-pointer flex items-center justify-start gap-2">
        <div className="flex items-center gap-0.5">
          <IconStar size={18} className="text-[#FFB607]" />
          <IconStar size={18} className="text-[#FFB607]" />
          <IconStar size={18} className="text-[#FFB607]" />
          <IconStar size={18} className="text-[#FFB607]" />
          <IconStar size={18} className="text-[#FFB607]" />
        </div>
        <p className="text-light-gray"> No reviews</p>
      </div>

      <div className="">
        <div className="flex items-center gap-2">
          <span className="text-[clamp(2.2rem,3vh,2.5rem)] text-dark-gray font-semibold">
            ${props?.pricing?.current}.00
          </span>{" "}
          <span className="text-[clamp(1.25rem,1.5vh,1.4rem)] text-light-gray line-through">
            ${props?.pricing?.original}.00
          </span>
        </div>
        <p className="text-xs text-light-gray">
          Tax included. Shipping calculated at checkout.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Image src={activeCircle} size="15" alt="active icon" />
        <span className="text-light-gray">
          {props?.inventory?.stock} in stock
        </span>
      </div>
      <div className="h-px bg-[#cdcdcd]"></div>
      <div className="">
        <p className="text-light-gray">
          Care for fiber: 30% more recycled polyester. We label garments
          manufactured using environmentally friendly technologies and raw
          materials with the Join Life label.
        </p>
      </div>

      <div className="">
        <SizeVarient sizes={props?.variants?.sizes} />
      </div>

      <div className="">
        <ColorSelector colors={props?.variants?.colors} />
      </div>

      <div className="">
        <Quantity />
      </div>

      <div className="flex items-center gap-5">
        <span onClick={handleAddToCart}>
          <CustomBtn text="Add To Cart" variant="secondary" />
        </span>
        <span onClick={handleBuyNow}>
          <CustomBtn text="Buy Now" variant="outline" />
        </span>
      </div>

      <div className="h-px bg-[#cdcdcd]"></div>

      <div className="">
        <div className="flex items-center pt-2 text-light-gray">
          <h6 className="min-w-20">Delivery: </h6>
          <p>Estimated delivery time: {props?.shipping}</p>
        </div>
        <div className="flex items-center pt-2 text-light-gray">
          <h6 className="min-w-20">Returns: </h6>
          <p>{props?.returns}</p>
        </div>
        <div className="flex items-center pt-2 text-light-gray">
          <h6 className="min-w-20">Sku: </h6>
          <p>{props?.inventory?.sku}</p>
        </div>
      </div>

      <div className="">
        <PaymentSecurity />
      </div>

      <div className="">
        <ServiceBlock />
      </div>
    </div>
  );
};

export default ProductInfo;
