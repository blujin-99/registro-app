import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ObservacionesService } from './services/observaciones.service';
import { IObservaciones } from '../../interfaces/observaciones';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
  styleUrls: ['./observaciones.component.scss'],
})
export class ObservacionesComponent {
  observacionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private observacionesService: ObservacionesService
  ) {
    this.observacionForm = this.fb.group({
      observaciones: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Observar cambios en el formulario y guardar en el servicio
    this.observacionForm.valueChanges.subscribe((value: IObservaciones) => {
      this.observacionesService.observaciones = value;
      this.observacionesService.setObserValid(this.observacionForm.valid)
    });
  }
}
