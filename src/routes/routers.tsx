import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { AddProduct } from "../pages/AddProduct";
import { ShoppingCard } from "../pages/ShoppingCard";
import { Payment } from "../pages/Payment";

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
  {
    path: "/shopping-card",
    element: <ShoppingCard />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
]);
