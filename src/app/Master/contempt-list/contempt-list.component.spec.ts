import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContemptListComponent } from './contempt-list.component';

describe('ContemptListComponent', () => {
  let component: ContemptListComponent;
  let fixture: ComponentFixture<ContemptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContemptListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContemptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
