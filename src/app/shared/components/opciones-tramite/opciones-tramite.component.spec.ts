import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesTramiteComponent } from './opciones-tramite.component';

describe('OpcionesTramiteComponent', () => {
  let component: OpcionesTramiteComponent;
  let fixture: ComponentFixture<OpcionesTramiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OpcionesTramiteComponent]
    });
    fixture = TestBed.createComponent(OpcionesTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
