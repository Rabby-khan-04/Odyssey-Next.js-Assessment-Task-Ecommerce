import CouponCard from "./CouponCard";

const SaleBannerSection = () => {
  const coupons = [
    {
      type: "HOLIDAY",
      title: "Sale 30% Off",
      offer: "30% off during the holiday season.",
      code: "HOLIDAY30All",
    },
    {
      type: "BUNDLE",
      title: "Sale 50% Off",
      offer: "Discount when buying combo.",
      code: "BUNDLEDEAL50",
    },
    {
      type: "FLASHSALE",
      title: "Sale 75% Off",
      offer: "Big discounts for Flash Sale hours.",
      code: "FLASHSALE75",
    },
    {
      type: "BLACK FRIDAY",
      title: "Best Of Sale",
      offer: "Extra 50% off for VIP customers.",
      code: "VIPSale50All",
    },
  ];

  return (
    <section className="py-10 lg:py-20 xl:py-25 relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/sale-banner-vid.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#a91717]/80"></div>

      <div className="relative z-10 main-container">
        <div className="text-white text-center mb-15">
          <h1 className="text-4xl text-[clamp(3rem,6vw,5rem)] font-bold">
            Black Friday
            <br /> Sale Up to 75% Off
          </h1>
          <p className="mt-4 text-lg">
            Black Friday sale up to 75% all items. Hurry up!{" "}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7.5">
          {coupons.map((coupon) => (
            <CouponCard key={coupon.code} {...coupon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaleBannerSection;
