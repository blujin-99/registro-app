import { Component, OnInit } from '@angular/core';
import { TramitesService } from '../../../tramites/services/tramites.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/core/services/user.service';

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

  constructor(public userSrv: UserService) {}

  ngOnInit() {
    //this.userSrv.initAuth();
  }
}
