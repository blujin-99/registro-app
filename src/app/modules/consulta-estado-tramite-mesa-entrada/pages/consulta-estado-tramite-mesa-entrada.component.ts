import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaMesaEntradaService } from '../service/consulta-mesa-entrada.service';

import { AppService } from 'src/app/core/services/app.service';
import * as moment from 'moment';

@Component({
  selector: 'app-consulta-estado-tramite-mesa-entrada',
  templateUrl: './consulta-estado-tramite-mesa-entrada.component.html',
  styleUrls: ['./consulta-estado-tramite-mesa-entrada.component.scss'],
})
export class ConsultaEstadoTramiteMesaEntradaComponent {
  form: FormGroup;
  error: any;
  constructor(
    private fb: FormBuilder,
    private mesaEntradaService: ConsultaMesaEntradaService,
    public appService: AppService
  ) {
    this.form = this.fb.group({
      mesa: ['', Validators.required],
      fecha: ['', Validators.required],
      aforo: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern('^[0-9]*$'),
          Validators.maxLength(6),
        ],
      ],
    });
  }

  /**
   * @function Onsubmit método que envia los valores de formulario al service
   * y luego obtiene el resultado por http get subscribiendose al valor retornado
   */
  onSubmit() {
    /**
     * @var almacena valor del formulario
     */
    let mesaValue = this.form.get('mesa')?.value;
    let fechaValue = this.form.get('fecha')?.value;
    let aforoValue = this.form.get('aforo')?.value;

    this.mesaEntradaService.setConsulta(
      moment(fechaValue).format('DD/MM/YYYY'),
      aforoValue,
      mesaValue
    );
    this.mesaEntradaService.OpenModal();
  }
}
