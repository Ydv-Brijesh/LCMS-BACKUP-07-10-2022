import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselListComponent } from './counsel-list.component';

describe('CounselListComponent', () => {
  let component: CounselListComponent;
  let fixture: ComponentFixture<CounselListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounselListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
