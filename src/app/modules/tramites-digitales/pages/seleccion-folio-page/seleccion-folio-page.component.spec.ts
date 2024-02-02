import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionFolioPageComponent } from './seleccion-folio-page.component';

describe('SeleccionFolioPageComponent', () => {
  let component: SeleccionFolioPageComponent;
  let fixture: ComponentFixture<SeleccionFolioPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeleccionFolioPageComponent]
    });
    fixture = TestBed.createComponent(SeleccionFolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
