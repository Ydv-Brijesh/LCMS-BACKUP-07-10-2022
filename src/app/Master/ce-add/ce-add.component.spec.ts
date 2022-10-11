import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEAddComponent } from './ce-add.component';

describe('CEAddComponent', () => {
  let component: CEAddComponent;
  let fixture: ComponentFixture<CEAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CEAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CEAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
