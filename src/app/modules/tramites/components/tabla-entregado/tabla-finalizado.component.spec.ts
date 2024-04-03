import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFinalizadoComponent } from './tabla-entregado.component';

describe('TablaFinalizadoComponent', () => {
  let component: TablaFinalizadoComponent;
  let fixture: ComponentFixture<TablaFinalizadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaFinalizadoComponent]
    });
    fixture = TestBed.createComponent(TablaFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
