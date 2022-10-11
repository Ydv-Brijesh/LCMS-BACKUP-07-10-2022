import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Agency } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';
import { ToasterService } from 'src/app/shared/toaster.service';

@Component({
  selector: 'app-add-agency',
  templateUrl: './add-agency.component.html',
  styleUrls: ['./add-agency.component.css']
})
export class AddAgencyComponent implements OnInit {
  agencyform: UntypedFormGroup
  constructor(private formBuilder: UntypedFormBuilder,
    private data: DataService,
    private router: Router,
    private toster: ToasterService) {
    this.agencyform = this.formBuilder.group({
      agencyCode: [''],
      agencyName: [''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const newagency = [new Agency(
      this.agencyform.value.agencyCode,
      this.agencyform.value.agencyName,
    )]
    this.data.addnewAgency(newagency)
    this.toster.showSuccess('New Agency Component Successfully Added')
    this.router.navigate(['/dashboard/system-configuration/agencyComponent'])

  }
  cancel() {
    this.router.navigate(['/dashboard/system-configuration/agencyComponent'])
  }
}
