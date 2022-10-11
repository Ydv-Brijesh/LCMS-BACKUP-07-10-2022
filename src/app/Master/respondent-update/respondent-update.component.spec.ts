import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondentUpdateComponent } from './respondent-update.component';

describe('RespondentUpdateComponent', () => {
  let component: RespondentUpdateComponent;
  let fixture: ComponentFixture<RespondentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespondentUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespondentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
