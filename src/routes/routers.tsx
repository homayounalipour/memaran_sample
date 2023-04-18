import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { AddProduct } from "../pages/AddProduct";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/Home",
    element: <HomePage />,
  },
  {
    path: "/Add-product",
    element: <AddProduct />,
  },
]);
