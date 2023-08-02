import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLinkComponent } from './btn-link.component';

describe('BtnLinkComponent', () => {
  let component: BtnLinkComponent;
  let fixture: ComponentFixture<BtnLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnLinkComponent]
    });
    fixture = TestBed.createComponent(BtnLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
