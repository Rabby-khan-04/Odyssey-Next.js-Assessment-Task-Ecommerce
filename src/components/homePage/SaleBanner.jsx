import carvText from "@/../public/looks-we-love.png";
import Image from "next/image";
import CustomBtn from "../shared/CustomBtn";
import Link from "next/link";

const SaleBanner = () => {
  return (
    <section
      className={`py-14 lg:py-20 bg-[url('/banner-mobile.png')] lg:bg-[url('/banner.png')] bg-no-repeat bg-cover bg-center mt-20`}
    >
      <div className="main-container text-center flex flex-col justify-center items-start lg:items-center py-18.5">
        <Image
          src={carvText}
          alt="Looks We Love"
          className="w-40 sm:w-auto md:w-70"
        />
        <h2 className="text-[clamp(1.5rem,6vw,5rem)] font-medium text-dark-gray">
          Classic fashion
        </h2>
        <p className="text-outline text-[clamp(1.25rem,4vw,2.5rem)] uppercase text-white mb-4">
          on sale 30% off
        </p>
        <Link href="/shop">
          <CustomBtn text="Shop Now" variant="secondary" />
        </Link>
      </div>
    </section>
  );
};

export default SaleBanner;
