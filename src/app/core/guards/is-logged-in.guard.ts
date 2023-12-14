import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthStatus } from '../models';
import { environment } from 'src/environments/environment';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const userSrv = inject(UserService);

  const url = state.url;
  localStorage.setItem('url', url);
  if (userSrv.authStatus() === AuthStatus.authenticated) {
    return true;
  }

  if (userSrv.authStatus() === AuthStatus.checking) {
    if (localStorage.getItem('url')) {
      userSrv.login();
    }
    return false;
  }
  userSrv.login();

  return false;
};
