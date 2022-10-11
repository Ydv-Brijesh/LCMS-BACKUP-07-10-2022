import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTaskListComponent } from './case-task-list.component';

describe('CaseTaskListComponent', () => {
  let component: CaseTaskListComponent;
  let fixture: ComponentFixture<CaseTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
