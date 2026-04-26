import productBanner1 from "@/../public/product_banner_1.webp";
import productBanner2 from "@/../public/product_banner_2.webp";
import GridDescription from "@/components/shared/GridDescription";

const AboutSection = () => {
  const aboutDetails = [
    {
      subtitle: "Our Factories",
      title: "The Best Product",
      details:
        "We spend a lot of time finding the best factories around the world—the samefactories that make your favorite designer brands. We visit them regularly and build strong personal relationships with the owners. Each factory is audited for compliance to assess factors such as fair wages.",
      image: productBanner1,
    },
    {
      subtitle: "Our Products",
      title: "The Best Product",
      details:
        "At Nextcart, we’re not big on trends. We want you to wear our pieces for years, even decades, to come. That’s why we source the finest materials and factories for our timeless products— like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.",
      image: productBanner2,
    },
  ];
  return (
    <section className="py-14 md:py-20">
      <div className="main-container">
        <GridDescription details={aboutDetails} />
      </div>
    </section>
  );
};

export default AboutSection;
