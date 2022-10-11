import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTypeUpdateComponent } from './case-type-update.component';

describe('CaseTypeUpdateComponent', () => {
  let component: CaseTypeUpdateComponent;
  let fixture: ComponentFixture<CaseTypeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseTypeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
