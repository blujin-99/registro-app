import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const userSrv = inject(UserService);

  if (userSrv.getUser()) {
    return true;
  }

  return false;
};
