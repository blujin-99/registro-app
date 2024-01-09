import { Component , OnInit} from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { Jurisdiccion } from 'src/app/shared/interfaces/jurisdiccion.interface';
import { RpService } from 'src/app/shared/services/rp.service';
import { TramiteDigitalService } from '../../services/tramite-digital.service';
import { TipoTramite } from '../../interfaces/tipo-tramite';

@Component({
  selector: 'app-tipos-tramites',
  templateUrl: './tipos-tramites.component.html',
  styleUrls: ['./tipos-tramites.component.scss']
})
export class TiposTramitesComponent implements OnInit {

  oficina?: Jurisdiccion|undefined;
  tiposTramites?:TipoTramite[]|null;

  constructor(
    private route: ActivatedRoute,
    private rpService : RpService,
    private tramiteDigitalService:TramiteDigitalService  ) {}

  ngOnInit(){
    let of = this.route.snapshot.paramMap.get('oficina');
    if (of){
      this.oficina = this.rpService.getJurisdiccion(of);
    }
    this.tiposTramites = this.tramiteDigitalService.getTipoTramites();
  }
}