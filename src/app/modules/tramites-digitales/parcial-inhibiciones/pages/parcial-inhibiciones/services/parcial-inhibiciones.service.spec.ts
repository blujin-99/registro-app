import { TestBed } from '@angular/core/testing';

import { ParcialInhibicionesService } from './parcial-inhibiciones.service';

describe('ParcialInhibicionesService', () => {
  let service: ParcialInhibicionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParcialInhibicionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
