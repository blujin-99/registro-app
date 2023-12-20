import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthStatus } from '../models';

export const urlAccessGuard: CanActivateFn = (route, state) => {
  let url = state.url;

  localStorage.setItem('url', url);

  return true;
};
