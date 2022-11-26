import React, {lazy, Suspense} from 'react';
import {useRoutes} from "react-router-dom";
import "../style/index.css";

const MapPage2 = lazy(() => import('@/pages/MapPageV2'));

const Router = (props: any) => {
  return useRoutes([
    {
      index: true,
      element:
        <Suspense fallback={<></>}>
          <MapPage2/>
        </Suspense>,
    },
    {
      path: '/test',
      element:
        <Suspense fallback={<></>}>
          <MapPage2/>
        </Suspense>,
    },
  ])
};

export default Router;
