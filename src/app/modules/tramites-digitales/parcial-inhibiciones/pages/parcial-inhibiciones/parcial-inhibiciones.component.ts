import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jurisdiccion } from 'src/app/shared/interfaces/jurisdiccion.interface';
import { RpService } from 'src/app/shared/services/rp.service';
import { ActoService } from '../../../components/acto/services/acto.service';
import { ObservacionesService } from '../../../components/observaciones/services/observaciones.service';
import { PersonaHumanaService } from '../../../components/persona-humana/services/persona-humana-service.service';
import { ParcialInhibicionesService } from './services/parcial-inhibiciones.service';
import { initTabs } from 'flowbite';

@Component({
  selector: 'app-parcial-inhibiciones',
  templateUrl: './parcial-inhibiciones.component.html',
  styleUrls: ['./parcial-inhibiciones.component.scss'],
})
export class ParcialInhibicionesComponent implements OnInit {
  oficina?: Jurisdiccion | null;
  constructor(
    private route: ActivatedRoute,
    private rpService: RpService,
    public parcialInhibicionSrv: ParcialInhibicionesService,
    public actoService: ActoService,
    public observacionesSrv: ObservacionesService,
    public personaHumanaSrv: PersonaHumanaService
  ) {}

  ngOnInit(): void {
    initTabs();
    
    let oficina = this.route.snapshot.paramMap.get('oficina');
    let idTramite = this.route.snapshot.paramMap.get('idTramite');
    if (idTramite) {
      this.parcialInhibicionSrv.getTramiteInhibiciones(idTramite).subscribe(
        (data) => {
          this.actoService.acto = data.actos;
          this.personaHumanaSrv.personaHumana = data.personaH;
          this.observacionesSrv.observaciones = data.observaciones;
        },
        (error) => {
          this.personaHumanaSrv.personaHumana= { "nombre": "Horacio", "apellido": "locatelli", "tipoDocumento": { "id": 4, "nombre": "L.E.", "cod": 4 } }
          console.log(error);
        }
      );
    }
    
    if (oficina) {
      this.oficina = this.rpService.getJurisdiccion(oficina);
    }
  }
}
