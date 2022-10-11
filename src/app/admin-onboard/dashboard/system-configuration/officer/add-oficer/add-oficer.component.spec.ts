import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOficerComponent } from './add-oficer.component';

describe('AddOficerComponent', () => {
  let component: AddOficerComponent;
  let fixture: ComponentFixture<AddOficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
