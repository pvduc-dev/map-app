import Keycloak, {KeycloakError, KeycloakPromise} from "keycloak-js";

export const auth = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'internal',
  clientId: 'front-end',
})

auth.onAuthError = () => {
  auth.clearToken();
  auth.login();
}

export const verify: KeycloakPromise<boolean, KeycloakError> = auth.init({
  onLoad: 'check-sso',
  silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
})

export const login = auth.login();

export const logout = auth.logout();

export const isLogged = auth.authenticated;

export const getUserProfile = auth.profile;

export const getAccessToken = auth.token;
