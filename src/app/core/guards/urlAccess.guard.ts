import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthStatus } from '../models';
import { environment } from 'src/environments/environment';

export const urlAccessGuard: CanActivateFn = (route, state) => {
  let url = state.url;
  
  localStorage.setItem(environment.env+environment.app.key+'url', url);

  return true;
};
