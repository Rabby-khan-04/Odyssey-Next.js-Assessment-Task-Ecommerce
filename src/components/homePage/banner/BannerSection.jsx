import BannerSliderClient from "./BannerSliderClient";
import slider1Img from "@/../public/slider-1.jpg";
import slider2Img from "@/../public/slider-2.jpg";
import slider3Img from "@/../public/slider-3.jpg";
import slider1MobileImg from "@/../public/mobile-slider-1.jpg";
import slider2MobileImg from "@/../public/mobile-slider-2.jpg";
import slider3MobileImg from "@/../public/mobile-slider-3.jpg";

export default function BannerSection() {
  const bannerData = [
    {
      id: "nc-001",
      subtitle: "Outerwear for cooler days",
      title: "Bold looks everyday wear",
      image: slider1Img,
      mobileImg: slider1MobileImg,
    },
    {
      id: "nc-002",
      subtitle: "Timeless style for every moment",
      title: "Elegance in every stitch",
      image: slider2Img,
      mobileImg: slider2MobileImg,
    },
    {
      id: "nc-003",
      subtitle: "Designed to stand out",
      title: "Where grace meets glamour",
      image: slider3Img,
      mobileImg: slider3MobileImg,
    },
  ];

  return (
    <section className="w-full">
      <BannerSliderClient data={bannerData} />
    </section>
  );
}
