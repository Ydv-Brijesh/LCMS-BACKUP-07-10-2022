import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionerUpdateComponent } from './petitioner-update.component';

describe('PetitionerUpdateComponent', () => {
  let component: PetitionerUpdateComponent;
  let fixture: ComponentFixture<PetitionerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitionerUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetitionerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
