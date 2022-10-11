import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtSectionAddComponent } from './govt-section-add.component';

describe('GovtSectionAddComponent', () => {
  let component: GovtSectionAddComponent;
  let fixture: ComponentFixture<GovtSectionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovtSectionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovtSectionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
