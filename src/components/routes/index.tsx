import React, {FC} from "react";
import { Route, useRouteMatch } from 'react-router-dom';
import MapPage from "../pages/MapPage";
import '../../style/index.css';

const Routes = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Route
        path={path}
        exact
      >
        <MapPage/>
      </Route>
    </>
  )
}

export default Routes;
