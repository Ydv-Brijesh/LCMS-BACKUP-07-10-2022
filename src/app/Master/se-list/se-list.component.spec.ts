import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEListComponent } from './se-list.component';

describe('SEListComponent', () => {
  let component: SEListComponent;
  let fixture: ComponentFixture<SEListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SEListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SEListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
