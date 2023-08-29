import React from "react";
// import { retry } from "./utils/CommonFunctions";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";

const Routes = () => {
  const Routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return Routes;
};

export default Routes;
