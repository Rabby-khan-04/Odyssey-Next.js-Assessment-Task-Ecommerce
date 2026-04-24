import { IconSearch } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const ProductSearchBar = (props) => {
  return (
    <div className="flex items-center gap-7 pb-7 border-b mb-7">
      <div className="flex items-center gap-4 flex-1">
        <Input
          type="text"
          name="q"
          placeholder="Search Product..."
          className="py-3 px-5 h-auto placeholder:text-xl text-xl!"
          required
        />

        <Button
          variant="secondary"
          className="py-3 px-5 h-auto cursor-pointer text-xl"
        >
          <span>Search </span>
          <IconSearch size="36" />
        </Button>
      </div>
      <p className="shrink-0 text-xl font-normal">{props.count} Products</p>
    </div>
  );
};

export default ProductSearchBar;
