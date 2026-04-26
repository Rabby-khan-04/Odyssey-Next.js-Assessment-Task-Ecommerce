import ProductCard from "./ProductCard";

const ProductContainer = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
      {props.products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          className="rounded-[10px] border border-dark-gray"
        />
      ))}
    </div>
  );
};

export default ProductContainer;
