import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/shared/toaster.service';
import { Designation } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent implements OnInit {
  designationForm:UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder,
    private data: DataService,
    private router: Router,
    private toster: ToasterService) { 
    this.designationForm= this.formBuilder.group({
      designationName:['',Validators.required],
      reportingTo:['']

    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const designation = [new Designation(
      this.designationForm.value.designationName,
      this.designationForm.value.reportingTo,
    )]
    console.log(designation);
    this.data.addnewdesignation(designation)
    this.toster.showSuccess('Office Successfully Added')
    this.router.navigate(['/dashboard/system-configuration/designation'])
  }
  cancel() {
    this.router.navigate(['/dashboard/system-configuration/designation'])
  }

}
