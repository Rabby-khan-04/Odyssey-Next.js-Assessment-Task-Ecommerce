import TitleSection from "@/components/shared/TitleSection";
import MainSection from "@/components/shop/MainSection";
import fs from "fs/promises";

async function getProducts() {
  const data = await fs.readFile(
    process.cwd() + "/public/products.json",
    "utf-8",
  );
  const products = JSON.parse(data);

  return products;
}

const Shop = async () => {
  const products = await getProducts();
  return (
    <>
      <TitleSection path="/" label="Home" title="Products" />
      <MainSection initialProducts={products} />
    </>
  );
};

export default Shop;
