import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramitesPageComponent } from './tramites-page.component';

describe('TramitesPageComponent', () => {
  let component: TramitesPageComponent;
  let fixture: ComponentFixture<TramitesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TramitesPageComponent]
    });
    fixture = TestBed.createComponent(TramitesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
