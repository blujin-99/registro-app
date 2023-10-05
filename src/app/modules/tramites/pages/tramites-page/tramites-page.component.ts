import { Component, OnInit } from '@angular/core';
import { TramitesService } from '../../services/tramites.service';

@Component({
  templateUrl: './tramites-page.component.html',
  styleUrls: ['./tramites-page.component.scss'],
  providers: [TramitesService],
})
export class TramitesPageComponent implements OnInit {
  cargando: boolean = true;
  constructor(private tramiteSrv: TramitesService) {}
  ngOnInit(): void {
    this.tramiteSrv.getTramites();

    this.cargando = false;
  }
}
