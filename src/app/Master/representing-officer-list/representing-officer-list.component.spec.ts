import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentingOfficerListComponent } from './representing-officer-list.component';

describe('RepresentingOfficerListComponent', () => {
  let component: RepresentingOfficerListComponent;
  let fixture: ComponentFixture<RepresentingOfficerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentingOfficerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentingOfficerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
