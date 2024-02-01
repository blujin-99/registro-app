import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class validFormClass {

  constructor() { }

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
