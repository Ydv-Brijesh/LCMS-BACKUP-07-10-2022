import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseReportComponent } from './district-wise-report.component';

describe('DistrictWiseReportComponent', () => {
  let component: DistrictWiseReportComponent;
  let fixture: ComponentFixture<DistrictWiseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictWiseReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictWiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
