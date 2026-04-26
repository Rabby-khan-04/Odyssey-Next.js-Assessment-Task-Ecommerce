"use client";

import Loading from "@/components/shared/Loading";
import ProductBreadcrumb from "@/components/shop/product/ProductBreadcrumb";
import ProductDetails from "@/components/shop/product/ProductDetails";
import useProduct from "@/hooks/useProduct";
import { useParams } from "next/navigation";

export default function Page() {
  const { productId } = useParams();
  const { product, isProductLoading } = useProduct(productId);
  if (isProductLoading) return <Loading />;

  return (
    <>
      <ProductBreadcrumb title={product.title} />
      <ProductDetails {...product} />
    </>
  );
}
