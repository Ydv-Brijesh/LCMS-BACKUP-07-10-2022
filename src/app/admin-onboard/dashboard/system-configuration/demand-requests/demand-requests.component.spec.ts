import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandRequestsComponent } from './demand-requests.component';

describe('DemandRequestsComponent', () => {
  let component: DemandRequestsComponent;
  let fixture: ComponentFixture<DemandRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
