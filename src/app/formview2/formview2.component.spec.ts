import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formview2Component } from './formview2.component';

describe('Formview2Component', () => {
  let component: Formview2Component;
  let fixture: ComponentFixture<Formview2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formview2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
