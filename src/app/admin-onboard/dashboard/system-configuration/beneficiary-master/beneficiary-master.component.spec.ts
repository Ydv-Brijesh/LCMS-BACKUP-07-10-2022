import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryMasterComponent } from './beneficiary-master.component';

describe('BeneficiaryMasterComponent', () => {
  let component: BeneficiaryMasterComponent;
  let fixture: ComponentFixture<BeneficiaryMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiaryMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
