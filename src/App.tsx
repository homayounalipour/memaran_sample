import React, { useEffect } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes/routers";
import { useInitApp } from "./store/modules/init/init";

function App() {
  const { dispatchInitApp } = useInitApp();

  useEffect(() => {
    dispatchInitApp();
  }, []);

  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
