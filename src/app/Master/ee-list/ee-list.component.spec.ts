import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEListComponent } from './ee-list.component';

describe('EEListComponent', () => {
  let component: EEListComponent;
  let fixture: ComponentFixture<EEListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EEListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
