import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipFiltroComponent } from './chip-filtro.component';

describe('ChipFiltroComponent', () => {
  let component: ChipFiltroComponent;
  let fixture: ComponentFixture<ChipFiltroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipFiltroComponent]
    });
    fixture = TestBed.createComponent(ChipFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
