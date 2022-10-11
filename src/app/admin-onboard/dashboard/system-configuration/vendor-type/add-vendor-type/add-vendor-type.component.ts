import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorType } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';
import { ToasterService } from 'src/app/shared/toaster.service';

@Component({
  selector: 'app-add-vendor-type',
  templateUrl: './add-vendor-type.component.html',
  styleUrls: ['./add-vendor-type.component.css']
})
export class AddVendorTypeComponent implements OnInit {
  vendorType: UntypedFormGroup
  constructor(private formBuilder: UntypedFormBuilder,
    private data: DataService,
    private router: Router,
    private toster: ToasterService) {
    this.vendorType = this.formBuilder.group({
      vendorTypeCode: [''],
      vendorTypeName: [''],
      vendorTypeDescription: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const newvendorType = [new VendorType(
      this.vendorType.value.vendorTypeCode,
      this.vendorType.value.vendorTypeName,
      this.vendorType.value.vendorTypeDescription,

    )]
    this.data.addnewVendorType(newvendorType)
    this.toster.showSuccess('New Vendor Type Successfully Added')
    this.router.navigate(['/dashboard/system-configuration/vendorType'])

  }
  cancel() {
    this.router.navigate(['/dashboard/system-configuration/vendorType'])
  }
}
