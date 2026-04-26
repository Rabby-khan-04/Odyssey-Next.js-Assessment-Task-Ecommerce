import ProtectedRoute from "@/route/ProtectedRoute";

export const metadata = {
  title: "NexCart - Add Product",
  description: "Modern ecommerce platform for fast and easy shopping",
};

export default function AddProductLayout({ children }) {
  return (
    <ProtectedRoute>
      <main>{children}</main>
    </ProtectedRoute>
  );
}
