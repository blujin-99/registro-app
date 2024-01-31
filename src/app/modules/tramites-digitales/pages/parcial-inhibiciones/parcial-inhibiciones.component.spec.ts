import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcialInhibicionesComponent } from './parcial-inhibiciones.component';

describe('ParcialInhibicionesComponent', () => {
  let component: ParcialInhibicionesComponent;
  let fixture: ComponentFixture<ParcialInhibicionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParcialInhibicionesComponent]
    });
    fixture = TestBed.createComponent(ParcialInhibicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
