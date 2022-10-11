import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-court-add',
  templateUrl: './court-add.component.html',
  styleUrls: ['./court-add.component.css']
})
export class CourtAddComponent implements OnInit {

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
  }
  onforminit() {
    this.saveForm = this.fb.group({
      court_name: ['',Validators.required]
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
        .saveCourt(this.saveForm.value)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          window.location.href = '/court-list';
          // this.saveForm.reset()
        });
    }
  }

  get f() {
    return this.saveForm.controls;
  }
}
