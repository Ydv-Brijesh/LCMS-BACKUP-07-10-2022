import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictMasterComponent } from './district-master.component';

describe('DistrictMasterComponent', () => {
  let component: DistrictMasterComponent;
  let fixture: ComponentFixture<DistrictMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
