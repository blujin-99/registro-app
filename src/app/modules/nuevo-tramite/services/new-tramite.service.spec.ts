import { TestBed } from '@angular/core/testing';

import { NewTramiteService } from './new-tramite.service';

describe('NewTramiteService', () => {
  let service: NewTramiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTramiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
