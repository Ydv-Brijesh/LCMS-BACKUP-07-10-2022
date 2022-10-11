import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStatusAddComponent } from './case-status-add.component';

describe('CaseStatusAddComponent', () => {
  let component: CaseStatusAddComponent;
  let fixture: ComponentFixture<CaseStatusAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStatusAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStatusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
