import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes/routers";

function App() {
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
