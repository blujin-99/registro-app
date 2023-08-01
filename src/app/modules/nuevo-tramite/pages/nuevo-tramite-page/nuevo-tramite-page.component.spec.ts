import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTramitePageComponent } from './nuevo-tramite-page.component';

describe('NuevoTramitePageComponent', () => {
  let component: NuevoTramitePageComponent;
  let fixture: ComponentFixture<NuevoTramitePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoTramitePageComponent]
    });
    fixture = TestBed.createComponent(NuevoTramitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
