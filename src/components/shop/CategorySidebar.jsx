import useCategory from "@/hooks/useCategory";
import { Button } from "../ui/button";
import FilterCheckBox from "./FilterCheckBox";
import ShopMiniTitle from "./ShopMiniTitle";
import useSizes from "@/hooks/useSizes";

const CategorySidebar = (props) => {
  const categories = useCategory(props?.products);

  const sizes = useSizes(props?.filteredProducts);

  return (
    <>
      <div className="border-b border-[#cbcbcb] pb-7 mb-7">
        <ShopMiniTitle title="Category" />
        <div className="">
          {categories.map((category) => (
            <FilterCheckBox
              key={category.name}
              {...category}
              onChange={() => props?.onCategoryChange(category.name)}
              checked={props?.selectedCategory.includes(category.name)}
            />
          ))}
        </div>
      </div>

      <div className="">
        <ShopMiniTitle title="Size" />
        <div className="flex items-center justify-between">
          <p className="text-[#535353]">
            {props?.selectedSize.length} Selected
          </p>
          <Button
            onClick={() => props?.onSizeChange(true)}
            variant="link"
            className="text-base"
          >
            Reset
          </Button>
        </div>
        <div className="">
          {sizes.map((size) => (
            <FilterCheckBox
              key={size.name}
              {...size}
              onChange={() => props?.onSizeChange(null, size.name)}
              checked={props?.selectedSize.includes(size.name)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategorySidebar;
