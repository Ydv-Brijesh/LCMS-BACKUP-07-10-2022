import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listview2Component } from './listview2.component';

describe('Listview2Component', () => {
  let component: Listview2Component;
  let fixture: ComponentFixture<Listview2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Listview2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Listview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
