"use client";

import { useMemo, useState } from "react";
import ProductBanner from "./ProductBanner";
import ProductSearchBar from "./ProductSearchBar";
import ProductContainer from "./ProductContainer";
import CategorySidebar from "./CategorySidebar";
import FilterSidebarModal from "./FilterSidebarModal";
import useProductFilter from "@/hooks/useProductFilter";

const MainSection = ({ initialProducts }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const products = initialProducts;

  const filteredProducts = useProductFilter(
    products,
    selectedCategory,
    selectedSize,
    searchQuery,
  );

  const handleSelectCategory = (categoryName) => {
    setSelectedSize([]);
    setSelectedCategory((prev) => {
      if (prev.includes(categoryName)) {
        return prev.filter((c) => c !== categoryName);
      } else {
        return [...prev, categoryName];
      }
    });
  };

  const handleSelectedSize = (reset = null, size = "") => {
    if (reset) return setSelectedSize([]);
    setSelectedSize((prev) => {
      if (prev.includes(size)) {
        return prev.filter((s) => s !== size);
      } else {
        return [...prev, size];
      }
    });
  };

  const handleSearchInput = (value) => {
    setSearchInput(value);

    if (value.trim() === "") {
      setSearchQuery("");
    }
  };

  const handleProductSearch = () => {
    setSearchQuery(searchInput);
  };

  return (
    <section className="py-14 md:py-20">
      <div className="main-container flex items-start">
        <aside className="hidden lg:block w-1/4 px-7 h-full relative">
          <CategorySidebar
            products={products}
            onCategoryChange={handleSelectCategory}
            onSizeChange={handleSelectedSize}
            selectedSize={selectedSize}
            selectedCategory={selectedCategory}
            filteredProducts={filteredProducts}
          />
        </aside>
        <div className="w-full lg:w-3/4 px-7">
          <ProductBanner />
          <div className="flex items-center pb-7 border-b mb-7 gap-4">
            <div className="block lg:hidden">
              <FilterSidebarModal
                products={products}
                onCategoryChange={handleSelectCategory}
                onSizeChange={handleSelectedSize}
                selectedSize={selectedSize}
                selectedCategory={selectedCategory}
                filteredProducts={filteredProducts}
              />
            </div>
            <ProductSearchBar
              onChange={handleSearchInput}
              onSubmit={handleProductSearch}
              count={filteredProducts.length}
            />
          </div>
          <ProductContainer products={filteredProducts} />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
