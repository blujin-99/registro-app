import { TestBed } from '@angular/core/testing';

import { ConsultaMesaEntradaService } from './consulta-mesa-entrada.service';

describe('ConsultaMesaEntradaService', () => {
  let service: ConsultaMesaEntradaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaMesaEntradaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
