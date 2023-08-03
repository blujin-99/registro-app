import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA = [
  {
    position: 1,
    tramite: 'Hydrogen',
    acreditacion: 1.0079,
    estado: 'H',
    concepto: 'TASA',
    urgencia: 'NORMAL',
    importe: 1000,
  },
  {
    position: 2,
    tramite: 'Helium',
    acreditacion: 4.0026,
    estado: 'He',
    concepto: 'TASA',
    urgencia: 'NORMAL',
    importe: 1000,
  },
  {
    position: 3,
    tramite: 'Lithium',
    acreditacion: 6.941,
    estado: 'Li',
    concepto: 'TASA',
    urgencia: 'NORMAL',
    importe: 1000,
  },
  {
    position: 4,
    tramite: 'Beryllium',
    acreditacion: 9.0122,
    estado: 'Be',
    concepto: 'TASA',
    urgencia: 'NORMAL',
    importe: 1000,
  },
  {
    position: 5,
    tramite: 'Boron',
    acreditacion: 10.811,
    estado: 'B',
    concepto: 'TASA',
    urgencia: 'NORMAL',
    importe: 1000,
  },
  {
    position: 6,
    tramite: 'Carbon',
    acreditacion: 12.0107,
    estado: 'C',
    concepto: 'TASA',
    urgencia: 'NORMAL',
    importe: 1000,
  },
  {
    position: 7,
    tramite: 'Nitrogen',
    acreditacion: 14.0067,
    estado: 'N',
    concepto: 'TASA',
    urgencia: 'NORMAL',
    importe: 1000,
  },
  {
    position: 8,
    tramite: 'Oxygen',
    acreditacion: 15.9994,
    estado: 'O',
    concepto: 'TASA',
    urgencia: 'NORMAL',
    importe: 1000,
  },
  {
    position: 9,
    tramite: 'Fluorine',
    acreditacion: 18.9984,
    estado: 'F',
    concepto: 'TASA',
    urgencia: 'NORMAL',
    importe: 1000,
  },
  {
    position: 10,
    tramite: 'Neon',
    acreditacion: 20.1797,
    estado: 'Ne',
    concepto: 'TASA',
    urgencia: 'NORMAL',
    importe: 1000,
  },
];

@Component({
  templateUrl: './consulta-pagos-page.component.html',
  styleUrls: ['./consulta-pagos-page.component.scss'],
})
export class ConsultaPagosPageComponent {
  displayedColumns: string[] = [
    'position',
    'tramite',
    'acreditacion',
    'estado',
    'concepto',
    'urgencia',
    'importe',
  ];
  dataSource = ELEMENT_DATA;
}
