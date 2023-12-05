import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreateProductPage from "../pages/CreateProductPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/create", element: <CreateProductPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
