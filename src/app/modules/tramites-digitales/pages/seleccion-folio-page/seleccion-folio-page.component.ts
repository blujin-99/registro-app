import { Component, OnInit } from '@angular/core';
import { TramiteDigitalService } from '../../services/tramite-digital.service';
import { ITipoTramite } from '../../interfaces/tipo-tramite';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seleccion-folio-page',
  templateUrl: './seleccion-folio-page.component.html',
  styleUrls: ['./seleccion-folio-page.component.scss'],
})
export class SeleccionFolioPageComponent implements OnInit {
  tiposTramite: ITipoTramite[] = [];
  tramite: ITipoTramite | undefined;

  constructor(
    private tramiteSrv: TramiteDigitalService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let tipoTramite = this.route.snapshot.paramMap.get('tipoTramite');

    this.tramiteSrv.getTipoTramites().subscribe({
      next: (res) => {
        this.tiposTramite = res;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.tramite = this.tiposTramite.find(
          (tramite) => tramite.pk === tipoTramite
        );
      },
    });
  }
}
