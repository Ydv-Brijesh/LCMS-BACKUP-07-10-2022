import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToasterService } from '../services/toaster.service';
import {AuthService} from '../services/auth.service'
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  appForm!: UntypedFormGroup;
  isValidFormSubmitted: any;
  btnStatus:any;
  constructor(
    private formB: UntypedFormBuilder,
    private authS: AuthService,
    private toast: ToasterService,
    private router: Router,
    private spinner: NgxSpinnerService
  )  { }

  ngOnInit(): void {
    this. onforminit();
  }

  onforminit() {
    this.appForm = this.formB.group({
      email: ['',Validators.required ],

    });
  }

  clickFunction(): void {
    this.isValidFormSubmitted = false;

    if (this.appForm.invalid) {
      this.isValidFormSubmitted = true;
      console.log(this.appForm, 'error');
      // this.router.navigate(['/view-applicant'])
      this.btnStatus = false;
    } else {
      this.btnStatus=true;
      console.log(this.appForm, 'true');
      this.authS.resetPassword(this.appForm.value).subscribe((data: any) => {
        console.log('saved');
        if (data.statuscode == 200) {
          this.toast.showSuccess(
            'Instructions for resetting your password has been sent your registered e-mail id. Please follow the instructions received in your e-mail to reset your password.'
          );
          setInterval(()=>{
            // this.router.navigate(['/login']);
            localStorage.clear();
            window.location.href="/"
          },3000)

        }
        else {
          this.toast.showError(data.message);
        }


      })

    }
  }

  public get f(){
    return this.appForm.controls;
  }

}
