import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IconFilter, IconXFilled } from "@tabler/icons-react";
import CategorySidebar from "./CategorySidebar";

const FilterSidebarModal = (props) => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <div className="flex items-center text-[#535353] font-semibold cursor-pointer ">
          <IconFilter />
          <span>Filter</span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="py-8 px-4">
        <DrawerHeader className="flex justify-end">
          <DrawerTitle className="sr-only">Product Filter</DrawerTitle>
          <DrawerClose className="absolute top-4 right-4 z-50 p-2 rounded-md hover:bg-muted cursor-pointer">
            <IconXFilled />
          </DrawerClose>
        </DrawerHeader>
        <CategorySidebar
          products={props?.products}
          onCategoryChange={props?.handleSelectCategory}
          onSizeChange={props?.handleSelectedSize}
          selectedSize={props?.selectedSize}
          selectedCategory={props?.selectedCategory}
          filteredProducts={props?.filteredProducts}
        />
      </DrawerContent>
    </Drawer>
  );
};

export default FilterSidebarModal;
