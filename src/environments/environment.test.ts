import { common } from './environment.common';

const baseURL = 'https://tapp.santafe.gob.ar/fdadmin';
const baseApi = baseURL + '/api/';

export const environment = {
    production: false,
    baseURL: baseURL,
    ...common,
    api: {
        fdadmin: {
            tramite: {
                byCodigo: baseApi + 'tramite/{codigo}',
            },
            TD: {
                get: baseApi + 'tramiteDigital/{codigo}',
                certificados: baseApi + 'tramiteDigital/tipo/certificado',
            },
            RD: {
                save: baseApi + 'respuestaD/{codigo}',
            },
            Inhibiciones: {
                busqueda: baseApi + 'inhibiciones/busqueda',
            },
        },
    },
};
