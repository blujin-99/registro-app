import { TestBed } from '@angular/core/testing';

import { TablaTramiteService } from './tabla-tramite.service';

describe('TablaTramiteService', () => {
  let service: TablaTramiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaTramiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
