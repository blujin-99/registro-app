import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaNotificacionesComponent } from './bandeja-notificaciones.component';

describe('BandejaNotificacionesComponent', () => {
  let component: BandejaNotificacionesComponent;
  let fixture: ComponentFixture<BandejaNotificacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandejaNotificacionesComponent]
    });
    fixture = TestBed.createComponent(BandejaNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
