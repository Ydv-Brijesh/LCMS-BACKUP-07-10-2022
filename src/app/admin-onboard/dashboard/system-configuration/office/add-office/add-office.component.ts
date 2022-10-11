import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { Office } from 'src/app/shared/data.model';
import { ToasterService } from 'src/app/shared/toaster.service';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css']
})
export class AddOfficeComponent implements OnInit {
  officeForm: UntypedFormGroup;


  constructor(private formBuilder:UntypedFormBuilder,
    private  data:DataService,
    private router: Router,
    private toster: ToasterService) {
    this.officeForm = this.formBuilder.group({
      officeType: [''],
      officeName: [''],
      officeDescription: [''],
      contactNumber: [''],
      highestOfficer: [''],
      officerDesignation: [''],
      officerEmail: [''],
      officerMobile: [''],
      gstNumber: [''],
      pan: [''],
      nodalOfficerMobile:[''],
      nodalOfficerEmail:[''],
      nodalOfficerName:[''],
  });
   }

  ngOnInit(): void {
 
  }

  onSubmit() {
    const newoffice = [new Office(
      this.officeForm.value.officeType,
      this.officeForm.value.officeName,
      this.officeForm.value.officeDescription,
      this.officeForm.value.contactNumber,
      this.officeForm.value.highestOfficer,
      this.officeForm.value.officerDesignation,
      this.officeForm.value.officerEmail,
      this.officeForm.value.officerMobile,
      this.officeForm.value.gstNumber,
      this.officeForm.value.pan,
      this.officeForm.value.nodalOfficerName,
      this.officeForm.value.nodalOfficerMobile,
      this.officeForm.value.nodalOfficerEmail,
      )]
      console.log(newoffice);
    this.data.addnewOffice(newoffice)
    this.toster.showSuccess('New Office Successfully Added')
    this.router.navigate(['/dashboard/system-configuration/office'])
  }

  cancel() {
    this.router.navigate(['/dashboard/system-configuration/office'])

}


}
