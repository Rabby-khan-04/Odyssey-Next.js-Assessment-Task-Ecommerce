import { IconHeart } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = (props) => {
  return (
    <div className="overflow-hidden rounded-[10px] border border-[#222] bg-[#f7f7f7]">
      <div className="relative overflow-hidden">
        <div className="border-b border-[#222] flex items-center justify-center group flex-wrap">
          <div className="absolute z-10 top-5 right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 ease-out delay-100">
            <IconHeart className="cursor-pointer" />
          </div>
          <Link
            href={`/shop/${props.id}`}
            className="block relative w-full aspect-4/5"
          >
            {/* Image 1 */}
            <Image
              src={props?.media?.images[0]}
              alt={props.title}
              fill
              className="object-cover absolute inset-0 transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0"
              sizes="100vw"
            />

            {/* Image 2 */}
            <Image
              src={props?.media?.images[1]}
              alt={props.title}
              fill
              className="object-cover absolute inset-0 transition-opacity duration-500 ease-out opacity-0 group-hover:opacity-100"
              sizes="100vw"
            />
          </Link>
        </div>
        <div className="p-4 pt-3 text-center">
          <h2 className="text-xl font-semibold text-black">{props.title}</h2>
          <p className="text-lg">
            <span className="font-semibold text-black">
              ${props.pricing.current}.00
            </span>{" "}
            <span className="text-[#535353] line-through">
              ${props?.pricing?.original}.00
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
