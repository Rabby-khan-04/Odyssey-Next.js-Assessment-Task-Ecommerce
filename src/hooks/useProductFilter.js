import { useMemo } from "react";

const useProductFilter = (
  products,
  selectedCategory,
  selectedSize,
  searchQuery,
) => {
  return useMemo(() => {
    let result = products;

    if (selectedCategory.length > 0) {
      result = result.filter((product) =>
        selectedCategory.includes(product.category),
      );
    }

    if (selectedSize.length > 0) {
      result = result.filter((product) =>
        product.variants?.sizes?.some((size) => selectedSize.includes(size)),
      );
    }

    if (searchQuery.trim() !== "") {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    return result;
  }, [products, selectedCategory, selectedSize, searchQuery]);
};

export default useProductFilter;
