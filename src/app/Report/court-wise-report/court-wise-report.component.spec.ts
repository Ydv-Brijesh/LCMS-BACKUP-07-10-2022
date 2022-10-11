import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtWiseReportComponent } from './court-wise-report.component';

describe('CourtWiseReportComponent', () => {
  let component: CourtWiseReportComponent;
  let fixture: ComponentFixture<CourtWiseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtWiseReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtWiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
