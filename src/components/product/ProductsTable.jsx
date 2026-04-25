import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProductRow from "./ProductRow";

const ProductsTable = ({ products = [], onDelete }) => {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-5xl mx-auto">
        <Table>
          <TableCaption>All available products</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className="w-20">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                onDelete={onDelete}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default ProductsTable;
