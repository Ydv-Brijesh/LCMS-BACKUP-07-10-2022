import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';
import { ToasterService } from 'src/app/shared/toaster.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  vendorForm: UntypedFormGroup
  constructor(private formBuilder: UntypedFormBuilder,
    private data: DataService,
    private router: Router,
    private toster: ToasterService) {
    this.vendorForm = this.formBuilder.group({
      vendorType: [''],
      vendorService: [''],
      vendorSubService: [''],
      vendorName: [''],
      vendorDob: [''],
      vendorPanNumber: [''],
      vendorGstNumber: [''],
      vendorAadharNumber: [''],
      vendorTanNumber: [''],
      vendorTinNumber: [''],
      vendorServiceTaxNumber: [''],
      vendorMobileNumber: [''],
      vendorPhoneNumber: [''],
      vendorBankName: [''],
      vendorBankIfscCode: [''],
      vendorAccountNumber: [''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const newvendor = [new Vendor(
      this.vendorForm.value.vendorType,
      this.vendorForm.value.vendorService,
      this.vendorForm.value.vendorSubService,
      this.vendorForm.value.vendorName,
      this.vendorForm.value.vendorDob,
      this.vendorForm.value.vendorPanNumber,
      this.vendorForm.value.vendorGstNumber,
      this.vendorForm.value.vendorAadhar,
      this.vendorForm.value.vendorTanNumber,
      this.vendorForm.value.vendorTinNumber,
      this.vendorForm.value.vendorServiceTaxNumber,
      this.vendorForm.value.vendorMobileNumber,
      this.vendorForm.value.vendorPhoneNumber,
      this.vendorForm.value.vendorEmail,
      this.vendorForm.value.vendorBankName,
      this.vendorForm.value.vendorBankIfscCode,
      this.vendorForm.value.vendorAccountNumber,
    )]
    this.data.addnewVendor(newvendor)
    this.toster.showSuccess('New Vendor  Successfully Added')
    this.router.navigate(['/dashboard/system-configuration/vendor'])

  }
  cancel() {
    this.router.navigate(['/dashboard/system-configuration/vendor'])
  }
}
