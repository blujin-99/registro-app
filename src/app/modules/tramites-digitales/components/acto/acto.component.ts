import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActoService } from './services/acto.service';
import { IActo } from '../../interfaces/acto';

@Component({
  selector: 'app-acto',
  templateUrl: './acto.component.html',
  styleUrls: ['./acto.component.scss'],
})
export class ActoComponent {
  actoForm: FormGroup;

  constructor(private fb: FormBuilder, public actoService: ActoService) {
    this.actoForm = this.fb.group({
      naturaleza: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Observar cambios en el formulario y guardar en el servicio
    this.actoForm.valueChanges.subscribe((value: IActo) => {
      this.actoService.acto = value;
      this.actoService.setActoValid(this.actoForm.valid);
    });
  }
}
