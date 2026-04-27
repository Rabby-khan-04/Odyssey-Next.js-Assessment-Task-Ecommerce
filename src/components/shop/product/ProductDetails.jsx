import Image from "next/image";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import fashionImg from "@/../public/fashion.jpg";
import { IconPoint } from "@tabler/icons-react";

const ProductDetails = (props) => {
  console.log(props);
  return (
    <section className="pb-14 lg:pb-20">
      <div className="product-container grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-15">
        <div className="col-span-6">
          <ProductImages images={props?.media.images} />
        </div>
        <div className="col-span-6">
          <ProductInfo {...props} />
        </div>
      </div>

      <div className="product-container">
        <div className="border-t border-border mt-7 pt-7">
          <h4 className="text-xl text-light-gray font-medium">Description</h4>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="place-self-center-safe">
              <Image
                src={fashionImg}
                alt="fashion model"
                height={240}
                width={240}
                className="rounded-full"
              />
            </div>
            <div className="space-y-4">
              <h6 className="text-dark-gray my-4">Product Specifications</h6>
              <p>{props?.details?.description}</p>
              <p>
                Care for fiber: {props?.details?.materials.join(" ")}. We label
                garments manufactured using environmentally friendly
                technologies and raw materials with the Join Life label.
              </p>

              <h6 className="text-dark-gray my-4">Washing Instructions</h6>
              <ul className="space-y-2">
                {props?.care.map((c) => (
                  <li key={c} className="flex text-dark-gray">
                    <IconPoint />
                    <p>{c}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h6 className="text-dark-gray my-4">Material</h6>
              <p>{props?.details?.materials.join(", ")}</p>
              <p>
                The Green to Wear 2.0 standard aims to minimize the
                environmental impact of textile production. To this end, we have
                developed Inditex{"'"}s The List program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
