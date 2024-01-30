import { Component } from '@angular/core';
import { PersonasService } from '../personas/services/Personas.service';
import { IPersonaHumana } from '../../interfaces/personaHumana';
import { IPJuridica } from '../../interfaces/IPJuridica';

@Component({
  selector: 'app-personas-page',
  templateUrl: './personas-page.component.html',
  styleUrls: ['./personas-page.component.scss']
})
export class PersonasPageComponent {

  constructor( public personasSrv: PersonasService) {

  }

  editoPersona(persona: IPersonaHumana | IPJuridica) {
    if ('nombre' in persona && 'apellido' in persona && 'tipoDocumento' in persona) {
      this.personasSrv.editPersonaH = persona ;
    }
  }

}
