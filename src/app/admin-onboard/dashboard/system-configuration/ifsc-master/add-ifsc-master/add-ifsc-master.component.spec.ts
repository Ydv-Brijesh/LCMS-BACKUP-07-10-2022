import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIfscMasterComponent } from './add-ifsc-master.component';

describe('AddIfscMasterComponent', () => {
  let component: AddIfscMasterComponent;
  let fixture: ComponentFixture<AddIfscMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIfscMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIfscMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
