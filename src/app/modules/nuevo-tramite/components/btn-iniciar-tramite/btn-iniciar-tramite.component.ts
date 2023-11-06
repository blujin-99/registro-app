import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-iniciar-tramite',
  templateUrl: './btn-iniciar-tramite.component.html',
  styleUrls: ['./btn-iniciar-tramite.component.scss'],
})
export class BtnIniciarTramiteComponent {
  @Input({ required: true }) ruta: string = '';
  @Input() deshabilitar: any = true;
}
