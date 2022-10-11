import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDocumentListComponent } from './case-document-list.component';

describe('CaseDocumentListComponent', () => {
  let component: CaseDocumentListComponent;
  let fixture: ComponentFixture<CaseDocumentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseDocumentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
