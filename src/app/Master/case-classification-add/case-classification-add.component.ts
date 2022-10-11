import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-case-classification-add',
  templateUrl: './case-classification-add.component.html',
  styleUrls: ['./case-classification-add.component.css']
})
export class CaseClassificationAddComponent implements OnInit {

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
      case_classi_name: ['',Validators.required],
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
        .saveCaseClassi(this.saveForm.value)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          window.location.href = '/case-classification-list';
          // this.saveForm.reset()
        });
    }
  }

  get f() {
    return this.saveForm.controls;
  }

}
