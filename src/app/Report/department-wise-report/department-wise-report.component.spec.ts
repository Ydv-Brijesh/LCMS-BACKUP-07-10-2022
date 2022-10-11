import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentWiseReportComponent } from './department-wise-report.component';

describe('DepartmentWiseReportComponent', () => {
  let component: DepartmentWiseReportComponent;
  let fixture: ComponentFixture<DepartmentWiseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentWiseReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentWiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
