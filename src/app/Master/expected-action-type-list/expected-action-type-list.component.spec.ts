import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectedActionTypeListComponent } from './expected-action-type-list.component';

describe('ExpectedActionTypeListComponent', () => {
  let component: ExpectedActionTypeListComponent;
  let fixture: ComponentFixture<ExpectedActionTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpectedActionTypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpectedActionTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
