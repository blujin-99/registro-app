/**
 * Importo Variables generales
 */
import { common } from "./environment.common";

//api
const baseAPI = 'http://127.0.0.1/registropropiedad/public/api/';

//mjydh
const baseMJYDH = 'https://tasw.santafe.gob.ar/mjyddhh/mjydh-web/api/public/sistemas/regprop_public/';

//auth
const AuthURL = 'https://dsso.santafe.gob.ar';

export const environment = {
  env: 'develop',
  ...common,
  production: false,
  appBase: baseMJYDH,
  apiBase: baseAPI,
  authUrl: AuthURL,
  redirectUri: 'http://127.0.0.1:4200/login',


};


