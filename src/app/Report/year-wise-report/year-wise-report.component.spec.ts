import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearWiseReportComponent } from './year-wise-report.component';

describe('YearWiseReportComponent', () => {
  let component: YearWiseReportComponent;
  let fixture: ComponentFixture<YearWiseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearWiseReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearWiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
