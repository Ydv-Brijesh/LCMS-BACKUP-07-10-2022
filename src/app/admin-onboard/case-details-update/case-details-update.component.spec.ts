import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDetailsUpdateComponent } from './case-details-update.component';

describe('CaseDetailsUpdateComponent', () => {
  let component: CaseDetailsUpdateComponent;
  let fixture: ComponentFixture<CaseDetailsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseDetailsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseDetailsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
