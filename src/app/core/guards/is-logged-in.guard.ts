import { CanActivateFn } from '@angular/router';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  console.log({ route, state });

  return true;
};
