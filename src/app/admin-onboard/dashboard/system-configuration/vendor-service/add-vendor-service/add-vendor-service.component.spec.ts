import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVendorServiceComponent } from './add-vendor-service.component';

describe('AddVendorServiceComponent', () => {
  let component: AddVendorServiceComponent;
  let fixture: ComponentFixture<AddVendorServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVendorServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVendorServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
