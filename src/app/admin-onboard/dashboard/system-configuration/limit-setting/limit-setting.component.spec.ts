import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitSettingComponent } from './limit-setting.component';

describe('LimitSettingComponent', () => {
  let component: LimitSettingComponent;
  let fixture: ComponentFixture<LimitSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
