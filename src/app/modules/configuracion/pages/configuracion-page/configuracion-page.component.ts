import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  templateUrl: './configuracion-page.component.html',
  styleUrls: ['./configuracion-page.component.scss'],
})
export class ConfiguracionPageComponent implements OnInit {
  constructor(public userSrv: UserService) {}

  ngOnInit() {
    this.userSrv.initAuth();
  }
}
