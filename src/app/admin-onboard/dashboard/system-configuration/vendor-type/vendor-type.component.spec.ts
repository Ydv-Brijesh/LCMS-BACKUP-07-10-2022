import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTypeComponent } from './vendor-type.component';

describe('VendorTypeComponent', () => {
  let component: VendorTypeComponent;
  let fixture: ComponentFixture<VendorTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
