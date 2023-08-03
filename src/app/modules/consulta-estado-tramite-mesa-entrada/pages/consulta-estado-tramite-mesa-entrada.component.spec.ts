import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEstadoTramiteMesaEntradaComponent } from './consulta-estado-tramite-mesa-entrada.component';

describe('ConsultaEstadoTramiteMesaEntradaComponent', () => {
  let component: ConsultaEstadoTramiteMesaEntradaComponent;
  let fixture: ComponentFixture<ConsultaEstadoTramiteMesaEntradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaEstadoTramiteMesaEntradaComponent]
    });
    fixture = TestBed.createComponent(ConsultaEstadoTramiteMesaEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
