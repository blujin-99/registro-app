import { Component } from '@angular/core';
import { PagosTasasService } from '../../services/pagos-tasas.service';
import { switchMap } from 'rxjs';
import { IOtrosPago } from '../../interfaces/pago-otras-tasas.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validFormClass } from 'src/app/shared/services/validFormClass';

@Component({
  selector: 'app-tabla-tasas',
  templateUrl: './tabla-tasas.component.html',
  styleUrls: ['./tabla-tasas.component.scss'],
})
export class TablaTasasComponent {
  
  formTasas : FormGroup

  monto : number = 0
  total : number = 0
  cantidad : number = 1

  constructor(
     private pagosSrv : PagosTasasService,
     private formb : FormBuilder,
     public validatorSrv : validFormClass
     ){
     
    this.formTasas = this.formb.group({
      cantidad: [{ value: '', disabled: true },[Validators.required,Validators.max]]
    })
 
  }

  ngOnInit(): void {
     this.pagosSrv.conceptoObs$.subscribe(concepto => {
      if(concepto){
        this.formTasas.get('cantidad')?.enable()
        this.monto = parseFloat(concepto.monto) // convierto el string en numérico
        this.cantidad = concepto.max
         
        this.setValorPorDefecto(this.cantidad)
      }
    })
    
      this.maxValues()
      this.validForm()
  }
//--------------------------------------------------------------------------------------
  setValorPorDefecto(cantidad : number){
    if(cantidad == 1){
      this.setControlCantidad(cantidad)
      this.calcTotal(cantidad)
    }{
      this.setControlCantidad(1)
      this.calcTotal(1)
    }
  }  

  setControlCantidad(value:number){
    //actualiza el valor al valor de la cantidad máxima
    this.formTasas.get('cantidad')?.
    setValue(value, { emitEvent: false });
  }

  maxValues():void{
    this.formTasas.get('cantidad')?.valueChanges.subscribe(value => {
    
      if (value > this.cantidad || value == 0) {
        // si el valor ingresado es mayor que la cantidad máxima
        // actualiza el valor del campo a la cantidad maxima
        this.setControlCantidad(this.cantidad) 
        value = this.cantidad
      }
      this.calcTotal(value)
    });
  }

  validForm(){
    this.formTasas.valueChanges.subscribe(value => {
        this.pagosSrv.setValidCantidad(this.formTasas.valid)
    })
  }

  calcTotal(cantidad: number){
    this.total = this.monto * cantidad
    this.pagosSrv.setCantidadTotal(cantidad)
  }
  
}