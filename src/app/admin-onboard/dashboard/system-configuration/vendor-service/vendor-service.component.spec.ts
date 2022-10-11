import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorServiceComponent } from './vendor-service.component';

describe('VendorServiceComponent', () => {
  let component: VendorServiceComponent;
  let fixture: ComponentFixture<VendorServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
