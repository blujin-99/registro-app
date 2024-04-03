import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPendientesComponent } from '../../../../src/app/modules/tramites/components/tabla-no-presentado/tabla-no-presentado.component';

describe('TablaPendientesComponent', () => {
  let component: TablaPendientesComponent;
  let fixture: ComponentFixture<TablaPendientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaPendientesComponent],
    });
    fixture = TestBed.createComponent(TablaPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('sufrio cambios no esperados', () => {
    const fixture = TestBed.createComponent(TablaPendientesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled).toMatchSnapshot();
  });
});
