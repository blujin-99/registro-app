import { effect, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthStatus } from '../models';
import { StorageService } from '../services/storage.service';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const userSrv = inject(UserService);
  const storageSrv = inject(StorageService);

  effect(
    () => {
      if (userSrv.authStatus() === AuthStatus.authenticated) {
        return true;
      }

      if (userSrv.authStatus() === AuthStatus.checking) {
        if (storageSrv.url) {
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
