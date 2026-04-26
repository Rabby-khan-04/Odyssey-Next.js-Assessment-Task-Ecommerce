import Image from "next/image";
import SectionTitle from "./SectionTitle";
import CustomBtn from "./CustomBtn";
import Link from "next/link";

const GridDescription = ({ details }) => {
  return (
    <div className="space-y-6 lg:space-y-12.5">
      <div className="grid lg:grid-cols-2 gap-3 lg:gap-7.5">
        <div className="rounded-[10px] overflow-hidden">
          <Image
            src={details[0]?.image}
            alt={details[0]?.title}
            className="hover:scale-115 duration-300 ease-out w-full"
          />
        </div>
        <div className="self-center p-7.5">
          <p className="text-center text-xl mb-3">{details[0]?.subtitle}</p>
          <SectionTitle title={details[0]?.title} />
          <p className="text-center mb-4">{details[0]?.details}</p>
          <div className="text-center">
            <Link href="/shop">
              <CustomBtn text="View More" variant="secondary" />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-3 lg:gap-7.5">
        <div className="lg:order-2 rounded-[10px] overflow-hidden">
          <Image
            src={details[1]?.image}
            alt={details[1]?.title}
            className="hover:scale-115 duration-300 ease-out w-full"
          />
        </div>
        <div className="self-center p-7.5">
          <p className="text-center text-xl mb-3">{details[1]?.subtitle}</p>
          <SectionTitle title={details[1]?.title} />
          <p className="text-center mb-4">{details[1]?.details}</p>
          <div className="text-center">
            <Link href="/shop">
              <CustomBtn text="View More" variant="secondary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridDescription;
