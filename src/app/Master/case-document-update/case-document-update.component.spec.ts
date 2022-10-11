import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDocumentUpdateComponent } from './case-document-update.component';

describe('CaseDocumentUpdateComponent', () => {
  let component: CaseDocumentUpdateComponent;
  let fixture: ComponentFixture<CaseDocumentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseDocumentUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseDocumentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
