import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubOrganaizationAddComponent } from './sub-organaization-add.component';

describe('SubOrganaizationAddComponent', () => {
  let component: SubOrganaizationAddComponent;
  let fixture: ComponentFixture<SubOrganaizationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubOrganaizationAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubOrganaizationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
