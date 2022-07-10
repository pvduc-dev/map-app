import React, {lazy, Suspense} from 'react';
import {useRoutes} from "react-router-dom";
import "../style/index.css";

const MapPage = lazy(() => import('../pages/MapPage'));

const Router = () => {
  return useRoutes([
    {
      index: true,
      element:
        <Suspense fallback={<></>}>
          <MapPage/>
        </Suspense>,
    },
  ])
};

export default Router;
