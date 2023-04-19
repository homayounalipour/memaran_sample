import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { AddProduct } from "../pages/AddProduct";
import { ShoppingCard } from "../pages/ShoppingCard";
import { Payment } from "../pages/Payment";

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
  {
    path: "/Shopping-card",
    element: <ShoppingCard />,
  },
  {
    path: "/Payment",
    element: <Payment />,
  },
]);
