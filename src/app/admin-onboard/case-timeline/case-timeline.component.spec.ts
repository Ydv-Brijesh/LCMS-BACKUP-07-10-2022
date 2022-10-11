import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTimelineComponent } from './case-timeline.component';

describe('CaseTimelineComponent', () => {
  let component: CaseTimelineComponent;
  let fixture: ComponentFixture<CaseTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
