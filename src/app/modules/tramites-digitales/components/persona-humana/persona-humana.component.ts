import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IPersonaHumana, ITipoDocumento } from '../../interfaces/personaHumana';
import { validFormClass } from 'src/app/shared/services/validFormClass';
import { PersonaHumanaService } from './services/persona-humana-service.service';

@Component({
  selector: 'app-persona-humana',
  templateUrl: './persona-humana.component.html',
  styleUrls: ['./persona-humana.component.scss'],
})
export class PersonaHumanaComponent implements OnInit {
  @Input({ required: true }) personaHumana!: IPersonaHumana;

  phForm: FormGroup = new FormGroup({});
  tiposDocumentos: any[] = [];

  constructor(
    private fb: FormBuilder,
    public personaHumanaSrv: PersonaHumanaService,
    public ClassFormValidSrv: validFormClass
  ) {}

  ngOnInit(): void {
    this.phForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
    });
    
    this.phForm.valueChanges.subscribe((value: IPersonaHumana) => {
      this.personaHumanaSrv.personaHumana = value;
     
      this.personaHumanaSrv.personaHumanaValid = this.phForm.valid;
    });

     /**
      * Obetngo datos para armar selec
     */    
     this.personaHumanaSrv.tipoDocumento.subscribe((data) => {
      this.tiposDocumentos = data;
    })

    
  }

  compareFn(c1: ITipoDocumento, c2: ITipoDocumento): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
}
  
  ngOnChanges(): void {
     this.phForm.patchValue(this.personaHumana);
 /*
    this.phForm.get('nombre')?.setValue(this.personaHumana.nombre);
    this.phForm.get('apellido')?.setValue(this.personaHumana.apellido);
    this.phForm.get('tipoDocumento')?.setValue(this.personaHumana.tipoDocumento);
*/
  }



}
