import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTipoTramiteComponent } from './card-tipo-tramite.component';

describe('CardTipoTramiteComponent', () => {
  let component: CardTipoTramiteComponent;
  let fixture: ComponentFixture<CardTipoTramiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTipoTramiteComponent]
    });
    fixture = TestBed.createComponent(CardTipoTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
