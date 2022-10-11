import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectedActionTypeAddComponent } from './expected-action-type-add.component';

describe('ExpectedActionTypeAddComponent', () => {
  let component: ExpectedActionTypeAddComponent;
  let fixture: ComponentFixture<ExpectedActionTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpectedActionTypeAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpectedActionTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
