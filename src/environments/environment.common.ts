export const common = {
  api: {
    fdadmintramite: 'tramite/{codigo}',
    tramites: 'tramites',
    tramitesFiltros: 'tramites/filtros',
    consulta: 'https://www.santafe.gob.ar/estadotramiterg/consulta',
    outhApi: 'login/oauth',
  },

  app: {
    ministerio: 'Ministerio de Gobierno, Justicia y Derechos Humanos',
    ministerioCorto: "MJ y DDHH",
    secretaria: 'Registro General de la Propiedad',
    nombre: 'Registro General de la Propiedad',
  },
  auth: {
    serviceAuthUrl: 'service-auth',
    authorizeUrl: 'service-auth/oauth2.0/authorize',
    accessTokenUrl: 'service-auth/oauth2.0/accessToken',
    profileUrl: 'service-auth/oauth2.0/profile',
    redirectUri: 'login',
    logoutUrl: '/service-auth/logout',
  },
};
