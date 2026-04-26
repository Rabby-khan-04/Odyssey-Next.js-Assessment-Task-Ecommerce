import SaleBannerSection from "@/components/salePage/SaleBannerSection";
import SaleMarquee from "./SaleMarquee";
import NewArrivalProducts from "@/components/homePage/newArrival/NewArrivalProducts";

const Sale = () => {
  return (
    <>
      <SaleBannerSection />
      <SaleMarquee />
      <NewArrivalProducts
        title="Last Chance
50–75% Off. Snooze—You Lose "
      />
    </>
  );
};

export default Sale;
