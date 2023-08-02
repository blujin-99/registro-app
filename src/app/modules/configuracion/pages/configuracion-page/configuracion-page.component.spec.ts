import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionPageComponent } from './configuracion-page.component';

describe('ConfiguracionPageComponent', () => {
  let component: ConfiguracionPageComponent;
  let fixture: ComponentFixture<ConfiguracionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionPageComponent]
    });
    fixture = TestBed.createComponent(ConfiguracionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
