import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnIniciarTramiteComponent } from './btn-iniciar-tramite.component';

describe('BtnIniciarTramiteComponent', () => {
  let component: BtnIniciarTramiteComponent;
  let fixture: ComponentFixture<BtnIniciarTramiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnIniciarTramiteComponent]
    });
    fixture = TestBed.createComponent(BtnIniciarTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
