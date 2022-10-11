import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncelDetailsComponent } from './councel-details.component';

describe('CouncelDetailsComponent', () => {
  let component: CouncelDetailsComponent;
  let fixture: ComponentFixture<CouncelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouncelDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouncelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
