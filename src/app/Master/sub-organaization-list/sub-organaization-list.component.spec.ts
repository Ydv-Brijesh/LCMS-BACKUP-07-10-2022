import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubOrganaizationListComponent } from './sub-organaization-list.component';

describe('SubOrganaizationListComponent', () => {
  let component: SubOrganaizationListComponent;
  let fixture: ComponentFixture<SubOrganaizationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubOrganaizationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubOrganaizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
