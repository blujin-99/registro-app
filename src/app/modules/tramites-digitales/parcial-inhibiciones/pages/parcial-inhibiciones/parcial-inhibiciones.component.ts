import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jurisdiccion } from 'src/app/shared/interfaces/jurisdiccion.interface';
import { RpService } from 'src/app/shared/services/rp.service';
import { ActoService } from '../../../components/acto/services/acto.service';
import { ObservacionesService } from '../../../components/observaciones/services/observaciones.service';
import { ParcialInhibicionesService } from './services/parcial-inhibiciones.service';
import { initTabs } from 'flowbite';
import { IActo } from '../../../interfaces/acto';

@Component({
  selector: 'app-parcial-inhibiciones',
  templateUrl: './parcial-inhibiciones.component.html',
  styleUrls: ['./parcial-inhibiciones.component.scss'],
})
export class ParcialInhibicionesComponent implements OnInit {
  oficina?: Jurisdiccion | null;
  actos?: IActo={naturaleza:'inicio'}
  constructor(
    private route: ActivatedRoute,
    private rpService: RpService,
    public parcialInhibicionSrv: ParcialInhibicionesService,
    public actoService: ActoService,
    public observacionesService: ObservacionesService
  ) {}

  async ngOnInit(): Promise<void> 
  {

    initTabs();

    let oficina = this.route.snapshot.paramMap.get('oficina');
    let idTramite = this.route.snapshot.paramMap.get('idTramite');
    if(idTramite){
      this.parcialInhibicionSrv.getTramiteInhibiciones(idTramite).
        subscribe(
          ((data)=>{
            this.actoService.acto=data.actos 
            this.observacionesService.observaciones=data.observaciones 
            this.actos=data.actos
          }),
          (error)=>{
            // manejo los errores 
          console.log(error)
          }
       );
    }
    if (oficina) {
      this.oficina = this.rpService.getJurisdiccion(oficina);
    }
  }
}
