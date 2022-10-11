import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEAddComponent } from './se-add.component';

describe('SEAddComponent', () => {
  let component: SEAddComponent;
  let fixture: ComponentFixture<SEAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SEAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SEAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
