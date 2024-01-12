import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  user: any;

  constructor(public userSrv: UserService, private router: Router) {}

  ngOnInit() {
    if(!this.userSrv.unauthorized){
       this.userSrv.initAuth();
       this.router.navigate(['#/inicio']);
    }else{
      this.router.navigate(['#/auth']);
    }
  }
}
