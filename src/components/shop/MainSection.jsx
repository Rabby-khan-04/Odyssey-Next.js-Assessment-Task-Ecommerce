"use client";

import { useMemo, useState } from "react";
import ProductBanner from "./ProductBanner";
import ProductSearchBar from "./ProductSearchBar";
import ProductContainer from "./ProductContainer";
import CategorySidebar from "./CategorySidebar";

const MainSection = ({ initialProducts }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory.length === 0) return products;

    return products.filter((product) =>
      selectedCategory.includes(product.category),
    );
  }, [selectedCategory, products]);

  const handleSearchQuery = () => {};
  const handleSelectCategory = (categoryName) => {
    setSelectedCategory((prev) => {
      if (prev.includes(categoryName)) {
        return prev.filter((c) => c !== categoryName);
      } else {
        return [...prev, categoryName];
      }
    });
  };

  return (
    <section className="py-14 md:py-20">
      <div className="main-container flex items-start">
        <aside className="hidden lg:block w-1/4 px-7 h-full relative">
          <CategorySidebar
            products={products}
            onChange={handleSelectCategory}
            selectedCategory={selectedCategory}
          />
        </aside>
        <div className="w-full lg:w-3/4 px-7">
          <ProductBanner handleSearch={handleSearchQuery} />
          <ProductSearchBar count={filteredProducts.length} />
          <ProductContainer products={filteredProducts} />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
