import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentingDetailsComponent } from './representing-details.component';

describe('RepresentingDetailsComponent', () => {
  let component: RepresentingDetailsComponent;
  let fixture: ComponentFixture<RepresentingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepresentingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
