import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionerListComponent } from './petitioner-list.component';

describe('PetitionerListComponent', () => {
  let component: PetitionerListComponent;
  let fixture: ComponentFixture<PetitionerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitionerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
