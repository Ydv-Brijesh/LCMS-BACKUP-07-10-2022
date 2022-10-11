import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEListComponent } from './ce-list.component';

describe('CEListComponent', () => {
  let component: CEListComponent;
  let fixture: ComponentFixture<CEListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CEListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CEListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
