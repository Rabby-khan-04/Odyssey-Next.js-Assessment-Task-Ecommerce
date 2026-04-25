import { useEffect, useState } from "react";

const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [isProductLoading, setIsProductLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      setIsProductLoading(true);
      const res = await fetch("/products.json");
      const data = await res.json();

      const found = data.find((p) => p.id === productId);
      setProduct(found);
      setIsProductLoading(false);
    }

    fetchProduct();
  }, [productId]);

  return { product, isProductLoading };
};

export default useProduct;
