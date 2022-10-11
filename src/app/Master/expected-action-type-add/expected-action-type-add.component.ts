import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
@Component({
  selector: 'app-expected-action-type-add',
  templateUrl: './expected-action-type-add.component.html',
  styleUrls: ['./expected-action-type-add.component.css']
})
export class ExpectedActionTypeAddComponent implements OnInit {

  saveForm: any;
  isValidFormSubmitted!: boolean;

  constructor(
    private fb: UntypedFormBuilder,
    private ho: MasterService,
    private toast: ToasterService,

  ) { }

  ngOnInit(): void {
    this.onforminit();
  }

  onforminit() {
    this.saveForm = this.fb.group({
      action_name: ['',Validators.required],
      action_discription: [''],
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
        .saveExpectedAction(this.saveForm.value)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          window.location.href = '/expected-action-list';
          // this.saveForm.reset()
        });
    }
  }

  get f() {
    return this.saveForm.controls;
  }

}
