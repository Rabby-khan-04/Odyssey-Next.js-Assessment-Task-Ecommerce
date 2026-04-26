import AboutSection from "@/components/homePage/about/AboutSection";
import BannerSection from "@/components/homePage/banner/BannerSection";
import ShopByCategory from "@/components/homePage/category/ShopByCategory";
import NewArrivalProducts from "@/components/homePage/newArrival/NewArrivalProducts";
import SaleBanner from "@/components/homePage/saleBanner/SaleBanner";
import Testimonials from "@/components/homePage/testimonials/Testimonials";
import WhyChooseUsSection from "@/components/homePage/whychooseus/WhyChooseUsSection";
import GridDescription from "@/components/shared/GridDescription";

export default function Home() {
  return (
    <main>
      <BannerSection />
      <ShopByCategory />
      <NewArrivalProducts />
      <SaleBanner />
      <WhyChooseUsSection />
      <Testimonials />
      <AboutSection />
    </main>
  );
}
