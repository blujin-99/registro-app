import { AbstractControl, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

export function espaciosValidator(control: AbstractControl): Observable<any> | null {
  let value1 = control as FormControl;

  if (!value1.value || value1.value.length === 0) {
    return of(null);
  }

  let value3 = value1.value.toString().trim();

  if (value3.length === 0) {
    value1.setValue('');
    return of({ required: true });
  }

  return of(null);
}






