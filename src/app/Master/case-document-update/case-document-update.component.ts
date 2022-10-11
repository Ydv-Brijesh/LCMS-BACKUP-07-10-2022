import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { CaseService } from 'src/app/services/case.service';
import { Form, UntypedFormBuilder, UntypedFormControl, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-case-document-update',
  templateUrl: './case-document-update.component.html',
  styleUrls: ['./case-document-update.component.css']
})
export class CaseDocumentUpdateComponent implements OnInit {

  saveForm: any;
  isValidFormSubmitted!: boolean;
  getDataDist: any;
  id: any;
  EditData: any;
  constructor(
    private MasterS: MasterService,
    private fb: UntypedFormBuilder,
    private toast: ToasterService,
    private CaseS: CaseService,
     private _Activatedroute: ActivatedRoute,
  ) { }

  get f() {
    return this.saveForm.controls;
  }
  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    this.MasterS
    .editCaseDoc(this.id)
    .subscribe((data: any) => {
      console.log(data.updateData[0]);
      
      this.EditData=data.updateData[0];
      this.onforminit(this.EditData)
    })
   
  }
 
  onforminit(userData:any) {
    
    this.saveForm = this.fb.group({
      case_doc_type: [userData.case_doc_type],
      case_doc_name: [userData.case_doc_name],
      // case_doc_attached_by: [userData.case_doc_attached_by],
      case_document: [userData.case_document],
    });
  }

  clickFunction() {
    this.isValidFormSubmitted = false;
    if (this.saveForm.invalid) {
      console.log(this.saveForm, 'error');
      this.isValidFormSubmitted = true;
    } else {
      console.log(this.saveForm.value, 'true');
      this.MasterS
        .updateCaseDoc(this.saveForm.value, this.id)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          window.location.href = '/case-document-list';
          // this.saveForm.reset()
          // window.location.reload()
        });

    }
 

  }


  uploadDocument($event:any){
    let file = $event.target.files;
    if (
      file[0].type == 'image/png' ||
      file[0].type == 'image/jpg' ||
      file[0].type == 'image/jpeg' ||
      file[0].type == 'application/pdf'||
      file[0].type == 'application/xlsx'
    ) {


      if (parseInt(file[0].size) > 5097152) {}
    else {
      const date = 'Wed Feb 20 2019 00:00:00 GMT-0400 (Atlantic Standard Time)';
      const time = '7:00 AM';
      this.CaseS.uploadFile(file[0]).subscribe((data: any) => {
      
 this.saveForm.get('case_document')?.setValue(data?.body)
 this.saveForm.get('case_document')?.updateValueAndValidity()
      })

      }
    }
    else {}

  }
}
