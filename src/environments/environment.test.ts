/**
 * Importo Variables generales
 */
import { common } from "./environment.common";

//api
const baseAPI = 'https://twww.santafe.gob.ar/registropropiedad/api/';

//mjydh
const baseMJYDH = 'https://tasw.santafe.gob.ar/mjyddhh/mjydh-web/api/public/sistemas/regprop_public/';

//auth
const AuthURL = 'https://dsso.santafe.gob.ar';

export const environment = {
  env: 'testing',
  ...common,
  production: false,
  appBase: baseMJYDH,
  apiBase: baseAPI,
  authUrl: AuthURL,
  redirectUri: 'https://twww.santafe.gob.ar/registropropiedad/'
};

