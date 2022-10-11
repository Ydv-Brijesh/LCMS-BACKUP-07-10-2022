import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-case-type-add',
  templateUrl: './case-type-add.component.html',
  styleUrls: ['./case-type-add.component.css']
})
export class CaseTypeAddComponent implements OnInit {


  saveForm: any;
  isValidFormSubmitted!: boolean;
  getData: any;

  constructor(
    private fb: UntypedFormBuilder,
    private ho: MasterService,
    private toast: ToasterService,

  ) { }

  ngOnInit(): void {
    this.onforminit();
    this.viewCourtdata();
  }
  viewCourtdata(){
    this.ho.GetCourtdata().subscribe((data: any) => {
      console.log(data);
      this.getData = data.resultData;
    });
  }
  onforminit() {
    this.saveForm = this.fb.group({
      case_type_name: ['',Validators.required],
      court_id: ['',Validators.required],
    });
  }
  clickFunction() {
    this.isValidFormSubmitted = false;
    if (this.saveForm.invalid) {
      console.log(this.saveForm, 'error');
      this.isValidFormSubmitted = true;
    } else {
      console.log(this.saveForm.value, 'true');
      this.ho
        .saveCaseType(this.saveForm.value)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          window.location.href = '/case-type-list';
          // this.saveForm.reset()
        });
    }
  }

  get f() {
    return this.saveForm.controls;
  }

}
