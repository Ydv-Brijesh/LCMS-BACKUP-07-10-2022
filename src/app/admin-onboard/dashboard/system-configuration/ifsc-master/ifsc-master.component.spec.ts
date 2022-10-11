import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfscMasterComponent } from './ifsc-master.component';

describe('IfscMasterComponent', () => {
  let component: IfscMasterComponent;
  let fixture: ComponentFixture<IfscMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfscMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfscMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
