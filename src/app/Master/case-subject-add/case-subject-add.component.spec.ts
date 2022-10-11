import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSubjectAddComponent } from './case-subject-add.component';

describe('CaseSubjectAddComponent', () => {
  let component: CaseSubjectAddComponent;
  let fixture: ComponentFixture<CaseSubjectAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseSubjectAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseSubjectAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
