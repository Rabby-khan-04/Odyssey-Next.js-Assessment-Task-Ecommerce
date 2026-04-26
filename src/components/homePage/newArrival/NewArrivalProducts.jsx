import SectionTitle from "@/components/shared/SectionTitle";
import fs from "fs/promises";
import NewArrivalProductClient from "./NewArrivalProductClient";

const NewArrivalProducts = async ({ title = "New Arrivals" }) => {
  const getProducts = async () => {
    const data = await fs.readFile(
      process.cwd() + "/public/products.json",
      "utf-8",
    );
    const products = JSON.parse(data);

    return products;
  };

  const products = await getProducts();
  return (
    <section className="py-14 md:py-20">
      <div className="main-container">
        <SectionTitle title={title} />

        <div className="rounded-[10px] overflow-hidden border border-dark-gray">
          <NewArrivalProductClient products={products} />
        </div>
      </div>
    </section>
  );
};

export default NewArrivalProducts;
