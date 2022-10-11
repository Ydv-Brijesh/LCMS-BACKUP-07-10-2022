import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicDateService } from '../shared/dynamic-date.service';
import {ToasterService} from '../services/toaster.service'
import { UntypedFormGroup, Validators } from '@angular/forms';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date:Date | undefined; 
  localdata: any;
  constructor(private router: Router,
    private toast: ToasterService,
    private AuthS: AuthService,
    private formB: UntypedFormBuilder,) {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }
  username: any;
  appForm!: UntypedFormGroup;
  isPasswordSame: any;
  login_id: any;
  isValidFormSubmitted: any;
  udata: any;
  email: any;
  applicantSdata: any;
  private _id: any;
  Udata: any;
  id:any;
  ngOnInit(): void {
    this.username = localStorage.getItem('username')
    ? localStorage.getItem('username')
    : this.router.navigate(['/']);
    
    


  this.Udata = localStorage.getItem('userdata');
  let uddd = JSON.parse(this.Udata);

  this.applicantSdata = JSON.parse(this.Udata);
  this.onforminit();
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    localStorage.removeItem('userdata');
    this.router.navigate(['/']);
  }

  onforminit() {
    this.appForm = this.formB.group(
      {
        old_pass: ['', [Validators.required]],
        // new_pass: ['', [Validators.required]],
        new_pass: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])],
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

  changeSubmit(): void {
    this.isValidFormSubmitted = false;

    if (this.appForm.invalid) {
      this.isValidFormSubmitted = true;
      console.log(this.appForm, 'error');
    } else {
      console.log(this.appForm, 'true');
      this.AuthS.ChangePassword(
        this.appForm.value,
        this.applicantSdata._id
      ).subscribe((data: any) => {
        console.log('saved');
        if (data.status == 200) {
          this.toast.showSuccess(data.message);
          window.location.reload();
          document.getElementById('closemodal')?.click();
          this.logout();
          window.location.href = '/';
        } else if(data.status == 403) {
          this.toast.showError(
            'Oops! Old Password is not matching'
          );
        }
        else if(data.status == 402) {
          this.toast.showError(
            'Oops! New Password & Confirm Password are not  matching'
          );
        }

        else{
          this.toast.showError(
            'Oops! New Password cannot be same as Current password!'
          );
        }
      });
    }
  }

  public get f() {
    return this.appForm.controls;
  }
 
}
