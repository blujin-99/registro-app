import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-validator-errors',
  templateUrl: './validator-errors.component.html',
  styleUrls: ['./validator-errors.component.scss'],
})
export class ValidatorErrorsComponent {
  @Input() control:any;
  @Input() getCampo!: string;
  /** Nuevos campos para Validad */
  mensaje: string = "El campo es obligatorio";

  /**
   * Parametizacion de errores
   */
  ERRORS = [
    { error: 'required', mensaje: "El Campo es Obligatorio" },
    { error: 'mask', mensaje: "El Campo debe tener el formato de: " },
    { error: 'min', mensaje: "El Campo debe ser Mayor a: " },
    { error: 'max', mensaje: "El Campo debe ser Menor a: " },
    { error: 'minlength', mensaje: "El Campo contiene Pocos Caracteres" },
    { error: 'maxlength', mensaje: "El Campo  contiene Muchos Caracteres" },
    { error: 'forbiddenName', mensaje: "El Campo contiene caractes prohibidos" },
    { error: 'pattern', mensaje: "El Patrón del Campo NO es correcto " },
    { error: 'default', mensaje: "El Campo no cumple las condiciones" },
    { error: 'mjydhError', mensaje: " " },
  ]

  constructor() { }

  /**
   *
   * @param campo nombre del campo que valida
   * @returns Mensaje de error 
   */
  getCampoControl(campo: string): FormControl {
    let error = this.control.get(campo).errors
    let valError;
    let add = "";
    
    if (error != null) {
      for (let errores in error) {
        valError = this.ERRORS.find(x => x.error == errores)
        if (errores == 'max') {
          add = error.max.max
        }
        if (errores == "min") {
          add = error.min.min
        }
        if (errores == "mask") {
          add = error.mask.requiredMask
        }
        if(errores== "mjydhError"){
          add = error.mjydhError;
        }
        if (!valError) {
          valError = this.ERRORS.find(x => x.error == 'default')
        }
       
        this.mensaje = valError?.mensaje + add;
      }
    }

    return this.control.get(campo) as FormControl;
  }

}
