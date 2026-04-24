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
  return (
    <div>
      <ShopMiniTitle title="Category" />
      <div className="">
        {categories.map((category) => (
          <FilterCheckBox
            key={category.name}
            {...category}
            onChange={() => props.onChange(category.name)}
            checked={props.selectedCategory.includes(category.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
