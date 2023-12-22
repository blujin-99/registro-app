import { TestBed } from '@angular/core/testing';

import { TramiteDigitalService } from './tramite-digital.service';

describe('TramiteDigitalService', () => {
  let service: TramiteDigitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TramiteDigitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
