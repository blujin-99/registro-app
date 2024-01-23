import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaHumanaComponent } from './persona-humana.component';

describe('PersonaHumanaComponent', () => {
  let component: PersonaHumanaComponent;
  let fixture: ComponentFixture<PersonaHumanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaHumanaComponent]
    });
    fixture = TestBed.createComponent(PersonaHumanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
