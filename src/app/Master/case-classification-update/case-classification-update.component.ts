import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-case-classification-update',
  templateUrl: './case-classification-update.component.html',
  styleUrls: ['./case-classification-update.component.css']
})
export class CaseClassificationUpdateComponent implements OnInit {
  id: any;
  EditData: any;
  saveForm: any;
  isValidFormSubmitted!: boolean;

  constructor(
    private fb: UntypedFormBuilder,
    private MasterS: MasterService,
    private toast: ToasterService,
    private _Activatedroute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');

    this.MasterS
    .editCaseClassi(this.id)
    .subscribe((data: any) => {
      console.log(data.updateData,"status data");
      
      this.EditData=data.updateData[0];
      this.onforminit(this.EditData)
    })
  
  }
  onforminit(userData: any) {
    this.saveForm = this.fb.group({
      case_classi_name: [userData.case_classi_name,Validators.required]
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
        .updateCaseClassi(this.saveForm.value, this.id)
        .subscribe((data: any) => {
          console.log('saved'); 
          this.toast.showSuccess(
            'Congratulation!, Data has been updated.'
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
