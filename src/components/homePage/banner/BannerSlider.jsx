import Image from "next/image";
import CustomBtn from "../../shared/CustomBtn";
import Link from "next/link";

const BannerSlider = (props) => {
  return (
    <div className="w-full relative">
      {/* Desktop */}
      <Image
        src={props.image}
        alt={props.title}
        className="w-full hidden md:block"
        priority
      />

      {/* Mobile */}
      <Image
        src={props.mobileImg}
        alt={props.title}
        className="w-full block md:hidden"
        priority
      />

      <div className="main-container absolute inset-0 flex items-center">
        <div className="w-[60%] sm:w-1/2">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8">
            {props.subtitle}
          </p>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-extrabold uppercase leading-none mb-5 md:mb-7 lg:mb-9">
            {props.title}
          </h2>

          <Link href="/shop">
            <CustomBtn text="Shop Now" variant="secondary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
