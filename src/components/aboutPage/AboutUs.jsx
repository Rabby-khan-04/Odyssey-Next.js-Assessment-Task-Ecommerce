import Image from "next/image";
import aboutUsImage from "@/../public/about-us-2.webp";

const AboutUs = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="main-container">
        <div className="overflow-hidden rounded-[10px]">
          <Image
            src={aboutUsImage}
            alt="About Image"
            className="w-full hover:scale-110 duration-300 ease-out"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-7.5 pt-14 md:pt-20">
          <div className="text-center text-lg">
            <h3 className="text-dark-gray font-medium">
              Fashion is what you’re offered four times a yea by designers
              fashions fade
            </h3>
            <p className="mt-4 text-light-gray font-normal">
              In early 1982, founder and creative direct or had the idea to
              design a bag collection where comfort, fashion, and distinction
              are key.
            </p>
          </div>
          <div className="text-center text-lg">
            <h3 className="text-dark-gray font-medium">
              I prefer to shock rather than to bore through repetition style is
              eternal
            </h3>
            <p className="mt-4 text-light-gray font-normal">
              I have always believed that fashion was not only to make women
              more beautiful, but also to reassure them, give them confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
