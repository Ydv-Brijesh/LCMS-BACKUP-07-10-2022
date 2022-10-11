import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { CaseService } from 'src/app/services/case.service';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';
@Component({
  selector: 'app-case-details-update',
  templateUrl: './case-details-update.component.html',
  styleUrls: ['./case-details-update.component.css']
})
export class CaseDetailsUpdateComponent implements OnInit {
  id: any;
  EditData: any;
  saveForm: any;
  isValidFormSubmitted!: boolean;
  getDataExpectedAction: any;
  getDataCS: any;

  constructor(
    private fb: UntypedFormBuilder,
    private caseS: CaseService,
    private toast: ToasterService,
    private _Activatedroute: ActivatedRoute,
    private MasterS: MasterService,
  ) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    console.log( this.id,"idddddddddddddddddddddddd");

    this.caseS
    .editCaseDetails(this.id)
    .subscribe((data: any) => {
      this.EditData=data.updateData[0];
      
      console.log(this.EditData,"case details data");
      
      this.onforminit(this.EditData)
    })
    this.viewdataExpectedAction();
    this.statusData();
  }
  onforminit(userData: any) {
    this.saveForm = this.fb.group({
      hearing_date: [userData?.hearing_date],
      next_hearing_date: [userData?.next_hearing_date],
      court_order_date: [userData?.court_order_date],
      hearing_details: [userData?.hearing_details],
      expected_action_type: [userData?.expected_action_type],
      compliance_action: [userData?.compliance_action],
      compliance_action_start_date: [userData?.compliance_action_start_date],
      compliance_action_end_date: [userData?.compliance_action_end_date],
      land_mark_judgement: [userData?.land_mark_judgement],
      case_status_id: [userData?.case_status_id],
    })
  }

  clickFunction() {
    this.isValidFormSubmitted = false;
    if (this.saveForm.invalid) {
      console.log(this.saveForm, 'error'); 
      this.isValidFormSubmitted = true;
    } else {
      console.log(this.saveForm.value, 'true');
      this.caseS
        .updateCaseDetails(this.saveForm.value, this.id)
        .subscribe((data: any) => {
          console.log('saved'); 
          this.toast.showSuccess(
            'Congratulation!, Data has been updated.'
          );
          // window.location.href = '/case-subject-list';
          // this.saveForm.reset()
          window.location.reload()
        });
    }
  }

  get f() {
    return this.saveForm.controls;
  }

  viewdataExpectedAction(){
    this.MasterS.getExpectedAction().subscribe((data: any) => {
      
      this.getDataExpectedAction = data.resultData;
      // console.log(data.resultData);
    });
  }
  statusData() {
    this.MasterS.GetStatusdata().subscribe((data: any) => {
      // console.log(data.resultData);
      this.getDataCS = data.resultData;
    });
  }
}
