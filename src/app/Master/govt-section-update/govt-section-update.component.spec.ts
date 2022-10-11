import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtSectionUpdateComponent } from './govt-section-update.component';

describe('GovtSectionUpdateComponent', () => {
  let component: GovtSectionUpdateComponent;
  let fixture: ComponentFixture<GovtSectionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovtSectionUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovtSectionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
