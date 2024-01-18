import { AbstractControl, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';


export function cuitValidator(
  control: AbstractControl
  ):    Observable<any> | null {

    let value1 = control as FormControl ;
    
  if (!value1.value || value1.value.length == 0  ){
    return of (null);     
  }
  
  let cuil = value1.value.trim();
  let digito = cuil.split('')[cuil.length - 1] ;
  if (cuil.length !== 11) {
    return of({mjydhError: 'El Cuit no tiene el Formato Correcto'});
  }

  const [checkDigit, ...rest] = cuil
    .split('')
    .map(Number)
    .reverse();

  const total = rest.reduce(
    (acc, cur, index) => acc + cur * (2 + (index % 6)),
    0,
  );

  const mod11 = 11 - (total % 11);
  
  switch(mod11){
    case 10:
      return of({required: true});
    case 11:
       if(checkDigit === 0){
         return of (null);
       }
    default:
         if(checkDigit === mod11){
          return of (null)
         }
  }
  return of({mjydhError: 'El Cuit no es válido'});
  


}