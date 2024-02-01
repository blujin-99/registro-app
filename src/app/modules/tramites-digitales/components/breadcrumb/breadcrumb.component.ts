import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TramiteDigitalService } from 'src/app/modules/tramites-digitales/services/tramite-digital.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  /**
   * Se le puede pasar el tramite como un string
   * o en la selección de folios pasarle la variable de TramitesSrv.tipoTramite.nombre
   */
  @Input() tramite?: string;
  oficina?: string;
  folio?: string;
  oficinaPk?: string | null;
  folioPk?: string | null;

  constructor(
    private route: ActivatedRoute,
    public tramitesSrv: TramiteDigitalService
  ) {}

  ngOnInit(): void {
    this.oficinaPk = this.route.snapshot.paramMap.get('oficina');
    this.folioPk = this.route.snapshot.paramMap.get('folio');

    if (this.oficinaPk === 'santafe') {
      this.oficina = 'Santa Fe';
    } else {
      this.oficina = 'Rosario';
    }

    if (this.folioPk === 'fr') {
      this.folio = 'Folio Real';
    } else if (this.folioPk === 'fc') {
      this.folio = 'Folio Cronológico';
    }
  }
}
