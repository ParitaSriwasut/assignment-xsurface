import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreateProductPage from "../pages/CreateProductPage";
import SearchInput from "../components/product/SearchInput";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/create", element: <CreateProductPage /> },
  { path: "/search", element: <SearchInput /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
