import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder,Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { CaseService } from 'src/app/services/case.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  saveForm: any;
  getDataS: any;
  getDataOrg: any;
  getDataEE: any;
  getDataDist: any;
  getDataDept: any;
  isValidFormSubmitted!: boolean;
  isPasswordSame: any;
  username: any;
  router: any;
  Udata: any;
  district: any;

  constructor(
    private fb: UntypedFormBuilder,
    private toast: ToasterService,
    private CaseS: CaseService,
    private MasterS: MasterService,
    private AuthS: AuthService,
  ) { }

  ngOnInit(): void {


    this.username = localStorage.getItem('username')
    ? localStorage.getItem('username')
    : this.router.navigate(['/']);
  this.Udata = localStorage.getItem('userdata');

    this.secData();
    this.OrgData();
    this.viewdataEE();
    this.districtData();
    this.departmentData();
    this. onforminit();
  }

  onforminit() {
    this.saveForm = this.fb.group({
      username: ['',Validators.required],
      designation: [''],
      // department: ['',Validators.required],
      // section: ['',Validators.required],      
      email: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),]],
      mobile: ['',[Validators.required, Validators.pattern('^[0-9][0-9]{9}$')]],
      district: ['',Validators.required],
      orgnization: ['',Validators.required],
      circle_name: [''],
      // ee_name: ['',Validators.required],
      password: ['',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      confirm_password: ['', [Validators.required]],
      office_name: [''],
      created_by:[this.username],
      role: ['',Validators.required],
    },
    { validators: this.checkPassword('password', 'confirm_password') }
    );
  }
  checkPassword(controlName: any, matchingControlName: any) {
    return (formGroup: FormGroup) => {
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

  clickFunction() {
    this.isValidFormSubmitted = false;
    if (this.saveForm.invalid) {
      console.log(this.saveForm, 'error');
      this.toast.showError(
        'Required fields are missing.'
      );
      this.isValidFormSubmitted = true;
    } else {
      console.log(this.saveForm.value, 'true');
      this.AuthS
        .saveUser(this.saveForm.value)
        // .subscribe((data: any) => {
        //   console.log('saved');
        //   this.toast.showSuccess(
        //     'Congratulation!, Data has been submited.'
        //   );
        //   window.location.href = '/list-user';
        //   // this.saveForm.reset()
        // });
        .subscribe((data: any) => {
          if (data.statuscode === 200) {
            console.log('saved');
            this.toast.showSuccess(
              'Congratulation!, Data has been submited.'
            );
            window.location.href = '/list-user';
          }
          else {
            this.toast.showError('Oops! Email is all ready exist!');
          }


        });
    }
  }
  get f() {
    return this.saveForm.controls;
  }
  secData() {
    this.MasterS.GetSecdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataS = data.resultData;
    });
  }

  OrgData(){
    this.MasterS.GetSubOrgdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataOrg = data.resultData;
    });
  }

  viewdataEE(){
    this.MasterS.GetEEdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataEE = data.resultData;
    });
  }

  districtData() {
    this.MasterS.GetDistrictata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataDist = data.resultData;
    });
  }

  departmentData(){
    this.MasterS.GetOrgdata().subscribe((data: any) => {
      console.log(data);
      this.getDataDept = data.resultData;
    });
  }


  filter(data: any) {
    this.district=[]
    // let petitionerData= this.saveForm.value.district
   //  console.log(petitionerData)
    // for(let i of petitionerData){
    //  console.log(i)
    //  this.MasterS
    //    .GetDistrictata()
    //    .subscribe((data: any) => {
    //      console.log(data.resultData[0])
    //      this.district.push(data.resultData[0]);
    //      // console.log(data);
 
    //    });
    //  }
    
  }
}
