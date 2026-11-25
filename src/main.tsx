import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ProductScreen from "./ui/products/ProductScreen.tsx";
import ProductDetails from "./ui/products/ProductDetails.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import AddProduct from "./ui/products/AddProduct.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductScreen />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
]);
createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <RouterProvider router={router} />,
  // </StrictMode>,
);
