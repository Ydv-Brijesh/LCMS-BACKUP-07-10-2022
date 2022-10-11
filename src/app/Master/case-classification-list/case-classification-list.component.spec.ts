import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseClassificationListComponent } from './case-classification-list.component';

describe('CaseClassificationListComponent', () => {
  let component: CaseClassificationListComponent;
  let fixture: ComponentFixture<CaseClassificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseClassificationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseClassificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
