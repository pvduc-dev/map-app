import React, {lazy, Suspense} from "react";
import { Route, useRouteMatch } from 'react-router-dom';

const MapPage = lazy(() => import('../pages/MapPage'))

const Routes = () => {
  const {path} = useRouteMatch()
  return (
    <>
      <Route
        path={path}
        exact
      >
        <Suspense fallback={<></>}>
          <MapPage/>
        </Suspense>
      </Route>
    </>
  )
}

export default Routes;
