import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCategoriaComponent } from './alert-categoria.component';

describe('AlertCategoriaComponent', () => {
  let component: AlertCategoriaComponent;
  let fixture: ComponentFixture<AlertCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlertCategoriaComponent]
    });
    fixture = TestBed.createComponent(AlertCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
