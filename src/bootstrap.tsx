import App from './App';
import React from 'react';
import {createRoot} from "react-dom/client";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

// const keycloak = new Keycloak({
//   url: 'http://localhost:8080',
//   realm: 'test',
//   clientId: 'front-end',
// })
//
// keycloak.init({
//   onLoad: 'check-sso',
//   silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
// }).then((isAuthenticated) => {
//   if (!isAuthenticated) {
//     keycloak.login();
//   } else {
//     keycloak.loadUserProfile();
//     ReactDOM.render(<App/>, document.getElementById('root'))
//   }
// }).catch(() => {
//   keycloak.login();
// })
// document.addEventListener('contextmenu', ev => {
//   ev.preventDefault();
// })

const apolloClient = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache()
})

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(
  <ApolloProvider client={apolloClient}>
    <App/>
  </ApolloProvider>
)
