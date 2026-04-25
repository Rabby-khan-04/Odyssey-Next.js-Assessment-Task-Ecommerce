import Image from "next/image";
import { TableCell, TableRow } from "@/components/ui/table";
import CustomBtn from "@/components/shared/CustomBtn";
import Link from "next/link";

const ProductRow = ({ product, onDelete }) => {
  return (
    <TableRow>
      <TableCell>
        <Image
          src={product?.media?.images?.[0]}
          alt={product?.title}
          width={50}
          height={50}
          className="rounded-md object-cover"
        />
      </TableCell>

      <TableCell className="font-medium">{product.title}</TableCell>
      <TableCell>{product.category}</TableCell>
      <TableCell>${product.pricing?.current}</TableCell>
      <TableCell>{product.inventory?.stock}</TableCell>
      <TableCell>{product.inventory?.sku}</TableCell>

      <TableCell className="text-right flex justify-end gap-2">
        <Link href={`/shop/${product.id}`}>
          <CustomBtn text="View" variant="secondary" />
        </Link>

        <span onClick={() => onDelete(product.id)}>
          <CustomBtn text="Delete" variant="outline" />
        </span>
      </TableCell>
    </TableRow>
  );
};

export default ProductRow;
