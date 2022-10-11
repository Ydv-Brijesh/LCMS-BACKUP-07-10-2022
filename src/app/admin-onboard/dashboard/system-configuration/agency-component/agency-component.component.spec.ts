import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyComponentComponent } from './agency-component.component';

describe('AgencyComponentComponent', () => {
  let component: AgencyComponentComponent;
  let fixture: ComponentFixture<AgencyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
