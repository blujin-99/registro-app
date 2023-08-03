import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-consulta-estado-tramite-mesa-entrada',
  templateUrl: './consulta-estado-tramite-mesa-entrada.component.html',
  styleUrls: ['./consulta-estado-tramite-mesa-entrada.component.scss']
})
export class ConsultaEstadoTramiteMesaEntradaComponent implements OnInit{
  form : FormGroup;
  invalidLocalidad : boolean = false
  invalidDate : boolean = false
  invalidNumero : boolean = false
  

  constructor(private fb : FormBuilder){
    this.form = this.fb.group({
      localidad: ['' ,Validators.required],
      fecha: ['', Validators.required],
      numeroIngreso: ['', [Validators.required, Validators.pattern('/^6$/')]]
    })
  }


  isValid(){
    if(this.form.get('locallidad')?.hasError('required')){
      this.invalidLocalidad = true
    }
    if(this.form.get('fecha')?.hasError('required')){
      this.invalidDate = true
    }
    if(this.form.get('numeroIngreso')?.hasError('required')){
      this.invalidNumero = true
    }
  }

  onSubmit(){
  this.isValid()
  console.log(this.form.value) 
  }


  ngOnInit(): void {

  }
}
