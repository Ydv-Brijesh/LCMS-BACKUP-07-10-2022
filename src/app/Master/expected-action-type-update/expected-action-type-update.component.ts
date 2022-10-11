import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-expected-action-type-update',
  templateUrl: './expected-action-type-update.component.html',
  styleUrls: ['./expected-action-type-update.component.css']
})
export class ExpectedActionTypeUpdateComponent implements OnInit {
  isValidFormSubmitted!: boolean;
  saveForm: any;
  getData: any;
  id: any;
  EditData: any;

  constructor(
    private fb: UntypedFormBuilder,
    private MasterS: MasterService,
    private toast: ToasterService,
    private _Activatedroute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');

    this.MasterS
    .editExpectedAction(this.id)
    .subscribe((data: any) => {
      console.log(data.updateData,"status data");
      
      this.EditData=data.updateData[0];
      this.onforminit(this.EditData)
    })
  
  }
  onforminit(userData: any) {
    this.saveForm = this.fb.group({
      action_name: [userData.action_name,Validators.required],
      action_discription: [userData.action_discription]
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
        .updateExpectedAction(this.saveForm.value, this.id)
        .subscribe((data: any) => {
          console.log('saved'); 
          this.toast.showSuccess(
            'Congratulation!, Data has been updated.'
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
