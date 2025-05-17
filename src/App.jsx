import React from "react";
import Navbar from "./components/common/Navbar";
import { RouterProvider } from "react-router-dom";
import Router from "./components/utils/Router";

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
