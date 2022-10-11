import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-representing-details',
  templateUrl: './representing-details.component.html',
  styleUrls: ['./representing-details.component.css']
})
export class RepresentingDetailsComponent implements OnInit {
  getDataDist: any;
  getData: any;
  saveForm: any;
  isValidFormSubmitted!: boolean;
  id: any;
  EditData: any;

  constructor(
    private fb: UntypedFormBuilder,
    private ho: MasterService,
    private toast: ToasterService,
    private _Activatedroute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');

    this.ho
    .editEE(this.id)
    .subscribe((data: any) => {
      console.log(data.updateData[0]);
      this.EditData=data.updateData[0];
      this.onforminit(this.EditData)
    })
    this.viewdataOrgSe();
    this. districtData();
  }
  districtData(){
    this.ho.GetDistrictata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataDist = data.resultData;
    });
  }

  viewdataOrgSe(){
    this.ho.GetSEdata().subscribe((data: any) => {
      // console.log(data.resultData,"sub org cre data");
      this.getData = data.resultData;
    });
  }

  onforminit(userData: any) {
    console.log(userData,'sub org data');
    
    this.saveForm = this.fb.group({
      se_id: [userData.se_id,Validators.required],
      ee_name: [userData.ee_name,Validators.required],
      ee_email: [userData.ee_email,[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),]],
      ee_mobile: [userData.ee_mobile,[Validators.required, Validators.pattern('^[0-9][0-9]{9}$')]],
      ee_district_id: [userData.ee_district_id,Validators.required],
      ee_designation: [userData.ee_designation,Validators.required],
      ee_village: [userData.ee_village],
      ee_address: [userData.ee_address],
      ee_pincode: [userData.ee_pincode,[Validators.pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')]],
      ee_block: [userData.ee_block],
      ee_divition: [userData.ee_divition],
    })
  }

  clickFunction() {
    this.isValidFormSubmitted = false;
    if (this.saveForm.invalid) {
      console.log(this.saveForm, 'error');
      this.isValidFormSubmitted = true;
    } else {
      console.log(this.saveForm.value, 'true');
      this.ho
        .updateEE(this.saveForm.value, this.id)
        .subscribe((data: any) => {
          console.log('saved'); 
          this.toast.showSuccess(
            'Congratulation!, Data has been updated.'
          );
          window.location.href = '/ee-list';
          // this.saveForm.reset()
        });
    }
  }



  get f() {
    return this.saveForm.controls;
  }
}
