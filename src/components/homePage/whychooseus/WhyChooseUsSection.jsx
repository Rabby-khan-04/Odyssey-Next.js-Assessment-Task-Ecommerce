import SectionTitle from "@/components/shared/SectionTitle";
import chooseUsImg1 from "@/../public/why_choose_us1.webp";
import chooseUsImg2 from "@/../public/why_choose_us2.webp";
import chooseUsImg3 from "@/../public/why_choose_us3.webp";
import ChooseCard from "./ChooseCard";
import WhyChooseClientComp from "./WhyChooseClientComp";

const WhyChooseUsSection = () => {
  const chooseUsFeatures = [
    {
      title: "Cultural Standards",
      description:
        "We are committed to setting high ethical standards in production and ensuring mindful manufacturing through audits, training and education.",
      image: chooseUsImg1,
    },
    {
      title: "Designed to Last",
      description:
        "From traditional tailoring to the most informal pieces. Our Glozin collections feature the latest trends with the maximum comfort.",
      image: chooseUsImg2,
    },
    {
      title: "Freedom for Everyone",
      description:
        "The designs have been created adopting the current trends, while leaving room for personal expression among young people.",
      image: chooseUsImg3,
    },
  ];
  return (
    <section className="pt-14 md:pt-20">
      <div className="main-container">
        <SectionTitle title="Why Choose Us" />

        <div className="max-w-7xl mx-auto">
          <WhyChooseClientComp chooseUsFeatures={chooseUsFeatures} />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
