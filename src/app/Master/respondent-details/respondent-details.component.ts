import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-respondent-details',
  templateUrl: './respondent-details.component.html',
  styleUrls: ['./respondent-details.component.css']
})
export class RespondentDetailsComponent implements OnInit {

  id: any;
  EditData: any;
  saveForm: any;
  isValidFormSubmitted!: boolean;
  getDataDist: any;

  constructor(
    private MasterS: MasterService,
    private fb: UntypedFormBuilder,
    private toast: ToasterService,
    private _Activatedroute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');

    this.MasterS
    .editRespondent(this.id)
    .subscribe((data: any) => {
      this.EditData=data.updateData[0];
      this.onforminit(this.EditData)
    });
    this.districtData();
  }

  districtData(){
    this.MasterS.GetDistrictata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataDist = data.resultData;
    });
  }
  onforminit(userData: any) {
    this.saveForm = this.fb.group({
      res_name: [userData.res_name,Validators.required],
      res_designation: [userData.res_designation,Validators.required],
      res_mobile: [userData.res_mobile,[Validators.required, Validators.pattern('^[0-9][0-9]{9}$')]],
      res_email: [userData.res_email,[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),]],
      res_block: [userData.res_block],
      res_district_id: [userData.res_district_id,Validators.required],
      res_village: [userData.res_village],
      res_address: [userData.res_address],
      res_pincode: [userData.res_pincode,[Validators.pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')]],
      res_divition: [userData.res_divition],
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
        .updateRespondent(this.saveForm.value, this.id)
        .subscribe((data: any) => {
          console.log('saved'); 
          this.toast.showSuccess(
            'Congratulation!, Data has been updated.'
          );
          window.location.href = '/respondent-list';
          // this.saveForm.reset()
        });
    }
  }

  get f() {
    return this.saveForm.controls;
  }
}
