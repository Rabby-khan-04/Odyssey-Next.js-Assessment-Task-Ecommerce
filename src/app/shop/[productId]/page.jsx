"use client";

import ProductBreadcrumb from "@/components/shop/product/ProductBreadcrumb";
import ProductDetails from "@/components/shop/product/ProductDetails";
import useProduct from "@/hooks/useProduct";
import { useParams } from "next/navigation";

export default function Page() {
  const { productId } = useParams();
  const { product, isProductLoading } = useProduct(productId);
  if (isProductLoading) return <h1>Loading</h1>;
  console.log(product);

  return (
    <>
      <ProductBreadcrumb title={product.title} />
      <ProductDetails {...product} />
    </>
  );
}
