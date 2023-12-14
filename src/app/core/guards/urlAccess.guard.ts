import type { CanActivateFn } from '@angular/router';

export const urlAccessGuard: CanActivateFn = (route, state) => {
  const url = state.url;
  localStorage.setItem('url', url);

  return true;
};
