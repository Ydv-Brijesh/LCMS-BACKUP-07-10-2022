import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTypeListComponent } from './case-type-list.component';

describe('CaseTypeListComponent', () => {
  let component: CaseTypeListComponent;
  let fixture: ComponentFixture<CaseTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
