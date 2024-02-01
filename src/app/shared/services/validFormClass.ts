import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class validFormClass {

  constructor() { }

  disableCampo(campo: any, campotochange?: any) {
    if (campo?.value == '') {
      return campotochange?.disable()
    } else {
      return campotochange?.enable()
    }
  }

  disableCampos(campo: any[], campotochange: any[]) {
    //si todos los campos están vacios deshabilitar los otros campos
    let stateDisable = campo.every(campo => campo?.value == '')
    //si todos los campos no están vacíos habilitar los otros campos
    let stateEnable = campo.every(campo => campo?.value !== '')
    if (stateDisable) {
      for (let index = 0; index < campotochange.length; index++) {
        return campotochange[index]?.enable()
      }
    }

    if (stateEnable) {
      for (let index = 0; index < campotochange.length; index++) {
        return campotochange[index]?.enable()
      }
    }

  }

  validNgclass(campo: any) {
    if (campo.touched) {

      if (campo.valid) {

        return 'bg-green-50 border border-green-500 text-green-900';
      }
      return 'bg-red-50 border border-red-500 text-red-900';
    }
    return "";
  }

}
