import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ProductListPage from "../pages/ProductList";
import CreateProductPage from "../pages/CreateProduct";
import ProductDetailPage from "../components/product/ProductDetail";

const router = createBrowserRouter([
  { path: "/", element: <ProductListPage /> },
  { path: "/create-product", element: <CreateProductPage /> },
  { path: "/product-detail", element: <ProductDetailPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
