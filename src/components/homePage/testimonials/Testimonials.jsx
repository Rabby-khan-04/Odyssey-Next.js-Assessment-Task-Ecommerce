import SectionTitle from "@/components/shared/SectionTitle";
import reviewerImg1 from "@/../public/review-1.webp";
import reviewerImg2 from "@/../public/review-2.webp";
import reviewerImg3 from "@/../public/review-3.webp";
import reviewerImg4 from "@/../public/review-4.webp";
import TestimonialClientComponent from "./TestimonialClientComponent";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Elizabeth morgan",
      review:
        "Great quality and fast delivery. The fit was perfect and comfortable for daily wear.",
      rating: 5,
      image: reviewerImg1,
    },
    {
      name: "Lilith grant",
      review:
        "Product looks exactly like pictures. Fabric feels premium and stitching is well done.",
      rating: 4,
      image: reviewerImg2,
    },
    {
      name: "Nova mitchell",
      review:
        "Loved the design and color. Very stylish and easy to pair with different outfits.",
      rating: 5,
      image: reviewerImg3,
    },
    {
      name: "Thorben Ernst",
      review:
        "Good product overall but delivery took a bit longer than expected.",
      rating: 4,
      image: reviewerImg4,
    },
  ];

  return (
    <section className="pt-14 md:pt-20">
      <div className="main-container">
        <SectionTitle title="Testimonials" />
        <div className="">
          <TestimonialClientComponent testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
