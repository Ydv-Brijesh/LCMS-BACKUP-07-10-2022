import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeUpdateComponent } from './se-update.component';

describe('SeUpdateComponent', () => {
  let component: SeUpdateComponent;
  let fixture: ComponentFixture<SeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
