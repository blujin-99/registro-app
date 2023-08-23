import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../config/auth.config';
import { UserService } from '../../services/user.service';
import { AvatarComponent } from 'src/app/shared/components/avatar/avatar.component';

@Component({
  standalone: true,
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  imports: [RouterModule, CommonModule, AvatarComponent],
})
export class SideBarComponent implements OnInit {
  sidebarOpen = false;

  constructor(public userSrv: UserService, private authSrv: AuthService) {}
  ngOnInit(): void {}

  login() {
    window.location.replace(
      'https://dsso.santafe.gob.ar/service-auth/oauth2.0/authorize?response_type=token&client_id=sso.santafe.gov.ar.5868506FJCKWEDG33&redirect_uri=http://localhost:4200/login'
    );
  }

  logout() {
    localStorage.clear();

    window.location.replace('http://localhost:4200/inicio');
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
