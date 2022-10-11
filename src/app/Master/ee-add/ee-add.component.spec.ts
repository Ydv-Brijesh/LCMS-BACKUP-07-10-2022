import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEAddComponent } from './ee-add.component';

describe('EEAddComponent', () => {
  let component: EEAddComponent;
  let fixture: ComponentFixture<EEAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EEAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
