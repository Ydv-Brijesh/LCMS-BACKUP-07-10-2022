import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemandRequestsComponent } from './add-demand-requests.component';

describe('AddDemandRequestsComponent', () => {
  let component: AddDemandRequestsComponent;
  let fixture: ComponentFixture<AddDemandRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDemandRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDemandRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
