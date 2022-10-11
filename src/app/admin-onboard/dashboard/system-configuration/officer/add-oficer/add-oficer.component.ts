import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Officer } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';
import { ToasterService } from 'src/app/shared/toaster.service';

@Component({
  selector: 'app-add-oficer',
  templateUrl: './add-oficer.component.html',
  styleUrls: ['./add-oficer.component.css']
})
export class AddOficerComponent implements OnInit {
  officerForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder,
    private data: DataService,
    private router: Router,
    private toster: ToasterService) {
    this.officerForm = this.formBuilder.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      dob: [''],
      gender: [''],
      fatherName: [''],
      aadhaarNo: [''],
      panNo: [''],
      mobileNumber: [''],
      email: [''],
      designation: ['']

    })

  }

  ngOnInit(): void {

  }
  onSubmit() {
    const name = this.officerForm.value.firstName + " " + this.officerForm.value.middleName + ' ' + this.officerForm.value.lastName
    const newOfficer = [new Officer(
      name,
      this.officerForm.value.dob,
      this.officerForm.value.gender,
      this.officerForm.value.fatherName,
      this.officerForm.value.aadhaarNo,
      this.officerForm.value.panNo,
      this.officerForm.value.mobileNumber,
      this.officerForm.value.email
    )]
    this.data.addnewOfficer(newOfficer)
    this.toster.showSuccess('New Officer Successfully Added')
    this.router.navigate(['/dashboard/system-configuration/officer'])

  }
  cancel() {
    this.router.navigate(['/dashboard/system-configuration/officer'])

  }

}
