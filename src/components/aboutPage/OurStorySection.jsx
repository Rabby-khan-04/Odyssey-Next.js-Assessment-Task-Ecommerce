import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";
import aboutUsImg from "@/../public/about-us.webp";

const OurStorySection = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="main-container">
        <SectionTitle title="Our story" />
        <div className="overflow-hidden rounded-[10px]">
          <Image
            src={aboutUsImg}
            alt="About Image"
            className="w-full hover:scale-110 duration-300 ease-out"
          />
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-7.5 pt-14 md:pt-20">
          <div className="text-center text-lg">
            <h3 className="text-dark-gray font-medium">
              5,000+ Happy customer
            </h3>
            <p className="mt-4 text-light-gray font-normal">
              The customer{"'"}s perception is your reality. Your most unhappy
              customers are your greatest source of learning
            </p>
          </div>
          <div className="text-center text-lg">
            <h3 className="text-dark-gray font-medium">29+ Awards won</h3>
            <p className="mt-4 text-light-gray font-normal">
              Awards can give you a tremendous amount of encouragement to keep
              getting better, no matter how young or old you are.
            </p>
          </div>
          <div className="text-center text-lg">
            <h3 className="text-dark-gray font-medium">
              40 years of experiences
            </h3>
            <p className="mt-4 text-light-gray font-normal">
              The major problem is that we tend to live our life in our head, in
              our thoughts, cut off from our actual experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
