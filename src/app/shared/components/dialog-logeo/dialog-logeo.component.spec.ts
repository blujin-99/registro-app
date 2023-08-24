import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLogeoComponent } from './dialog-logeo.component';

describe('DialogLogeoComponent', () => {
  let component: DialogLogeoComponent;
  let fixture: ComponentFixture<DialogLogeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DialogLogeoComponent]
    });
    fixture = TestBed.createComponent(DialogLogeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
