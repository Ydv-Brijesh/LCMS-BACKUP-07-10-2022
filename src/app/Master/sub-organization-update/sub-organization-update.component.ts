import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sub-organization-update',
  templateUrl: './sub-organization-update.component.html',
  styleUrls: ['./sub-organization-update.component.css']
})
export class SubOrganizationUpdateComponent implements OnInit {
  saveForm: any;
  id: any;
  EditData: any;
  isValidFormSubmitted!: boolean;
  getData: any;

  constructor(
    private MasterS: MasterService,
    private fb: UntypedFormBuilder,
    private toast: ToasterService,
    private _Activatedroute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');

    this.viewSubOrgdata();
     this.MasterS
    .editSubOrg(this.id)
    .subscribe((data: any) => {
      console.log(data.updateData[0]);
      this.EditData=data.updateData[0];
      this.onforminit(this.EditData)
    })
  }
  viewSubOrgdata(){
    this.MasterS.GetOrgdata().subscribe((data: any) => {
      console.log(data);
      this.getData = data.resultData;
    });
  }

  onforminit(userData: any) {
    console.log(userData,'sub org data');
    
    this.saveForm = this.fb.group({
      org_id: [userData.org_id,Validators.required],
      sub_org_name: [userData.sub_org_name,Validators.required],
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
        .updateSubOrg(this.saveForm.value, this.id)
        .subscribe((data: any) => {
          console.log('saved'); 
          this.toast.showSuccess(
            'Congratulation!, Data has been updated.'
          );
          window.location.href = '/sub-org-list';
          // this.saveForm.reset()
        });
    }
  }

  get f() {
    return this.saveForm.controls;
  }

}
