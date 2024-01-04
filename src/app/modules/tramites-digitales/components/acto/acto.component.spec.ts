import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoComponent } from './acto.component';

describe('ActoComponent', () => {
  let component: ActoComponent;
  let fixture: ComponentFixture<ActoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActoComponent]
    });
    fixture = TestBed.createComponent(ActoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
