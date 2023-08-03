import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPagosPageComponent } from './consulta-pagos-page.component';

describe('ConsultaPagosPageComponent', () => {
  let component: ConsultaPagosPageComponent;
  let fixture: ComponentFixture<ConsultaPagosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaPagosPageComponent]
    });
    fixture = TestBed.createComponent(ConsultaPagosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
