import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-case-subject-update',
  templateUrl: './case-subject-update.component.html',
  styleUrls: ['./case-subject-update.component.css']
})
export class CaseSubjectUpdateComponent implements OnInit {
  id: any;
  EditData: any;
  saveForm: any;
  isValidFormSubmitted!: boolean;

  constructor(
    private fb: UntypedFormBuilder,
    private MasterS: MasterService,
    private toast: ToasterService,
    private _Activatedroute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');

    this.MasterS
    .editCaseSubject(this.id)
    .subscribe((data: any) => {
      this.EditData=data.updateData[0];
      
      this.onforminit(this.EditData)
    })
   
  }

  onforminit(userData: any) {
    this.saveForm = this.fb.group({
      case_subject_name: [userData.case_subject_name,Validators.required]
    })
  }

  clickFunction() {
    this.isValidFormSubmitted = false;
    if (this.saveForm.invalid) {
      console.log(this.saveForm, 'error'); 
      this.isValidFormSubmitted = true;
    } else {
      console.log(this.saveForm.value, 'true');
      this.MasterS
        .updateCaseSubject(this.saveForm.value, this.id)
        .subscribe((data: any) => {
          console.log('saved'); 
          this.toast.showSuccess(
            'Congratulation!, Data has been updated.'
          );
          window.location.href = '/case-subject-list';
          // this.saveForm.reset()
        });
    }
  }

  get f() {
    return this.saveForm.controls;
  }
}
