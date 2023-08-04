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
     numeroIngreso: ['', [Validators.required ,     Validators.required, Validators.minLength(1),Validators.pattern('^[0-9]*$'),Validators.maxLength(6)]]
    })
  }

  onSubmit(){
 
  console.log(this.form.value) 
  }


  ngOnInit(): void {

  }
}
