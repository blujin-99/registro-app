import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchingErrorComponent } from './catching-error.component';

describe('CatchingErrorComponent', () => {
  let component: CatchingErrorComponent;
  let fixture: ComponentFixture<CatchingErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatchingErrorComponent]
    });
    fixture = TestBed.createComponent(CatchingErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
