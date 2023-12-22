const id = 'MJYDH';
const appKey = 'rp';

export const common = {
  app: {
    key: appKey,
  },
  api: {
    fdadmintramite: 'tramite/{codigo}',
    tramites: 'tramites',
    tramitesFiltros: 'tramites/filtros',
    consulta: '/estadotramiterg/consulta',
    outhApi: 'login/oauth',
    newTramite: 'profesion/newTramite',
    actions: 'action',
    notificationUrl: 'notify/register',
  },
  auth: {
    serviceAuthUrl: 'service-auth',
    authorizeUrl: 'service-auth/oauth2.0/authorize',
    accessTokenUrl: 'service-auth/oauth2.0/accessToken',
    profileUrl: 'service-auth/oauth2.0/profile',
    logoutUrl: '/service-auth/logout',
  },
  login: {
    mjydh_cas: id + '_CAS',
    mjydh_jwt: id + '_JWT',
    mjydh_token: id + '_TOKEN',
    mjydh_refresh: 600000,
  },
  cas: {
    idciudadana: 'idciudadana',
  },
};
