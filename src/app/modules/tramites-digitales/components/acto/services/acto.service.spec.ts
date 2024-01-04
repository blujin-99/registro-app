import { TestBed } from '@angular/core/testing';

import { ActoService } from './acto.service';

describe('ActoService', () => {
  let service: ActoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
