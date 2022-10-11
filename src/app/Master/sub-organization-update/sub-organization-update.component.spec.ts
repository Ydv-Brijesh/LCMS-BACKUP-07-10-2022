import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubOrganizationUpdateComponent } from './sub-organization-update.component';

describe('SubOrganizationUpdateComponent', () => {
  let component: SubOrganizationUpdateComponent;
  let fixture: ComponentFixture<SubOrganizationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubOrganizationUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubOrganizationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
