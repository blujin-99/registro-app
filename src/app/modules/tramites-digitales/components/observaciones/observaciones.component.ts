import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ObservacionesService } from './services/observaciones.service';
import { IObservaciones } from '../../interfaces/observaciones';
import { validFormClass } from 'src/app/shared/services/validFormClass';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
  styleUrls: ['./observaciones.component.scss'],
})
export class ObservacionesComponent {
  observacionForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    public observacionesService: ObservacionesService,
     public ClassFormValidSrv: validFormClass
  ) {
   
  }

  ngOnInit() {
    this.observacionForm = this.fb.group({
      observaciones: [this.observacionesService.observaciones.observaciones, Validators.required],
    });
    // Observar cambios en el formulario y guardar en el servicio
    this.observacionForm.valueChanges.subscribe((value: IObservaciones) => {
      this.observacionesService.observaciones = value;
      this.observacionesService.setObserValid(this.observacionForm.valid)
    });
  }
}
