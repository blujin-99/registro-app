import { TestBed } from '@angular/core/testing';

import { TablaTasasService } from './tabla-tasas.service';

describe('TablaTasasService', () => {
  let service: TablaTasasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaTasasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
