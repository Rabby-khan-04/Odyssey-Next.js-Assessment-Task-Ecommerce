"use client";

import ProductsTable from "@/components/product/ProductsTable";
import Loading from "@/components/shared/Loading";
import TitleSection from "@/components/shared/TitleSection";
import ProtectedRoute from "@/route/ProtectedRoute";
import { useEffect, useState } from "react";

const ManageItems = () => {
  const [products, setProducts] = useState([]);
  const [isProductLoading, setIsProductLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      setIsProductLoading(true);

      const res = await fetch("/products.json");
      const data = await res.json();

      const stored = JSON.parse(localStorage.getItem("products")) || [];

      setProducts([...data, ...stored]);
      setIsProductLoading(false);
    }

    fetchProduct();
  }, []);

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  if (isProductLoading) return <Loading />;

  return (
    <>
      <TitleSection path="/" label="Home" title="Manage Products" />
      <ProductsTable products={products} onDelete={handleDelete} />
    </>
  );
};

export default ManageItems;
