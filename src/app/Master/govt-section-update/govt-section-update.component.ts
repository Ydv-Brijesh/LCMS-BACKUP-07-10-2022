import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-govt-section-update',
  templateUrl: './govt-section-update.component.html',
  styleUrls: ['./govt-section-update.component.css']
})
export class GovtSectionUpdateComponent implements OnInit {
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
    .editGovtSec(this.id)
    .subscribe((data: any) => {
      console.log(data.updateData[0].section_name);
      this.EditData=data.updateData[0];
      this.onforminit(this.EditData)
    })
  }

  onforminit(userData: any) {
    this.saveForm = this.fb.group({
      section_name: [userData.section_name,Validators.required],
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
        .updateGovtSec(this.saveForm.value, this.id)
        .subscribe((data: any) => {
          console.log('saved'); 
          this.toast.showSuccess(
            'Congratulation!, Data has been updated.'
          );
          window.location.href = '/govt-section-list';
          // this.saveForm.reset()
        });
    }
  }

  get f() {
    return this.saveForm.controls;
  }

}
