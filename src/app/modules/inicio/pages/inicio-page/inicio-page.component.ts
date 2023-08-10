import { Component, OnInit } from '@angular/core';
import { TramitesService } from '../../../tramites/services/tramites.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.scss'],
})
export class InicioPageComponent implements OnInit {
  errorMessage = '';
  code: any;
  user: any;
  nombre: any = '';
  apellido: any = '';
  cuil: any = '';
  imagen: any = '';
  userLogin: any;

  url = 'http://10.1.46.32:8181/registropropiedad/public/login/oauth';
  // url =
  //    'http://10.1.46.32:8181/registropropiedad/public/login/oauth?access_token=AT-65-zcxnt8r1PGDyEV7f6iIUfSVcDN-JOvMi';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location
  ) {}

  ngOnInit() {
    this.code = this.getAccessTokenFromUrl();
    localStorage.setItem('access_token', this.code);
    this.validoCodigo(this.code).subscribe((data) => {
      this.user = data;
      localStorage.setItem('user', JSON.stringify(this.user.user));
      localStorage.setItem('jwt', this.user.jwt);
      this.cargoDatos();
      console.log(this.user);
    });
  }

  getAccessTokenFromUrl(): string | null {
    const queryParams = this.location.path(true).split('#')[1];
    const params = new URLSearchParams(queryParams);
    return params.get('access_token');
  }

  validoCodigo(params: any) {
    const body = JSON.stringify({ access_token: params });
    return this.http.post(this.url, body);
  }
  cargoDatos() {
    this.userLogin = localStorage.getItem('user');
    this.userLogin = JSON.parse(this.userLogin);
  }
}
