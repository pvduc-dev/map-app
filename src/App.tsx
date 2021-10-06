import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./components/routes";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import './style/index.css'

ReactDOM.render(
  <div
    style={{width: '100vw', height: '100vh'}}
  >
    <Router>
      <Switch>
        <Route
          path="/map"
        >
          <Routes/>
        </Route>
        <Redirect
          to="/map"
          from="/"
        />
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
)
