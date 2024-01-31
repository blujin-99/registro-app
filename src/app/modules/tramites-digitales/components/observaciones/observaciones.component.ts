import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ObservacionesService } from '../../services/observaciones.service';
import { IObservaciones } from '../../interfaces/observaciones';
import { validFormClass } from 'src/app/shared/services/validFormClass';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
  styleUrls: ['./observaciones.component.scss'],
})
export class ObservacionesComponent implements OnInit, OnChanges {
  @Input({ required: true }) observacion!: IObservaciones;
  observacionForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    public observacionesSrv: ObservacionesService,
    public ClassFormValidSrv: validFormClass
  ) {}

  ngOnInit() {
    this.observacionForm = this.fb.group({
      observaciones: ['', Validators.required],
    });
    // Observar cambios en el formulario y guardar en el servicio
    this.observacionForm.valueChanges.subscribe((value: IObservaciones) => {
      this.observacionesSrv.observaciones = value;
      this.observacionesSrv.setObserValid(this.observacionForm.valid);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.observacionForm
      .get('observaciones')
      ?.setValue(this.observacion.observaciones);
  }
}
