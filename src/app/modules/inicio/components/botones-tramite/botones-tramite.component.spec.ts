import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesTramiteComponent } from './botones-tramite.component';

describe('BotonesTramiteComponent', () => {
  let component: BotonesTramiteComponent;
  let fixture: ComponentFixture<BotonesTramiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonesTramiteComponent]
    });
    fixture = TestBed.createComponent(BotonesTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
