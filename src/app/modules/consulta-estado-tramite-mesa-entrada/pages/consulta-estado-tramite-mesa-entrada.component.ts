import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MESA } from 'src/app/core/models/mesa-entrada.interface';

@Component({
  selector: 'app-consulta-estado-tramite-mesa-entrada',
  templateUrl: './consulta-estado-tramite-mesa-entrada.component.html',
  styleUrls: ['./consulta-estado-tramite-mesa-entrada.component.scss']
})

export class ConsultaEstadoTramiteMesaEntradaComponent implements OnInit {
  form: FormGroup;
  error: any

  tramite: MESA ={
    presentado: 'Santa Fe',
    numero: '0197255',
    fecha: new Date(2023,8,8),
    tipoDoc: ' Oficio',
    tipoEntrada:'Normal',
    salida: true,
    fechaSalida:  new Date(2023,7,12),
    tipoSalida: 'Mesa de Entrada',
    casillero:''
  }

  constructor(private fb: FormBuilder, private http: HttpClient) {

    this.form = this.fb.group({
      localidad: ['', Validators.required],
      fecha: ['', Validators.required],
      numeroIngreso: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[0-9]*$'), Validators.maxLength(6)]]
    })

  }

  

  getHttp() {
    return this.http.get('http:/example-api.com/data')
  }

  onSubmit() {
    this.getHttp().subscribe(
      (error) => {
        this.error = 'error' + error
        console.log(this.error)
      }
    )
    console.log(this.form.value)

  }

  ngOnInit(): void { }
}
