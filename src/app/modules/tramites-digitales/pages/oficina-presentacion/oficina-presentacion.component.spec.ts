import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaPresentacionComponent } from './oficina-presentacion.component';

describe('OficinaPresentacionComponent', () => {
  let component: OficinaPresentacionComponent;
  let fixture: ComponentFixture<OficinaPresentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OficinaPresentacionComponent]
    });
    fixture = TestBed.createComponent(OficinaPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
