import { Component, OnInit } from '@angular/core';
import { NewTramiteService } from '../../services/new-tramite.service';
import { ICategoriaTramite, ITramiteServicio } from 'src/app/core/models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './nuevo-tramite-page.component.html',
  styleUrls: ['./nuevo-tramite-page.component.scss'],
  providers: [NewTramiteService],
})
export class NuevoTramitePageComponent implements OnInit {
  categorias: ICategoriaTramite[] = [];
  tramiteServicio: ITramiteServicio[] = [];

  formSRD: FormGroup = new FormGroup({});

  constructor(
    private newTramiteSrv: NewTramiteService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.formSRD = this.fb.group({
      categoria: [''],
      servicio: [''],
    });

    this.newTramiteSrv.getSRD().subscribe({
      next: (res: ICategoriaTramite[]) => {
        this.categorias = res;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  setTramiteServicio() {
    const categoria: ICategoriaTramite = this.formSRD.get('categoria')?.value;
    this.tramiteServicio = categoria.tipoTramiteServicios;
  }
}
