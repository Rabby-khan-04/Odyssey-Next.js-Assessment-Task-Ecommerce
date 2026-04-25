import { useEffect, useState } from "react";

const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [isProductLoading, setIsProductLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      setIsProductLoading(true);

      try {
        const res = await fetch("/products.json");
        const apiData = await res.json();

        let found = apiData.find((p) => p.id === productId);

        if (!found) {
          const localData = JSON.parse(localStorage.getItem("products")) || [];

          found = localData.find((p) => p.id === productId);
        }

        setProduct(found || null);
      } catch (error) {
        console.error("Failed to fetch product:", error);

        const localData = JSON.parse(localStorage.getItem("products")) || [];

        const found = localData.find((p) => p.id === productId);
        setProduct(found || null);
      } finally {
        setIsProductLoading(false);
      }
    }

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  return { product, isProductLoading };
};

export default useProduct;
