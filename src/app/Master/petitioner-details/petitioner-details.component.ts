import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { CaseService } from 'src/app/services/case.service';
import { Form, UntypedFormBuilder, UntypedFormControl, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-petitioner-details',
  templateUrl: './petitioner-details.component.html',
  styleUrls: ['./petitioner-details.component.css']
})
export class PetitionerDetailsComponent implements OnInit {
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
    .editPetitioner(this.id)
    .subscribe((data: any) => {
      console.log(data.updateData[0]);
      
      this.EditData=data.updateData[0];
      this.onforminit(this.EditData)
    })
    this.districtData();
  }
  districtData(){
    this.MasterS.GetDistrictata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataDist = data.resultData;
    });
  }
  onforminit(userData:any) {
    
    this.saveForm = this.fb.group({
      name: [userData.name,Validators.required],
      designation: [userData.designation,Validators.required],
      email: [userData.email,[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),]],
      mobile: [userData.mobile,[Validators.required, Validators.pattern('^[0-9][0-9]{9}$')]],
      district_id: [userData.district_id,Validators.required],
      block: [userData.block],
      village: [userData.village],
      pincode: [userData.pincodes,[Validators.pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')]],
      address: [userData.address],
      divition: [userData.divition],
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
        .updatePetitioner(this.saveForm.value, this.id)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          window.location.href = '/petitioner-list';
       
        });

    }
 

  }

}
