import { Component, OnInit } from '@angular/core';
import { RpService } from 'src/app/shared/services/rp.service';
import { Jurisdiccion } from 'src/app/shared/interfaces/jurisdiccion.interface';
import { ActivatedRoute } from '@angular/router';
import { TramiteDigitalService } from '../../services/tramite-digital.service';

@Component({
  selector: 'app-oficina-presentacion',
  templateUrl: './oficina-presentacion.component.html',
  styleUrls: ['./oficina-presentacion.component.scss'],
})
export class OficinaPresentacionComponent {
  jurisdicciones: Jurisdiccion[];
  constructor(
    public rp: RpService,

    public tramitesSrv: TramiteDigitalService
  ) {
    this.jurisdicciones = rp.jurisdicciones();
  }
}
