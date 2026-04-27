import ProductBreadcrumb from "@/components/shop/product/ProductBreadcrumb";
import ProductDetails from "@/components/shop/product/ProductDetails";

const getProduct = async (productId) => {
  const res = await fetch(
    "https://odyssey-next-js-assessment-task-eco.vercel.app/products.json",
    { next: { revalidate: 300 } },
  );
  const products = await res.json();

  return products.find((p) => p.id === productId);
};

export default async function Page({ params }) {
  const { productId } = await params;
  const product = await getProduct(productId);
  console.log(product);

  return (
    <>
      <ProductBreadcrumb title={product.title} />
      <ProductDetails {...product} />
    </>
  );
}
