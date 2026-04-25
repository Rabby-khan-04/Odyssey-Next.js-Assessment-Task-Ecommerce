import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }) => {
  return (
    <Link href="/shop">
      <div
        className="overflow-hidden group relative aspect-320/450
  before:content-[''] before:absolute before:h-1/2 before:w-full
  before:left-0 before:bottom-0 before:z-10 before:pointer-events-none
  before:bg-linear-to-t before:from-black/60 before:to-transparent cursor-pointer"
      >
        <Image
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 duration-300 ease-out"
        />

        <div className="absolute bottom-1/2 translate-y-1/2 left-0 right-0 z-20 text-center opacity-0 group-hover:opacity-100 duration-300 ease-out">
          <button className="size-12 bg-white text-dark-gray rounded-full flex items-center justify-center mx-auto cursor-pointer">
            <IconArrowNarrowRight size={20} />
          </button>
        </div>

        <div className="absolute bottom-8 left-8 right-8 z-20 text-center">
          <h2 className="text-2xl uppercase text-white hover:text-dark-gray">
            {category.name}
          </h2>
        </div>

        <div className="text-base text-light-gray absolute top-3 right-3 z-20">
          <p>{category.count} items</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
