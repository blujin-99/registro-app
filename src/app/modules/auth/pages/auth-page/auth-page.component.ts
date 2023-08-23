import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  user: any;

  constructor(public userSrv: UserService) {}

  ngOnInit() {
    this.userSrv.initAuth();
  }
}
