import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTypeUpdateComponent } from './task-type-update.component';

describe('TaskTypeUpdateComponent', () => {
  let component: TaskTypeUpdateComponent;
  let fixture: ComponentFixture<TaskTypeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTypeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
