import ProductAddingForm from "@/components/product/ProductAddingForm";
import TitleSection from "@/components/shared/TitleSection";

const AddItem = () => {
  return (
    <>
      <TitleSection path="/" label="Home" title="Add Product" />
      <ProductAddingForm />
    </>
  );
};

export default AddItem;
