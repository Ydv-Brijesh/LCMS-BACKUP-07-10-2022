import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondentDetailsComponent } from './respondent-details.component';

describe('RespondentDetailsComponent', () => {
  let component: RespondentDetailsComponent;
  let fixture: ComponentFixture<RespondentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespondentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespondentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
