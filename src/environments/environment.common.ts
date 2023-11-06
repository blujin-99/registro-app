export const common = {
  api: {
    fdadmintramite: 'tramite/{codigo}',
    tramites: 'tramites',
    tramitesFiltros: 'tramites/filtros',
    consulta: 'https://www.santafe.gob.ar/estadotramiterg/consulta',
    outhApi: 'login/oauth',
    newTramite: 'profesion/newTramite',
  },
  auth: {
    serviceAuthUrl: 'service-auth',
    authorizeUrl: 'service-auth/oauth2.0/authorize',
    accessTokenUrl: 'service-auth/oauth2.0/accessToken',
    profileUrl: 'service-auth/oauth2.0/profile',
    logoutUrl: '/service-auth/logout',
  },
  login: {
    mjydh_cas: 'MJYDH_CAS',
    mjydh_jwt: 'MJYDH_JWT',
    mjydh_token: 'MJYDH_TOKEN',
    mjydh_refresh: 600000,
  },
  cas: {
    idciudadana: 'idciudadana',
  },
};
