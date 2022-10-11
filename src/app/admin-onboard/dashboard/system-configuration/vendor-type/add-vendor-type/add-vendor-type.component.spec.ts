import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVendorTypeComponent } from './add-vendor-type.component';

describe('AddVendorTypeComponent', () => {
  let component: AddVendorTypeComponent;
  let fixture: ComponentFixture<AddVendorTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVendorTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVendorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
