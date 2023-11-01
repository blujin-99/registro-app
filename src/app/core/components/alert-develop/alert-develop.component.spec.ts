import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDevelopComponent } from './alert-develop.component';

describe('AlertDevelopComponent', () => {
  let component: AlertDevelopComponent;
  let fixture: ComponentFixture<AlertDevelopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertDevelopComponent]
    });
    fixture = TestBed.createComponent(AlertDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
