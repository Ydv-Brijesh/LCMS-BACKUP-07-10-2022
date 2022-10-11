import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-se-update',
  templateUrl: './se-update.component.html',
  styleUrls: ['./se-update.component.css']
})
export class SeUpdateComponent implements OnInit {
  id: any;
  EditData: any;
  saveForm: any;
  isValidFormSubmitted!: boolean;
  getData: any;

  constructor(
    private MasterS: MasterService,
    private fb: UntypedFormBuilder,
    private toast: ToasterService,
    private _Activatedroute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this. viewdataOrgCe();
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    console.log(this.id,"SE ID");
    
    
     this.MasterS
    .editSE(this.id)
    .subscribe((data: any) => {
      // console.log(data.updateData[0],"SE DAta aupdate by id");
      this.EditData=data.updateData[0];
      this.onforminit(this.EditData)
    })
  }
 
  viewdataOrgCe(){
    this.MasterS.getSubOrAllData().subscribe((data: any) => {
      // console.log(data.resultData,"sub org cre data");
      this.getData = data.resultData;
    });
  }
  onforminit(userData: any) {
    // console.log(userData,'sub org data');
    
    this.saveForm = this.fb.group({
      sub_org_id: [userData.sub_org_id],
      se_name: [userData.se_name],
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
        .updateSE(this.saveForm.value, this.id)
        .subscribe((data: any) => {
          console.log(data); 
          this.toast.showSuccess(
            'Congratulation!, Data has been updated.'
          );
          window.location.href = '/se-list';
          // this.saveForm.reset()
        });
    }
  }

  get f() {
    return this.saveForm.controls;
  }

}
