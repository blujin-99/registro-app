import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../config/auth.config';
import { UserService } from '../../services/user.service';

@Component({
  standalone: true,
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  imports: [RouterModule, CommonModule],
})
export class SideBarComponent implements OnInit {
  sidebarOpen = false;

  constructor(public userSrv: UserService, private authSrv: AuthService) {}
  ngOnInit(): void {
    //Si el usuario no esta logeado
    const user = this.userSrv.getUser();
    // if (user && Object.keys(user).length > 1) {
    //   this.logeado = true;
    // } else {
    //   this.logeado = false;
    // }
  }

  login() {
    window.location.replace(
      'https://dsso.santafe.gob.ar/service-auth/oauth2.0/authorize?response_type=token&client_id=sso.santafe.gov.ar.5868506FJCKWEDG33&redirect_uri=http://localhost:4200/login'
    );
  }

  logout() {
    localStorage.clear();
    if (this.userSrv.loggedIn$()) {
      this.userSrv.loggedIn$.set(false);
      window.location.replace('http://localhost:4200/inicio');
    }
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
