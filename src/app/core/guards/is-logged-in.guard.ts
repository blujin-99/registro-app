import { effect, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthStatus } from '../models';
import { environment } from 'src/environments/environment';


export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const userSrv = inject(UserService);

  effect(
    () => {
      if (userSrv.authStatus() === AuthStatus.authenticated) {
        return true;
      }

      if (userSrv.authStatus() === AuthStatus.checking) {
        if (localStorage.getItem(environment.env+environment.app.key +'url')) {
          userSrv.login();
        }
        return false;
      }
      userSrv.login();

      return false;
    },
    {
      allowSignalWrites: true,
    }
  );
  return true;
};
