import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTaskUpdateComponent } from './case-task-update.component';

describe('CaseTaskUpdateComponent', () => {
  let component: CaseTaskUpdateComponent;
  let fixture: ComponentFixture<CaseTaskUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseTaskUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseTaskUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
