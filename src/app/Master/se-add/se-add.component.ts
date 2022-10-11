import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';


@Component({
  selector: 'app-se-add',
  templateUrl: './se-add.component.html',
  styleUrls: ['./se-add.component.css']
})
export class SEAddComponent implements OnInit {

  
  saveForm: any;
  isValidFormSubmitted!: boolean;
  getData: any;

  constructor(
    private fb: UntypedFormBuilder,
    private MasterS: MasterService,
    private toast: ToasterService,

  ) { }

  ngOnInit(): void {
    this.onforminit();
    this.viewdataOrgCe();
  }

  viewdataOrgCe(){
    this.MasterS.getSubOrAllData().subscribe((data: any) => {
      // console.log(data.resultData,"sub org cre data");
      this.getData = data.resultData;
    });
  }
  onforminit() {
    this.saveForm = this.fb.group({
      se_name: ['',Validators.required],
      sub_org_id: ['',Validators.required]
    });
  }
  clickFunction() {
    this.isValidFormSubmitted = false;
    if (this.saveForm.invalid) {
      console.log(this.saveForm, 'error');
      this.isValidFormSubmitted = true;
    } else {
      console.log(this.saveForm.value, 'true');
      this.MasterS
        .saveSE(this.saveForm.value)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          window.location.href = '/se-list';
          // this.saveForm.reset()
        });
    }
  }

  get f() {
    return this.saveForm.controls;
  }

}
