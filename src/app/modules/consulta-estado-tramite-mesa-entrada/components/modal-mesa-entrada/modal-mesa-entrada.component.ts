import { Component } from '@angular/core';
import { MESA } from 'src/app/core/models/mesa-entrada.interface';

@Component({
  selector: 'app-modal-mesa-entrada',
  templateUrl: './modal-mesa-entrada.component.html',
  styleUrls: ['./modal-mesa-entrada.component.scss']
})
export class ModalMesaEntradaComponent {
  tramite: MESA ={
    presentado: 'Santa Fe',
    numero: '0197255',
    fecha: new Date(2023,7,8),
    tipoDoc: ' Oficio',
    tipoEntrada:'Normal',
    salida: true,
    fechaSalida:  new Date(2023,7,12),
    tipoSalida: 'Mesa de Entrada',
    casillero:''
  }
}
