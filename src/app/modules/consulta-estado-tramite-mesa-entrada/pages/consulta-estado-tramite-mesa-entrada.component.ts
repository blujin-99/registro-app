import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MESA } from 'src/app/core/models/mesa-entrada.interface';
import { ConsultaMesaEntradaService } from '../service/consulta-mesa-entrada.service';
import { Moment } from 'moment';
import { Consulta } from 'src/app/core/models/mesa-entrada.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-consulta-estado-tramite-mesa-entrada',
  templateUrl: './consulta-estado-tramite-mesa-entrada.component.html',
  styleUrls: ['./consulta-estado-tramite-mesa-entrada.component.scss']
})

export class ConsultaEstadoTramiteMesaEntradaComponent implements OnInit {
  form: FormGroup;
  error: any
  consulta: any
  constructor(private fb: FormBuilder, private mesaEntradaService: ConsultaMesaEntradaService) {

    this.form = this.fb.group({
      mesa: ['', Validators.required],
      fecha: ['', Validators.required],
      aforo: ['', [Validators.required, Validators.minLength(1), Validators.pattern('^[0-9]*$'), Validators.maxLength(6)]]
    })

  }

  onSubmit() {
    let mesaValue = this.form.get('mesa')?.value
    let fechaValue = this.form.get('fecha')?.value
    let aforoValue = this.form.get('aforo')?.value;
    
    const consulta : Consulta = {
      fecha:moment(fechaValue).format('DD/MM/YYYY'),
      aforo: aforoValue,
      mesa:mesaValue
    }
    
    this.consulta = consulta

    // this.mesaEntradaService.postConsulta(consulta).subscribe(data => {console.log(data)})

  }

  ngOnInit(): void {
    
   }
}
