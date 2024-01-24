import { Component } from '@angular/core';
import { PagosTasasService } from '../../services/pagos-tasas.service';
import { switchMap } from 'rxjs';
import { IOtrosPago } from '../../interfaces/pago-otras-tasas.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private pagosSrv : PagosTasasService, private formb : FormBuilder){
     
    this.formTasas = this.formb.group({
      cantidad: [{ value: '', disabled: true },[Validators.required]]
    })
 
  }

  ngOnInit(): void {
     this.pagosSrv.conceptoObs$.subscribe(concepto => {
      if(concepto){
        this.formTasas.get('cantidad')?.enable()
        this.monto = parseFloat(concepto.monto) // convierto el string en numérico
        this.cantidad = concepto.max
        if(this.cantidad == 1){
          this.setControlCantidad(this.cantidad)
          this.calcTotal(this.cantidad)
        }

      }
    })
    
      this.maxValues()
  }

  setControlCantidad(value:number){
    this.formTasas.get('cantidad')?.
    setValue(value, { emitEvent: false });
  }

  maxValues():void{
    this.formTasas.get('cantidad')?.valueChanges.subscribe(value => {
      if (value > this.cantidad || value == 0) {
        this.setControlCantidad(this.cantidad)
        value = this.cantidad
      }
      
      this.calcTotal(value)
    });
  }

  calcTotal(cantidad: number){
    this.total = this.monto * cantidad
    this.pagosSrv.setCantidadTotal(this.total,cantidad)
  }
  
}