import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jurisdiccion } from 'src/app/shared/interfaces/jurisdiccion.interface';
import { RpService } from 'src/app/shared/services/rp.service';
import { ActoService } from '../../../components/acto/services/acto.service';
import { ObservacionesService } from '../../../components/observaciones/services/observaciones.service';
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
    public inhibicionService: ParcialInhibicionesService,
    public actoService: ActoService,
    public observacionesService: ObservacionesService
  ) {}

  ngOnInit() 
  {
    initTabs();
    let of = this.route.snapshot.paramMap.get('oficina');
    if (of) {
      this.oficina = this.rpService.getJurisdiccion(of);
    }else{

    }
  }
}
