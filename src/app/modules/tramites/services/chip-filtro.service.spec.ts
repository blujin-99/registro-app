import { TestBed } from '@angular/core/testing';

import { ChipFiltroService } from './chip-filtro.service';

describe('ChipFiltroService', () => {
  let service: ChipFiltroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChipFiltroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
