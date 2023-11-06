import { Component, OnInit } from '@angular/core';
import { NewTramiteService } from '../../services/new-tramite.service';
import { ICategoriaTramite, ITramiteServicio } from 'src/app/core/models';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  tramitesServicios: ITramiteServicio[] = [];
  servicios: ITramiteServicio[] = [];

  form: FormGroup = new FormGroup({});

  constructor(
    private newTramiteSrv: NewTramiteService,
    private fb: FormBuilder,
    private userSrv: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      categoria: ['', Validators.required],
      tramiteServicio: ['', Validators.required],
      servicio: ['', Validators.required],
    });

    this.newTramiteSrv.getSRD().subscribe({
      next: (res: ICategoriaTramite[]) => {
        this.categorias = res;
        const categoriaServicio = res.find((obj) => obj.id === 30);
        this.servicios = categoriaServicio!.tipoTramiteServicios;
      },
    });
  }

  get categoria() {
    return this.form.get('categoria');
  }

  get tramiteServicio() {
    return this.form.get('tramiteServicio');
  }

  get servicio() {
    return this.form.get('servicio');
  }

  setTramiteServicio() {
    this.tramitesServicios = [];
    this.tramiteServicio?.setValue(null);
    this.tramitesServicios = this.categoria?.value.tipoTramiteServicios;
  }

  redirectToTramite(tramite: any) {
    const urlBase = tramite?.value.new;
    const urlForm = environment.formURL;
    if (urlBase) {
      const url =
        urlForm +
        this.userSrv.getToken() +
        '?redirect=' +
        '../formularios' +
        tramite?.value.urlBase +
        tramite?.value.new;
      window.location.href = url;
    } else {
      const url =
        urlForm +
        this.userSrv.getToken() +
        '?redirect=' +
        '../formularios' +
        '/SR/' +
        tramite?.value.id;
      window.location.href = url;
    }
  }
}
