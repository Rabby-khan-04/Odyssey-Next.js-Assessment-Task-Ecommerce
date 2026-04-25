import { Button } from "../ui/button";
import FilterCheckBox from "./FilterCheckBox";
import ShopMiniTitle from "./ShopMiniTitle";

const CategorySidebar = (props) => {
  const categories = props.products.reduce((acc, product) => {
    const category = product.category;
    const existing = acc.find((item) => item.name === category);

    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ name: category, count: 1 });
    }

    return acc;
  }, []);

  const sizes = props?.filteredProducts.reduce((acc, product) => {
    product?.variants?.sizes.forEach((size) => {
      const existing = acc.find((s) => s.name === size);
      if (existing) {
        existing.count += 1;
      } else {
        acc.push({ name: size, count: 1 });
      }
    });

    return acc;
  }, []);

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
