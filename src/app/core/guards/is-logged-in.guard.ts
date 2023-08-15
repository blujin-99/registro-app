import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const userSrv = inject(UserService);
  const router = inject(Router);

  if (userSrv.loggedIn$()) {
    return true;
  }

  router.navigateByUrl('/inicio');

  return false;
};
