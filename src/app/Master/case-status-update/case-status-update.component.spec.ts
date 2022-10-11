import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStatusUpdateComponent } from './case-status-update.component';

describe('CaseStatusUpdateComponent', () => {
  let component: CaseStatusUpdateComponent;
  let fixture: ComponentFixture<CaseStatusUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStatusUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStatusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
