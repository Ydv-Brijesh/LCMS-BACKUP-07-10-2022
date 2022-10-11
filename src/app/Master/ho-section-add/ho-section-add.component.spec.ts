import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSectionAddComponent } from './ho-section-add.component';

describe('HoSectionAddComponent', () => {
  let component: HoSectionAddComponent;
  let fixture: ComponentFixture<HoSectionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoSectionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoSectionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
