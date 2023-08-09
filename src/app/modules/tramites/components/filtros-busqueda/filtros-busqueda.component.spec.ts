import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosBusquedaComponent } from './filtros-busqueda.component';

describe('FiltrosBusquedaComponent', () => {
  let component: FiltrosBusquedaComponent;
  let fixture: ComponentFixture<FiltrosBusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltrosBusquedaComponent]
    });
    fixture = TestBed.createComponent(FiltrosBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
