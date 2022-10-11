import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSectionListComponent } from './ho-section-list.component';

describe('HoSectionListComponent', () => {
  let component: HoSectionListComponent;
  let fixture: ComponentFixture<HoSectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoSectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
