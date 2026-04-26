import BannerSection from "@/components/homePage/banner/BannerSection";
import ShopByCategory from "@/components/homePage/category/ShopByCategory";
import NewArrivalProducts from "@/components/homePage/newArrival/NewArrivalProducts";
import SaleBanner from "@/components/homePage/saleBanner/SaleBanner";

export default function Home() {
  return (
    <main>
      <BannerSection />
      <ShopByCategory />
      <NewArrivalProducts />
      <SaleBanner />
    </main>
  );
}
