import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-case-type-update',
  templateUrl: './case-type-update.component.html',
  styleUrls: ['./case-type-update.component.css']
})
export class CaseTypeUpdateComponent implements OnInit {
  getData: any;
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
    .editCaseType(this.id)
    .subscribe((data: any) => {
      this.EditData=data.updateData[0];
      console.log(this.EditData,"Case Type data");
      
      this.onforminit(this.EditData)
    })
    this.viewCourtdata();
  }
  viewCourtdata(){
    this.MasterS.GetCourtdata().subscribe((data: any) => {
      console.log(data);
      this.getData = data.resultData;
    });
  }
  get f() {
    return this.saveForm.controls;
  }
  onforminit(userData: any) {
    this.saveForm = this.fb.group({
      court_id: [userData.court_id,Validators.required],
      case_type_name: [userData.case_type_name,Validators.required],
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
        .updateCaseType(this.saveForm.value, this.id)
        .subscribe((data: any) => {
          console.log('saved'); 
          this.toast.showSuccess(
            'Congratulation!, Data has been updated.'
          );
          window.location.href = '/case-type-list';
          // this.saveForm.reset()
        });
    }
  }


}
