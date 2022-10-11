import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SchemeLimitSetting } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';
import { ToasterService } from 'src/app/shared/toaster.service';

@Component({
  selector: 'app-add-limit',
  templateUrl: './add-limit.component.html',
  styleUrls: ['./add-limit.component.css']
})
export class AddLimitComponent implements OnInit {
  schemeLimitForm: UntypedFormGroup;
  constructor(private formBuilder: UntypedFormBuilder,
    private data: DataService,
    private router: Router,
    private toster: ToasterService) {
    this.schemeLimitForm = this.formBuilder.group({
      schemeId: [''],
      schemeComponentId: [''],
      SchemeSubComponentId: [''],
      district: [''],
      limitAllocationAmount: [''],
      centralShare: [''],
      stateShare: [''],
      componentName: [''],
      componentCode: ['']
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const newSchemeLimit = [new SchemeLimitSetting(
      this.schemeLimitForm.value.componentName,
      this.schemeLimitForm.value.schemeId,
      this.schemeLimitForm.value.schemeComponentId,
      this.schemeLimitForm.value.subComponentID,
      this.schemeLimitForm.value.district,
      this.schemeLimitForm.value.limitAllocationAmount,
      this.schemeLimitForm.value.stateShare,
      this.schemeLimitForm.value.centralShare
    )]
    this.data.addnewschemeLimit(newSchemeLimit)
    this.toster.showSuccess('New Scheme Limit Successfully Added')
    this.router.navigate(['/dashboard/system-configuration/limitSetting'])

  }

  cancel() {
    this.router.navigate(['/dashboard/system-configuration/limitSetting'])
  }

}
