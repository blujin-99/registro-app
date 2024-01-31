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

  tramitesDigitales: any = [
    {
      nombre: 'Certificado / Informes',

      link: '../formulariosv1/?#/',
    },
    {
      nombre: 'Declaratoria de Herederos',

      link: '../declaratoria/?#/declaratoria',
    },
  ];

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
      tramiteServicio: [{ value: '', disabled: true }, Validators.required],
      servicio: ['', Validators.required],
      tramiteDigital: ['', Validators.required],
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

  get tramited() {
    return this.form.get('tramiteDigital');
  }

  setTramiteServicio() {
    this.tramitesServicios = [];
    this.tramiteServicio?.setValue(null);
    this.tramiteServicio?.enable()
    this.tramitesServicios = this.categoria?.value.tipoTramiteServicios;
  }

  redirectToTramite(tramite: any) {
    const urlBase = tramite?.value;
    const urlForm = environment.formURL;
    if (urlBase.new) {
      const url =
        urlForm +
        this.userSrv.getToken() +
        '?redirect=' +
        '../formularios' +
        urlBase.urlBase +
        urlBase;
      window.location.href = url;
    } else {
      const url =
        urlForm +
        this.userSrv.getToken() +
        '?redirect=' +
        '../formularios' +
        '/SR/' +
        urlBase.id;
      window.location.href = url;
    }
  }

  redirectToTramitesDig(tramite: any) {
    const urlForm = environment.formURL;
    const url =
      urlForm + this.userSrv.getToken() + '?redirect=' + tramite.value.link;

    window.location.href = url;
  }
}
