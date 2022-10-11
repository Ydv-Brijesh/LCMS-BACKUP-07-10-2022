import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSubjectListComponent } from './case-subject-list.component';

describe('CaseSubjectListComponent', () => {
  let component: CaseSubjectListComponent;
  let fixture: ComponentFixture<CaseSubjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseSubjectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseSubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
