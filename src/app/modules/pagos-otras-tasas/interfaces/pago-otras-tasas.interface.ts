export interface IPagosFiltros {
    nodo:          IOficina[];
    tipoSolicitud: ITipoSolicitud[];
    otrosPagos:    IOtrosPago[];
}

export interface IOficina {
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

export interface IErrorObject {
    validOTC: boolean;
    validCantidad: boolean;
  }

  export interface ITablaPagos {
    id:              number;
    noboleta:        string;
    fechaPago:       Date;
    acto:            string;
    monto:           string;
    cantidad:        number;
    total:           string;
    codBarra:        string;
    ingresado:       string;
    fechaIngreso:    string | null;
    adminIngreso:    string | null;
    fechaAcreditado: number;
    comprobante:     null | string;
    profesional:     Profesional;
    oficina:         IOficina;
    mediosPago:     string | null;
}


export interface Profesional {
    nombre:           string;
    apellido:         string;
    numero_documento: string;
    cuil:             string;
    matricula:        string;
}

