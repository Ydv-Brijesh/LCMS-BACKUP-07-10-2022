import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-ee-add',
  templateUrl: './ee-add.component.html',
  styleUrls: ['./ee-add.component.css']
})
export class EEAddComponent implements OnInit {

  
  saveForm: any;
  isValidFormSubmitted!: boolean;
  getData: any;
  getDataDist: any;

  constructor(
    private fb: UntypedFormBuilder,
    private ho: MasterService,
    private toast: ToasterService,

  ) { }

  ngOnInit(): void {
    this.onforminit();
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
  onforminit() {
    this.saveForm = this.fb.group({
      se_id:['',Validators.required],
      ee_name: ['',Validators.required],      
      ee_email: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),]],
      ee_designation: ['',Validators.required],
      ee_mobile: ['',[Validators.required, Validators.pattern('^[0-9][0-9]{9}$')]],
      ee_district_id: ['',Validators.required],
      ee_block: [''],
      ee_village: [''],
      ee_pincode: ['',[Validators.pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')]],
      ee_address: [''],
      ee_divition: [''],
    });
  }
  clickFunction() {
    this.isValidFormSubmitted = false;
    if (this.saveForm.invalid) {
      console.log(this.saveForm, 'error');
      this.isValidFormSubmitted = true;
    } else {
      console.log(this.saveForm.value, 'true');
      this.ho
        .saveEE(this.saveForm.value)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
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
