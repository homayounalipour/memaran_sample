import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);
