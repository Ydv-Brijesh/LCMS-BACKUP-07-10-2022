import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncelUpdateComponent } from './councel-update.component';

describe('CouncelUpdateComponent', () => {
  let component: CouncelUpdateComponent;
  let fixture: ComponentFixture<CouncelUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouncelUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouncelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
