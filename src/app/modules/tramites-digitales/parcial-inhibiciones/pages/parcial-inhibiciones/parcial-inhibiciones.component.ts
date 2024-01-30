import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jurisdiccion } from 'src/app/shared/interfaces/jurisdiccion.interface';
import { RpService } from 'src/app/shared/services/rp.service';
import { ActoService } from '../../../components/acto/services/acto.service';
import { ObservacionesService } from '../../../components/observaciones/services/observaciones.service';
import { ParcialInhibicionesService } from './services/parcial-inhibiciones.service';
import { initTabs } from 'flowbite';
import { PersonasService } from '../../../components/personas/services/Personas.service';

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
    public personasSrv:PersonasService
  ) {}

  ngOnInit(): void {
    initTabs();
    
    let oficina = this.route.snapshot.paramMap.get('oficina');
    let idTramite = this.route.snapshot.paramMap.get('idTramite');
    if (idTramite) {
      this.parcialInhibicionSrv.getTramiteInhibiciones(idTramite).subscribe(
        (data) => {
          this.actoService.acto = data.actos;
          this.personasSrv.personas=data.personas;
          this.observacionesSrv.observaciones = data.observaciones;
        },
        (error) => {
         
          console.log(error);
        }
      );
    }
    
    if (oficina) {
      this.oficina = this.rpService.getJurisdiccion(oficina);
    }
  }
}
