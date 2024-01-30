import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IPersonaHumana, ITipoDocumento } from '../../interfaces/personaHumana';
import { validFormClass } from 'src/app/shared/services/validFormClass';
import { PersonasService } from '../personas/services/Personas.service';

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
    public personasSrv: PersonasService,
    public ClassFormValidSrv: validFormClass
  ) {}

  ngOnInit(): void {
    this.phForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
    });
    
    /**
      * Obetngo datos para armar selec
     */    
     this.personasSrv.tipoDocumento.subscribe((data) => {
      this.tiposDocumentos = data;
    })

    
  }

  addPersona(){
    if(this.phForm.valid){
      this.personasSrv.add(this.phForm.value);
      //this.personaHumanaSrv.personaHumanaValid = this.phForm.valid;
      this.phForm.reset()

    }

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
