import { TestBed } from '@angular/core/testing';

import { CatchinErrorService } from './catchin-error.service';

describe('CatchinErrorService', () => {
  let service: CatchinErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatchinErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
