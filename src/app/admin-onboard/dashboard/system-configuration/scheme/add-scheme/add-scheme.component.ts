import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Designation } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';
import { ToasterService } from 'src/app/shared/toaster.service';

@Component({
  selector: 'app-add-scheme',
  templateUrl: './add-scheme.component.html',
  styleUrls: ['./add-scheme.component.css']
})
export class AddSchemeComponent implements OnInit {
  schemeForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder,
    private data: DataService,
    private router: Router,
    private toster: ToasterService) {
    this.schemeForm = this.formBuilder.group({
      schemeCode: [''],
      schemeName: [''],
      schemeComponentName: [''],
      schemeClassification: [''],
      schemeClassificationHeads: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.schemeForm);

    // const designation = [new Designation(
    //   this.schemeForm.value.designationName,
    //   this.schemeForm.value.reportingTo,
    // )]
    // console.log(designation);
    // this.data.addnewdesignation(designation)
    this.toster.showSuccess('New Scheme Successfully Added')
    this.router.navigate(['/dashboard/system-configuration/scheme'])
  }
  cancel() {
    this.router.navigate(['/dashboard/system-configuration/scheme'])
  }

}
