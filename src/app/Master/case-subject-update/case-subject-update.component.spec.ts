import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSubjectUpdateComponent } from './case-subject-update.component';

describe('CaseSubjectUpdateComponent', () => {
  let component: CaseSubjectUpdateComponent;
  let fixture: ComponentFixture<CaseSubjectUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseSubjectUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseSubjectUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
