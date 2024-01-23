import { TestBed } from '@angular/core/testing';

import { PersonaHumanaService } from './persona-humana-service.service';

describe('PersonaHumanaService', () => {
  let service: PersonaHumanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaHumanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
