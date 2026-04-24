import productBannerImg from "@/../public/product-banner.png";
import ShopMiniTitle from "./ShopMiniTitle";
import Image from "next/image";

const ProductBanner = (props) => {
  return (
    <div>
      <ShopMiniTitle title="Products" />
      <Image
        src={productBannerImg}
        alt="Product banner"
        className="w-full rounded-[10px] aspect-1410/365 mb-7"
      />
      <p className="text-base text-black font-normal mb-7">
        Care for fiber: 30% more recycled polyester. We label garments
        manufactured using environmentally friendly technologies and raw
        materials with the Join Life label.
      </p>
    </div>
  );
};

export default ProductBanner;
