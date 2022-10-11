import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { CaseService } from 'src/app/services/case.service';
import { Form, UntypedFormBuilder, UntypedFormControl, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-case-task-update',
  templateUrl: './case-task-update.component.html',
  styleUrls: ['./case-task-update.component.css']
})
export class CaseTaskUpdateComponent implements OnInit {
  saveForm: any;
  isValidFormSubmitted!: boolean;
  getDataDist: any;
  id: any;
  EditData: any;
  getDataUser: any;
  getDataTaskType: any;
  constructor(
    private MasterS: MasterService,
    private fb: UntypedFormBuilder,
    private toast: ToasterService,
    private CaseS: CaseService,
     private _Activatedroute: ActivatedRoute,
     private AuthS: AuthService,
  ) { }

  get task() {
    return this.saveForm.controls;
  }
  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    this.MasterS
    .editCaseTask(this.id)
    .subscribe((data: any) => {
      console.log(data.updateData[0]);
      
      this.EditData=data.updateData[0];
      this.onforminit(this.EditData)
    })
    this.districtData();
    this.viewdataUser();
    this.taskTypeData();
  }
  viewdataUser(){
    this.AuthS.getUser().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataUser = data.resultData;
    });
  }
  
  districtData(){
    this.MasterS.GetDistrictata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataDist = data.resultData;
    });
  }

  taskTypeData() {
    this.MasterS.getTaskType().subscribe((data: any) => {
      // console.log(data.resultData);
      this.getDataTaskType = data.resultData;
    });
  }
  onforminit(userData:any) {
    
    this.saveForm = this.fb.group({
      case_task_type: [userData.case_task_type,Validators.required],
      case_task_name: [userData.case_task_name,Validators.required],
      case_task_subject: [userData.case_task_subject],
      case_task_owner: [userData.case_task_owner,Validators.required],
      case_task_duedate: [userData.case_task_duedate],
      status: [userData.status],
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
        .updateCaseTask(this.saveForm.value, this.id)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          window.location.href = '/case-task-list';
          // this.saveForm.reset()
          // window.location.reload()
        });

    }
 

  }

}
