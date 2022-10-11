import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtSectionWiseReportComponent } from './govt-section-wise-report.component';

describe('GovtSectionWiseReportComponent', () => {
  let component: GovtSectionWiseReportComponent;
  let fixture: ComponentFixture<GovtSectionWiseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovtSectionWiseReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovtSectionWiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
