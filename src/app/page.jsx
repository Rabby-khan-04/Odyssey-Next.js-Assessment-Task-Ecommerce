import BannerSection from "@/components/homePage/banner/BannerSection";
import ShopByCategory from "@/components/homePage/category/ShopByCategory";
import SaleBanner from "@/components/homePage/SaleBanner";

export default function Home() {
  return (
    <main>
      <BannerSection />
      <ShopByCategory />
      <SaleBanner />
    </main>
  );
}
