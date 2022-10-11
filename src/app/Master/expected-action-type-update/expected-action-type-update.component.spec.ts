import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectedActionTypeUpdateComponent } from './expected-action-type-update.component';

describe('ExpectedActionTypeUpdateComponent', () => {
  let component: ExpectedActionTypeUpdateComponent;
  let fixture: ComponentFixture<ExpectedActionTypeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpectedActionTypeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpectedActionTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
