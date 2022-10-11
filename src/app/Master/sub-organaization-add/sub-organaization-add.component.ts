import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-sub-organaization-add',
  templateUrl: './sub-organaization-add.component.html',
  styleUrls: ['./sub-organaization-add.component.css']
})
export class SubOrganaizationAddComponent implements OnInit {
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
    this.viewSubOrgdata();
  }
  viewSubOrgdata(){
    this.ho.GetOrgdata().subscribe((data: any) => {
      console.log(data);
      this.getData = data.resultData;
    });
  }
  onforminit() {
    this.saveForm = this.fb.group({
      sub_org_name: ['',Validators.required],
      org_id: ['',Validators.required],
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
        .saveSubOrg(this.saveForm.value)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          window.location.href = '/sub-org-list';
          // this.saveForm.reset()
        });
    }
  }

  get f() {
    return this.saveForm.controls;
  }

}
