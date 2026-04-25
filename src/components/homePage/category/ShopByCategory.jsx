import SectionTitle from "@/components/shared/SectionTitle";
import categoryImg1 from "@/../public/categoryImg-1.jpg";
import categoryImg2 from "@/../public/categoryImg-2.jpg";
import categoryImg3 from "@/../public/categoryImg-3.jpg";
import categoryImg4 from "@/../public/categoryImg-4.jpg";
import categoryImg5 from "@/../public/categoryImg-5.jpg";
import categoryImg6 from "@/../public/categoryImg-6.jpg";
import CategoryCard from "./CategoryCard";
import CategoryCLientComponent from "./CategoryCLientComponent";

const ShopByCategory = () => {
  const categories = [
    {
      name: "Coats",
      image: categoryImg1,
      count: 15,
    },
    {
      name: "Crop Tops",
      image: categoryImg2,
      count: 15,
    },
    {
      name: "Jackets",
      image: categoryImg3,
      count: 15,
    },
    {
      name: "T-Shirts",
      image: categoryImg4,
      count: 15,
    },
    {
      name: "Shirts",
      image: categoryImg5,
      count: 15,
    },
    {
      name: "Tops",
      image: categoryImg6,
      count: 15,
    },
  ];
  return (
    <section className="pt-14 md:pt-20">
      <div className="main-container">
        <SectionTitle title="Shop by categories" />

        <div className="rounded-[10px] overflow-hidden">
          <CategoryCLientComponent categories={categories} />
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
