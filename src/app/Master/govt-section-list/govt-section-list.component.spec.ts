import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtSectionListComponent } from './govt-section-list.component';

describe('GovtSectionListComponent', () => {
  let component: GovtSectionListComponent;
  let fixture: ComponentFixture<GovtSectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovtSectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovtSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
