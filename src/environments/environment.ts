/**
 * Importo Variables generales
 */
import { common } from "./environment.common";

const baseAPI = 'https://twww.santafe.gob.ar/registropropiedad/api/';
const baseMJYDH ='https://twww.santafe.gov.ar/mjydh-web/api/public/sistemas/regprop_public/';
const AuthURL = 'https://dsso.santafe.gob.ar';

export const environment = {
  env: 'produccion',
  ...common,
  appBase: baseMJYDH,
  apiBase: baseAPI,
  authUrl: AuthURL,
  redirectUri: 'https://twww.santafe.gob.ar/registropropiedad/',
};
