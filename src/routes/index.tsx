import React from 'react';
import {useRoutes} from "react-router-dom";
import MapPage from "../pages/MapPage";

const Router = () => {
  return useRoutes([
    {
      index: true,
      element: <MapPage/>
    },
  ])
};

export default Router;
