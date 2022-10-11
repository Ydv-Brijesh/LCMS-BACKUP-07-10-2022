import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-councel-update',
  templateUrl: './councel-update.component.html',
  styleUrls: ['./councel-update.component.css']
})
export class CouncelUpdateComponent implements OnInit {
  id: any;
  EditData: any;
  saveForm: any;
  isValidFormSubmitted!: boolean;

  constructor(
    private MasterS: MasterService,
    private fb: UntypedFormBuilder,
    private toast: ToasterService,
    private _Activatedroute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');

    this.MasterS
    .editCouncel(this.id)
    .subscribe((data: any) => {
      this.EditData=data.updateData[0];
      this.onforminit(this.EditData)
    })
  }

  onforminit(userData: any) {
    this.saveForm = this.fb.group({
      coun_name: [userData.coun_name,Validators.required],
      coun_mobile: [userData.coun_mobile,[Validators.required, Validators.pattern('^[0-9][0-9]{9}$')]],
      coun_email: [userData.coun_email,[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),]],
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
        .updateCouncel(this.saveForm.value, this.id)
        .subscribe((data: any) => {
          console.log('saved'); 
          this.toast.showSuccess(
            'Congratulation!, Data has been updated.'
          );
          window.location.href = '/counsel-list';
          // this.saveForm.reset()
        });
    }
  }

  get f() {
    return this.saveForm.controls;
  }

}
