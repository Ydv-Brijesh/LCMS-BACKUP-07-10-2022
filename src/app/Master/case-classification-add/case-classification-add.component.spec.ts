import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseClassificationAddComponent } from './case-classification-add.component';

describe('CaseClassificationAddComponent', () => {
  let component: CaseClassificationAddComponent;
  let fixture: ComponentFixture<CaseClassificationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseClassificationAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseClassificationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
