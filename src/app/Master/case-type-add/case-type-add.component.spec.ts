import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTypeAddComponent } from './case-type-add.component';

describe('CaseTypeAddComponent', () => {
  let component: CaseTypeAddComponent;
  let fixture: ComponentFixture<CaseTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseTypeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
