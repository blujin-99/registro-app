export interface IPagos {
    nodo:          IOficiona[];
    tipoSolicitud: ITipoSolicitud[];
    otrosPagos:    IOtrosPago[];
}

export interface IOficiona {
    id:             number;
    idJurisdiccion: number;
    nombre:         string;
    abreviatura?:    string;
}

export interface IOtrosPago {
    id:            number;
    TipoSolicitud: ITipoSolicitud;
    concepto:      string;
    monto:         string;
    jurisdiccion:  number;
    max:           number;
}

export interface ITipoSolicitud {
    id:            number;
    solicitud:     Solicitud;
    observaciones: null;
}

export enum Solicitud {
    InscripcionOAnotacionDeDocumentos = "INSCRIPCION O ANOTACION DE DOCUMENTOS",
    PublicidadRegistral = "PUBLICIDAD REGISTRAL",
    ServicioCiudadanoConLegitimoInteres = "SERVICIO CIUDADANO CON LEGITIMO INTERES",
    TramitesEspeciales = "TRAMITES ESPECIALES",
}
