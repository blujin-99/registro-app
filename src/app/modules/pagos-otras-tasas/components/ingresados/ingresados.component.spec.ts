import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresadosComponent } from './ingresados.component';

describe('IngresadosComponent', () => {
  let component: IngresadosComponent;
  let fixture: ComponentFixture<IngresadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresadosComponent]
    });
    fixture = TestBed.createComponent(IngresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
