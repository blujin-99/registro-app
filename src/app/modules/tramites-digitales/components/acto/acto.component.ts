import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActoService } from './services/acto.service';
import { IActo } from '../../interfaces/acto';

import { Observable, of } from 'rxjs';
import { validFormClass } from 'src/app/shared/services/validFormClass';

@Component({
  selector: 'app-acto',
  templateUrl: './acto.component.html',
  styleUrls: ['./acto.component.scss'],
})
export class ActoComponent {
  actoForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    public actoService: ActoService,
    public ClassFormValidSrv: validFormClass
  ) {}

  ngOnInit() {
    // Observar cambios en el formulario y guardar en el servicio
    this.actoForm = this.fb.group({
      naturaleza: [this.actoService.acto.naturaleza, Validators.required],
    });
    this.actoForm.valueChanges.subscribe((value: IActo) => {
      this.actoService.acto = value;
      this.actoService.ActoValid = this.actoForm.valid;
    });
  }
}
