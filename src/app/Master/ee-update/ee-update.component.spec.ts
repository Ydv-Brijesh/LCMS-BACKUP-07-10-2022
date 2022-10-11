import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EeUpdateComponent } from './ee-update.component';

describe('EeUpdateComponent', () => {
  let component: EeUpdateComponent;
  let fixture: ComponentFixture<EeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
