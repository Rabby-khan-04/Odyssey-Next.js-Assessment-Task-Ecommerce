"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import CustomBtn from "../shared/CustomBtn";
import { Field } from "../ui/field";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";

const initialState = {
  title: "",
  category: "",
  price: "",
  stock: "",
  sizes: "",
  colors: "", // comma separated: Black, White
  image1: "",
  image2: "",
  description: "",
};

// simple predefined palette (you can expand later)
const COLOR_MAP = {
  Black: "#000000",
  White: "#ffffff",
  Red: "#ef4444",
  Blue: "#3b82f6",
  Green: "#22c55e",
  Pink: "#f472b6",
  Beige: "#e6d2b5",
  Gray: "#9ca3af",
};

// fallback random color generator
const randomHex = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

const ProductAddingForm = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const product = {
      id: Date.now().toString(),
      title: formData.title,
      category: formData.category,

      vendor: {
        name: "Nextcart",
        type: "Fashion",
      },

      pricing: {
        current: Number(formData.price),
        original: null,
      },

      inventory: {
        stock: Number(formData.stock),
        inStock: Number(formData.stock) > 0,
        sku: Date.now().toString(),
      },

      variants: {
        sizes: formData.sizes
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),

        colors: formData.colors
          .split(",")
          .map((c) => c.trim())
          .filter(Boolean)
          .map((name) => ({
            name,
            hex: COLOR_MAP[name] || randomHex(),
            disabled: false,
          })),
      },

      media: {
        images: [formData.image1, formData.image2].filter(Boolean),
      },

      shipping: "5-7 days",
      returns: "Within 45 days of purchase",

      details: {
        description: formData.description,
        materials: [],
      },

      care: [],
    };

    const existing = JSON.parse(localStorage.getItem("products")) || [];
    localStorage.setItem("products", JSON.stringify([...existing, product]));

    toast.success("Product Added Successfully!");

    setFormData(initialState);
  };

  return (
    <section className="py-14 md:py-20">
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmitForm} className="space-y-5">
          <Input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Product Title"
            className="py-3 px-5 h-auto"
            required
          />

          <Input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="py-3 px-5 h-auto"
            required
          />

          <Input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="py-3 px-5 h-auto"
            required
          />

          <Input
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="py-3 px-5 h-auto"
            required
          />

          <Input
            name="sizes"
            value={formData.sizes}
            onChange={handleChange}
            placeholder="Sizes (S, M, L)"
            className="py-3 px-5 h-auto"
          />

          <Input
            name="colors"
            value={formData.colors}
            onChange={handleChange}
            placeholder="Colors (Black, White, Red)"
            className="py-3 px-5 h-auto"
          />

          <Input
            name="image1"
            value={formData.image1}
            onChange={handleChange}
            placeholder="Image URL 1"
            className="py-3 px-5 h-auto"
          />

          <Input
            name="image2"
            value={formData.image2}
            onChange={handleChange}
            placeholder="Image URL 2"
            className="py-3 px-5 h-auto"
          />

          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Product Description"
            className="py-3 px-5 h-auto"
          />

          <Field orientation="vertical">
            <CustomBtn text="Add Product" type="submit" variant="secondary" />
          </Field>
        </form>
      </div>
    </section>
  );
};

export default ProductAddingForm;
