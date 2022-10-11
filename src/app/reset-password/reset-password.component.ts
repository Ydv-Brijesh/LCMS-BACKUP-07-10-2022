import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {ToasterService} from '../services/toaster.service'
import { Router, ActivatedRoute} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    private router: Router,
    private toast: ToasterService,
    private AuthS: AuthService,
    private formB: UntypedFormBuilder,
    private _Activatedroute: ActivatedRoute,
  ) { }

  username: any;
  appForm!: UntypedFormGroup;
  isPasswordSame: any;
  login_id: any;
  isValidFormSubmitted!: boolean;
  udata: any;
  email: any;
  applicantSdata: any;
  private _id: any;
  id:any;
  Udata: any;

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    this.onforminit()
  }

  onforminit() {
    this.appForm = this.formB.group(
      {
        new_pass: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
        c_pass: ['', [Validators.required]],
      },
      { validators: this.checkPassword('new_pass', 'c_pass') }
    );
  }

  checkPassword(controlName: any, matchingControlName: any) {
    return (formGroup: UntypedFormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
        this.isPasswordSame = matchingControl.status == 'VALID' ? true : false;
      } else {
        matchingControl.setErrors(null);
        this.isPasswordSame = matchingControl.status == 'VALID' ? true : false;
      }
    };
  }

  clickFunction(){
    this.isValidFormSubmitted = false;
    if (this.appForm.invalid) {
      console.log(this.appForm, 'error');
      // this.toast.showError(
      //   'Required fields are missing.'
      // );
      this.isValidFormSubmitted = true;
    } else {
      console.log(this.appForm.value, 'true');
      this.AuthS
        .resetPasswordSave(this.appForm.value, this.id)
        .subscribe((data: any) => {
          console.log(data,'saved');
          this.toast.showSuccess(
            'Congratulation!, Password has been updated.'
          );
          window.location.href = '/';
          // this.saveForm.reset()
        });
    }
  }

  public get f() {
    return this.appForm.controls;
  }
}
