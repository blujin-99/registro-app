import { Component, OnInit } from '@angular/core';
import { NewTramiteService } from '../../services/new-tramite.service';
import { ICategoriaTramite, ITramiteServicio } from 'src/app/core/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

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
    private fb: FormBuilder,
    private userSrv: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.formSRD = this.fb.group({
      categoria: ['', Validators.required],
      servicio: ['', Validators.required],
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
    this.tramiteServicio =
      this.formSRD.get('categoria')?.value.tipoTramiteServicios;
  }

  redirectSRD() {
    const urlBase = this.formSRD.get('servicio')?.value.new;
    if (urlBase) {
      const url =
        'http://10.1.46.32:5656/formelectronico/web/app_dev.php/auth/' +
        this.userSrv.getToken() +
        '?redirect=' +
        '../formularios' +
        this.formSRD.get('servicio')?.value.urlBase +
        this.formSRD.get('servicio')?.value.new;
      window.location.href = url;
      console.log(url);
    } else {
      const url =
        'http://10.1.46.32:5656/formelectronico/web/app_dev.php/auth/' +
        this.userSrv.getToken() +
        '?redirect=' +
        '../formularios' +
        '/SR/' +
        this.formSRD.get('servicio')?.value.id;
      window.location.href = url;
      console.log(url);
    }
  }
}
