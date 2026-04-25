import { IconSearch } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const ProductSearchBar = (props) => {
  return (
    <div className="flex items-center gap-7 w-full">
      <div className="flex items-center gap-4 flex-1">
        <Input
          type="text"
          name="q"
          placeholder="Search Product By Title..."
          className="py-1 px-2 md:py-3 md:px-5 h-auto placeholder:text-lg md:placeholder:text-xl text-base! md:text-xl!"
          required
          onChange={(e) => props?.onChange(e.target.value)}
        />

        <Button
          variant="secondary"
          className="py-2 md:py-3 px-5 h-auto cursor-pointer text-xl"
          onClick={props?.onSubmit}
        >
          <span className="hidden md:block">Search </span>
          <IconSearch size="36" />
        </Button>
      </div>
      <p className="hidden md:block shrink-0 text-xl font-normal">
        {props.count} Products
      </p>
    </div>
  );
};

export default ProductSearchBar;
