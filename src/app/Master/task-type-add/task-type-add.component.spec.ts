import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTypeAddComponent } from './task-type-add.component';

describe('TaskTypeAddComponent', () => {
  let component: TaskTypeAddComponent;
  let fixture: ComponentFixture<TaskTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTypeAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
