import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActoService } from '../../services/acto.service';
import { IActo } from '../../interfaces/acto';

import { Observable, of } from 'rxjs';
import { validFormClass } from 'src/app/shared/services/validFormClass';

@Component({
  selector: 'app-acto',
  templateUrl: './acto.component.html',
  styleUrls: ['./acto.component.scss'],
})
export class ActoComponent implements OnInit, OnChanges {
  @Input({ required: true }) acto!: IActo;

  actoForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    public actosSrv: ActoService,
    public ClassFormValidSrv: validFormClass
  ) {}

  ngOnInit() {
    this.actoForm = this.fb.group({
      naturaleza: ['', Validators.required],
    });

    this.actoForm.valueChanges.subscribe((value: IActo) => {
      this.actosSrv.acto = value;
      this.actosSrv.actoValid = this.actoForm.valid;
    });
  }

  ngOnChanges(): void {
    this.actoForm.get('naturaleza')?.setValue(this.acto.naturaleza);
  }
}
