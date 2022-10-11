import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ToasterService} from '../services/toaster.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UntypedFormBuilder, UntypedFormGroup , Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 
  checkoutForm!: UntypedFormGroup;

  public active: boolean = false;

  public display: boolean = false;
  public displaypassword: boolean = false;
  public displayotp: boolean = false;
  captcha: any;
  captchaError: any;

  constructor(
    private fb: UntypedFormBuilder,
    private auth: AuthService,
    private toast: ToasterService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}



  SubmitLogin(): void {
    this.spinner.show();
    if (this.checkoutForm.valid) {
      if (this.captcha) {
        this.auth.loginUser(this.checkoutForm.value).subscribe((user: any) => {
          if (user.status === 200) {
            // console.log(user.results.role);
            if (user.results.role === 'super admin') {
              if (user.results.status === true) {
                localStorage.setItem('username', user.results.username);
                localStorage.setItem('role', user.results.role);
                localStorage.setItem('user', user.results.email);
                localStorage.setItem('userdata', JSON.stringify(user.results));
                setTimeout(() => {
                  window.location.href = '/dashboard';
                  console.log('Super Admin');
                }, 1500);
              } else {
                setTimeout(() => {
                  this.toast.showError(
                    'Oops! E-mail is not activated. Kindly check your e-mail to activate your account.'
                  );
                  // this.router.navigate(['/login']);
                  this.spinner.hide();
                  window.location.href = '/login';
                }, 1500);
              }
            }
            
            else {
              localStorage.setItem('username', user.results.username);
              localStorage.setItem('user', user.results.email);
              localStorage.setItem('role', user.results.designation);
              localStorage.setItem('userdata', JSON.stringify(user.results));
              setTimeout(() => {
                // this.router.navigate(['/']);
                window.location.href = '/dashboard';
                console.log('Super Admin');
              }, 1500);
            }
          } else if (user.status === 404) {
            this.toast.showError('Oops! Credentials entered are not valid!');
            this.spinner.hide();
          }
          if (user.status === 401) {
            this.toast.showError('Oops! Credentials entered are not valid!');
            this.spinner.hide();
          }
        });
      }
       else {
        this.toast.showError('Please verify that you are not a robot.');
        this.captchaError = 'Please verify that you are not a robot.';
        this.spinner.hide();
      }
    } else {
      this.toast.showError('Oops! Please enter Credentials !');
      this.spinner.hide();
    }
  }

  
  SubmitOtp(): void {
    this.auth
      .VerifyEmail(this.checkoutForm.value)
      .subscribe((response: any) => {
        if (response.status === 200) {
          console.log(response);
          localStorage.setItem('username', response.results[0].username);
          localStorage.setItem('user', response.results[0].email);
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1500);
        } else {
          this.toast.showError(response.message);
        }
      });
  }


  CheckEmail(usertype: any): void {
    this.checkoutForm.valid
      ? this.auth.CheckEmail(this.checkoutForm.value).subscribe((user: any) => {
          if (user.status === 200) {
            this.toast.showSuccess(user.message);
            setTimeout(() => {
              this.display = true;
              this.active = true;
              // if (usertype == 'otp') {
              //   this.auth
              //     .SendEmail(this.checkoutForm.value)
              //     .subscribe((data: any) => {
              //       if (data.status == 200) {
              //         this.toast.showSuccess(data.message);
              //         this.displayotp = true;
              //       } else {
              //         this.toast.showError(data.message);
              //         this.displayotp = false;
              //       }
              //     });
              // } else 
              if (usertype == 'password') {
                this.displaypassword = true;
              }
            }, 1500);
            // alert(user.message)
          } else if (user.status === 404) {
            this.toast.showError(user.message);
          }
          if (user.status === 401) {
            this.toast.showError(user.message);
          }
        })
      : this.toast.showError('Oops! Credentials entered are not valid!');
  }

  
  ngOnInit(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    localStorage.removeItem('userdata');
    this.forminit();
    this.spinner.hide();
  }

  forminit() {
    this.checkoutForm = this.fb.group({
      email: [
        '',
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ],
      password: [''],
    });
  }

  resolved(captchaResponse: any) {
    this.captcha = captchaResponse;
    this.captchaError = '';
  }





}
