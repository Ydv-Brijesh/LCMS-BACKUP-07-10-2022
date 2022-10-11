import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtAddComponent } from './court-add.component';

describe('CourtAddComponent', () => {
  let component: CourtAddComponent;
  let fixture: ComponentFixture<CourtAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
