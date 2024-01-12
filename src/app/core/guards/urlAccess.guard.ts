import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import { AuthStatus } from '../models';
import { environment } from 'src/environments/environment';
import { StorageService } from '../services/storage.service';

export const urlAccessGuard: CanActivateFn = (route, state) => {
  const storageSrv = inject(StorageService)  
  storageSrv.url=state.url;
  return true;
};
