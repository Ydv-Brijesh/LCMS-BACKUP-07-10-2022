import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryListViewComponent } from './beneficiary-list-view.component';

describe('BeneficiaryListViewComponent', () => {
  let component: BeneficiaryListViewComponent;
  let fixture: ComponentFixture<BeneficiaryListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiaryListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaryListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
