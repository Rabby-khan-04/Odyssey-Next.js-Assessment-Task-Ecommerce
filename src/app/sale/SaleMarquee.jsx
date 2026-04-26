import OfferMarquee from "@/components/salePage/OfferMarquee";
import Marquee from "react-fast-marquee";

const SaleMarquee = () => {
  return (
    <section className="bg-black py-5">
      <Marquee>
        <OfferMarquee offer="Black Friday & Holiday Sale: Up to 75% Off All Products" />
        <OfferMarquee offer="Black Friday & Holiday Sale: Up to 75% Off All Products" />
        <OfferMarquee offer="Black Friday & Holiday Sale: Up to 75% Off All Products" />
        <OfferMarquee offer="Black Friday & Holiday Sale: Up to 75% Off All Products" />
        <OfferMarquee offer="Black Friday & Holiday Sale: Up to 75% Off All Products" />
        <OfferMarquee offer="Black Friday & Holiday Sale: Up to 75% Off All Products" />
      </Marquee>
    </section>
  );
};

export default SaleMarquee;
