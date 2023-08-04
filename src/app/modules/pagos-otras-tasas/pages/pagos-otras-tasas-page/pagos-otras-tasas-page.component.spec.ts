import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosOtrasTasasPageComponent } from './pagos-otras-tasas-page.component';

describe('PagosOtrasTasasPageComponent', () => {
  let component: PagosOtrasTasasPageComponent;
  let fixture: ComponentFixture<PagosOtrasTasasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagosOtrasTasasPageComponent]
    });
    fixture = TestBed.createComponent(PagosOtrasTasasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
