import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgnaisationAddComponent } from './orgnaisation-add.component';

describe('OrgnaisationAddComponent', () => {
  let component: OrgnaisationAddComponent;
  let fixture: ComponentFixture<OrgnaisationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgnaisationAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgnaisationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
