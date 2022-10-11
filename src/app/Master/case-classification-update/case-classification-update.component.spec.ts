import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseClassificationUpdateComponent } from './case-classification-update.component';

describe('CaseClassificationUpdateComponent', () => {
  let component: CaseClassificationUpdateComponent;
  let fixture: ComponentFixture<CaseClassificationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseClassificationUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseClassificationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
