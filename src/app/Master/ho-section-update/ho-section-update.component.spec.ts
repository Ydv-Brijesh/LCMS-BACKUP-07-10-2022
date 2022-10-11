import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSectionUpdateComponent } from './ho-section-update.component';

describe('HoSectionUpdateComponent', () => {
  let component: HoSectionUpdateComponent;
  let fixture: ComponentFixture<HoSectionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoSectionUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoSectionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
