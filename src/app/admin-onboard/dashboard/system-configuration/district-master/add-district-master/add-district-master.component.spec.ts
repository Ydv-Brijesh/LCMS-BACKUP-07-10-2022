import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistrictMasterComponent } from './add-district-master.component';

describe('AddDistrictMasterComponent', () => {
  let component: AddDistrictMasterComponent;
  let fixture: ComponentFixture<AddDistrictMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDistrictMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDistrictMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
