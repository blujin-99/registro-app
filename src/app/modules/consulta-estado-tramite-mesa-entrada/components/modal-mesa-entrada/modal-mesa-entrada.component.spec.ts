import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMesaEntradaComponent } from './modal-mesa-entrada.component';

describe('ModalMesaEntradaComponent', () => {
  let component: ModalMesaEntradaComponent;
  let fixture: ComponentFixture<ModalMesaEntradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalMesaEntradaComponent]
    });
    fixture = TestBed.createComponent(ModalMesaEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
