import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEntregadoComponent } from './tabla-entregado.component';

describe('TablaEntregadoComponent', () => {
  let component: TablaEntregadoComponent;
  let fixture: ComponentFixture<TablaEntregadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaEntregadoComponent]
    });
    fixture = TestBed.createComponent(TablaEntregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
