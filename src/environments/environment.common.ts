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
    newTramite: 'profesion/newTramites',
    actions: 'tramites/{codigo}/action',
    notificationUrl: 'notify/register',
    pagosOpciones:'pagos/otrosPagos/opciones',
    pagoBoleta : 'pagos/otrosPagos/pago_boleta/{oficina}/{concepto}/{cantidad}',
    pagosOtrosPagos :'pagos/otrosPagos'
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
  notificacion:{
      nombre:"notificacion"
  },
  cas: {
    idciudadana: 'idciudadana',
  },
  
 
};
