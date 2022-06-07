import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import Routes from "./components/routes";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import './style/index.css';
import { NotifierContextProvider } from 'react-headless-notifier';

const App: FC = () => (
  <NotifierContextProvider
    config={{
      max: 3,
      duration: 200000,
      position: 'bottom',
    }}
  >
    <div
      className="relative w-full h-screen overflow-x-hidden"
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
    </div>
  </NotifierContextProvider>
)

export default App;
