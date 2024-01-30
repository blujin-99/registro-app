import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasPageComponent } from './personas-page.component';

describe('PersonasPageComponent', () => {
  let component: PersonasPageComponent;
  let fixture: ComponentFixture<PersonasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonasPageComponent]
    });
    fixture = TestBed.createComponent(PersonasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
