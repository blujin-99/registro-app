const baseURL: string =
  'http://10.1.46.32:5656/formelectronico/web/app_dev.php/API/v2/';
  const baseURLApi: string =
  'http://10.1.46.32:5656/formelectronico/web/app_dev.php/API/';


export const environment = {
  production: false,
  baseURL: baseURL,
  tramites: baseURL + 'usuario/tramite', //Listado de tramite del Usuario - Listado de trámites del Usuario y la búsqueda va por get  sobre esta url
  estadoTasas: baseURL + 'EstadoTasas',
  estadoTramite: baseURL + 'EstadoTramite',
  estadoExcedentes: baseURL + 'EstadoExcedentes',
  categoria: baseURL + 'usuario/TipoCategoriaTramite',
  tramiteServicio: baseURL + 'usuario/TipoTramiteService',
  jurisdiccion: baseURLApi +'getStatic/Jurisdiccion?orderby=nombre',
  app: {
    nombre: 'https://twww.santafe.gov.ar/mjydh-web/api',
  },
};
