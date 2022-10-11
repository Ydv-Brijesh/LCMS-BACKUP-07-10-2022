import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionerDetailsComponent } from './petitioner-details.component';

describe('PetitionerDetailsComponent', () => {
  let component: PetitionerDetailsComponent;
  let fixture: ComponentFixture<PetitionerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitionerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetitionerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
