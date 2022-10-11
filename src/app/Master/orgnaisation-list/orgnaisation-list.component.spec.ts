import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgnaisationListComponent } from './orgnaisation-list.component';

describe('OrgnaisationListComponent', () => {
  let component: OrgnaisationListComponent;
  let fixture: ComponentFixture<OrgnaisationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgnaisationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgnaisationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
