import App from './App';
import React from 'react';
import ReactDOM from "react-dom";
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'test',
  clientId: 'front-end',
})

keycloak.init({
  onLoad: 'check-sso',
  silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
}).then((isAuthenticated) => {
  if (!isAuthenticated) {
    keycloak.login();
  } else {
    keycloak.loadUserProfile();
    ReactDOM.render(<App/>, document.getElementById('root'))
  }
}).catch(() => {
  keycloak.login();
})
