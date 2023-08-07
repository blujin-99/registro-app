import { TestBed } from '@angular/core/testing';

import { PagosTasasService } from './pagos-tasas.service';

describe('PagosTasasService', () => {
  let service: PagosTasasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagosTasasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
